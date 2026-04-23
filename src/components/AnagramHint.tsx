interface AnagramHintProps {
  anagram: string;
}

export function AnagramHint({ anagram }: AnagramHintProps) {
  return (
    <section className="w-full rounded-2xl border border-slate-700/70 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 p-4 shadow-sm sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300/80">
        Anagrama da rodada
      </p>
      <p className="mt-2 text-3xl font-black uppercase tracking-[0.4em] text-slate-50 sm:text-4xl">
        {anagram}
      </p>
    </section>
  );
}
