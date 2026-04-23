import Link from "next/link";

interface HeaderProps {
  modeLabel?: string;
}

export function Header({ modeLabel }: HeaderProps) {
  return (
    <header className="w-full border-b border-slate-700/60 bg-slate-950/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-3 py-3 sm:px-5 sm:py-4">
        <Link
          href="/"
          className="text-xl font-black uppercase tracking-[0.14em] text-slate-50 sm:text-2xl sm:tracking-[0.18em]"
        >
          Letrix
        </Link>
        {modeLabel ? (
          <p className="rounded-full border border-slate-600/70 bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-200 sm:px-3 sm:text-sm sm:tracking-[0.14em]">
            {modeLabel}
          </p>
        ) : null}
      </div>
    </header>
  );
}
