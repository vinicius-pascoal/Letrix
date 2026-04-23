import type { GuessResult, RoundStatus } from "@/src/types/game";

interface GameBoardProps {
  attempts: GuessResult[];
  maxAttempts: number;
  currentGuess: string;
  status: RoundStatus;
}

function cellClass(state?: string) {
  if (state === "correct") {
    return "border-emerald-700 bg-emerald-600 text-white";
  }

  if (state === "present") {
    return "border-yellow-700 bg-yellow-500 text-amber-950";
  }

  if (state === "absent") {
    return "border-stone-400 bg-stone-300 text-stone-700";
  }

  return "border-amber-900/25 bg-white text-amber-950";
}

export function GameBoard({
  attempts,
  maxAttempts,
  currentGuess,
  status,
}: GameBoardProps) {
  const rows = Array.from({ length: maxAttempts }, (_, rowIndex) => {
    const attempt = attempts[rowIndex];

    if (attempt) {
      return attempt.feedback.map((letter) => ({
        letter: letter.letter.toUpperCase(),
        state: letter.state,
      }));
    }

    if (rowIndex === attempts.length && status === "playing") {
      return Array.from({ length: 5 }, (_, index) => ({
        letter: (currentGuess[index] || "").toUpperCase(),
        state: "empty",
      }));
    }

    return Array.from({ length: 5 }, () => ({ letter: "", state: "empty" }));
  });

  return (
    <section className="mx-auto w-[min(92vw,18rem)] sm:w-[min(86vw,21rem)] md:w-[min(78vw,24rem)]">
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 md:gap-2.5">
        {rows.flatMap((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`flex aspect-square items-center justify-center rounded-lg border text-lg font-black uppercase transition-all sm:text-xl md:text-2xl ${cellClass(cell.state)}`}
            >
              {cell.letter}
            </div>
          )),
        )}
      </div>
    </section>
  );
}
