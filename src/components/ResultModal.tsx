interface ResultModalProps {
  open: boolean;
  won: boolean;
  secret: string;
  attemptsUsed: number;
  infiniteMode?: boolean;
  onPlayAgain: () => void;
  onBackHome: () => void;
}

export function ResultModal({
  open,
  won,
  secret,
  attemptsUsed,
  infiniteMode = false,
  onPlayAgain,
  onBackHome,
}: ResultModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-amber-950/65 px-3 py-4 sm:px-4">
      <div className="max-h-[calc(100vh-2rem)] w-full max-w-sm overflow-y-auto rounded-2xl border border-amber-900/30 bg-amber-50 p-5 text-amber-950 shadow-xl sm:max-w-md sm:p-6">
        <h2 className="text-xl font-black sm:text-2xl">
          {won ? "Acertou!" : "Fim de jogo"}
        </h2>
        <p className="mt-2 text-sm leading-relaxed sm:text-base">
          {won
            ? `Voce descobriu a palavra em ${attemptsUsed} tentativa(s).`
            : "Voce usou todas as tentativas disponiveis."}
        </p>
        <p className="mt-3 rounded-xl bg-amber-100 px-3 py-2 text-sm font-semibold sm:text-base">
          Palavra correta: <span className="uppercase">{secret}</span>
        </p>

        <div className="mt-4 grid grid-cols-1 gap-2 sm:mt-5 sm:grid-cols-2">
          <button
            type="button"
            onClick={onPlayAgain}
            className="rounded-xl bg-amber-900 px-4 py-3 text-sm font-bold text-amber-50 transition hover:bg-amber-800"
          >
            {infiniteMode ? "Proxima rodada" : "Jogar novamente"}
          </button>
          <button
            type="button"
            onClick={onBackHome}
            className="rounded-xl border border-amber-900/25 bg-white px-4 py-3 text-sm font-bold text-amber-950 transition hover:bg-amber-100"
          >
            Voltar ao inicio
          </button>
        </div>
      </div>
    </div>
  );
}
