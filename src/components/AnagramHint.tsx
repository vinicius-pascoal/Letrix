interface AnagramHintProps {
  anagram: string;
}

export function AnagramHint({ anagram }: AnagramHintProps) {
  return (
    <section className="w-full rounded-2xl border border-amber-900/25 bg-linear-to-r from-orange-200 via-amber-100 to-yellow-100 p-4 shadow-sm sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-900/80">
        Anagrama da rodada
      </p>
      <p className="mt-2 text-3xl font-black uppercase tracking-[0.4em] text-amber-950 sm:text-4xl">
        {anagram}
      </p>
    </section>
  );
}
