"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AnagramHint } from "@/src/components/AnagramHint";
import { GameBoard } from "@/src/components/GameBoard";
import { Keyboard } from "@/src/components/Keyboard";
import { ResultModal } from "@/src/components/ResultModal";
import { getFeedback } from "@/src/lib/feedback";
import { createRound, type RoundSeed } from "@/src/lib/round";
import { validateGuess } from "@/src/lib/validateGuess";
import { getValidWordsSet } from "@/src/lib/words";
import type {
  GameMode,
  GuessResult,
  LetterState,
  RoundStatus,
} from "@/src/types/game";

interface GameExperienceProps {
  mode: GameMode;
  modeLabel: string;
  initialRound: RoundSeed;
}

const MAX_ATTEMPTS = 2;
const WORD_LENGTH = 5;

type KeyboardPriority = Record<LetterState, number>;

const PRIORITY: KeyboardPriority = {
  empty: 0,
  absent: 1,
  present: 2,
  correct: 3,
};

export function GameExperience({ mode, modeLabel, initialRound }: GameExperienceProps) {
  const router = useRouter();
  const validWords = useMemo(() => getValidWordsSet(), []);
  const [round, setRound] = useState<RoundSeed>(() => initialRound);
  const [attempts, setAttempts] = useState<GuessResult[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [status, setStatus] = useState<RoundStatus>("playing");
  const [message, setMessage] = useState("Organize as letras e descubra a palavra.");

  const attemptsLeft = MAX_ATTEMPTS - attempts.length;

  const keyStates = useMemo(() => {
    const map: Record<string, "correct" | "present" | "absent"> = {};

    for (const attempt of attempts) {
      for (const { letter, state } of attempt.feedback) {
        if (state === "empty") {
          continue;
        }

        const key = letter.toUpperCase();
        const prev = map[key] || "absent";

        if (!map[key] || PRIORITY[state] > PRIORITY[prev]) {
          map[key] = state === "correct" ? "correct" : state === "present" ? "present" : "absent";
        }
      }
    }

    return map;
  }, [attempts]);

  const startNewRound = useCallback(() => {
    setRound(createRound(mode));
    setAttempts([]);
    setCurrentGuess("");
    setStatus("playing");
    setMessage("Nova rodada iniciada. Boa sorte!");
  }, [mode]);

  const submitGuess = useCallback(() => {
    if (status !== "playing") {
      return;
    }

    const normalizedGuess = currentGuess.toLowerCase();
    const validation = validateGuess(normalizedGuess, validWords, round.word);

    if (!validation.valid) {
      setMessage(validation.reason || "Chute invalido.");
      return;
    }

    const feedback = getFeedback(normalizedGuess, round.word);
    const newAttempt: GuessResult = {
      guess: normalizedGuess,
      feedback,
    };

    const nextAttempts = [...attempts, newAttempt];
    setAttempts(nextAttempts);
    setCurrentGuess("");

    if (normalizedGuess === round.word) {
      setStatus("won");
      setMessage("Excelente! Voce acertou a palavra.");
      return;
    }

    if (nextAttempts.length >= MAX_ATTEMPTS) {
      setStatus("lost");
      setMessage("Sem tentativas restantes.");
      return;
    }

    setMessage("Boa tentativa. Continue ajustando a ordem.");
  }, [attempts, currentGuess, round.word, status, validWords]);

  const onKey = useCallback(
    (rawKey: string) => {
      if (status !== "playing") {
        return;
      }

      const key = rawKey.toUpperCase();

      if (key === "ENTER") {
        submitGuess();
        return;
      }

      if (key === "BACK" || key === "BACKSPACE") {
        setCurrentGuess((prev) => prev.slice(0, -1));
        return;
      }

      if (/^[A-Z]$/.test(key) && currentGuess.length < WORD_LENGTH) {
        setCurrentGuess((prev) => `${prev}${key.toLowerCase()}`);
      }
    },
    [currentGuess.length, status, submitGuess],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onKey("ENTER");
        return;
      }

      if (event.key === "Backspace") {
        onKey("BACKSPACE");
        return;
      }

      if (/^[a-zA-Z]$/.test(event.key)) {
        onKey(event.key.toUpperCase());
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKey]);

  return (
    <>
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-4 px-3 pb-6 pt-4 sm:px-5 sm:pt-6 lg:gap-5 lg:pb-8">
        <section className="grid gap-3 rounded-2xl border border-slate-700/60 bg-slate-900/90 p-3 shadow-sm sm:grid-cols-[1fr_auto] sm:items-center sm:p-4 lg:p-5">
          <AnagramHint anagram={round.anagram.toUpperCase()} />
          <div className="space-y-2 rounded-xl border border-slate-700/70 bg-slate-950/70 p-3 sm:min-w-48 lg:min-w-52">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300/75 sm:text-xs">
              Tentativas
            </p>
            <p className="text-lg font-black text-slate-50 sm:text-xl">
              {attemptsLeft} / {MAX_ATTEMPTS}
            </p>
            <p className="text-xs text-slate-300/85 sm:text-sm">{modeLabel}</p>
          </div>
        </section>

        <GameBoard
          attempts={attempts}
          maxAttempts={MAX_ATTEMPTS}
          currentGuess={currentGuess}
          status={status}
        />

        <p className="rounded-xl border border-slate-700/70 bg-slate-900 px-3 py-2 text-xs text-slate-200 sm:text-sm lg:text-base">
          {message}
        </p>

        <Keyboard onKey={onKey} disabled={status !== "playing"} keyStates={keyStates} />
      </main>

      <ResultModal
        open={status !== "playing"}
        won={status === "won"}
        secret={round.word.toUpperCase()}
        attemptsUsed={attempts.length}
        infiniteMode={mode === "infinite"}
        onPlayAgain={startNewRound}
        onBackHome={() => router.push("/")}
      />
    </>
  );
}
