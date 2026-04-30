interface ResultModalProps {
  open: boolean;
  won: boolean;
  secret: string;
  attemptsUsed: number;
  infiniteMode?: boolean;
  timedMode?: boolean;
  score?: number;
  onPlayAgain: () => void;
  onBackHome: () => void;
}

export function ResultModal({
  open,
  won,
  secret,
  attemptsUsed,
  infiniteMode = false,
  timedMode = false,
  score = 0,
  onPlayAgain,
  onBackHome,
}: ResultModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-3 py-4 sm:px-4">
      <div className="max-h-[calc(100vh-2rem)] w-full max-w-sm overflow-y-auto rounded-2xl border border-slate-700/70 bg-slate-900 p-5 text-slate-50 shadow-xl sm:max-w-md sm:p-6">
        <h2 className="text-xl font-black sm:text-2xl">
          {timedMode ? "Tempo esgotado" : won ? "Acertou!" : "Fim de jogo"}
        </h2>
        <p className="mt-2 text-sm leading-relaxed sm:text-base">
          {timedMode
            ? `Voce fez ${score} ponto(s) na partida de tempo.`
            : won
              ? `Voce descobriu a palavra em ${attemptsUsed} tentativa(s).`
              : "Voce usou todas as tentativas disponiveis."}
        </p>
        <p className="mt-3 rounded-xl bg-slate-800 px-3 py-2 text-sm font-semibold sm:text-base text-slate-100">
          Palavra correta: <span className="uppercase">{secret}</span>
        </p>

        {timedMode ? (
          <p className="mt-3 rounded-xl border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-sm font-semibold text-sky-100 sm:text-base">
            Pontuacao final: <span className="font-black">{score}</span>
          </p>
        ) : null}

        <div className="mt-4 grid grid-cols-1 gap-2 sm:mt-5 sm:grid-cols-2">
          <button
            type="button"
            onClick={onPlayAgain}
            className="rounded-xl bg-sky-500 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-400"
          >
            {infiniteMode ? "Proxima rodada" : "Jogar novamente"}
          </button>
          <button
            type="button"
            onClick={onBackHome}
            className="rounded-xl border border-slate-600/70 bg-slate-950 px-4 py-3 text-sm font-bold text-slate-100 transition hover:bg-slate-800"
          >
            Voltar ao inicio
          </button>
        </div>
      </div>
    </div>
  );
}
