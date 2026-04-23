import Link from "next/link";

interface HeaderProps {
  modeLabel?: string;
}

export function Header({ modeLabel }: HeaderProps) {
  return (
    <header className="w-full border-b border-amber-950/15 bg-amber-50/85 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-3 py-3 sm:px-5 sm:py-4">
        <Link
          href="/"
          className="text-xl font-black uppercase tracking-[0.14em] text-amber-950 sm:text-2xl sm:tracking-[0.18em]"
        >
          Letrix
        </Link>
        {modeLabel ? (
          <p className="rounded-full border border-amber-900/20 bg-amber-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-900 sm:px-3 sm:text-sm sm:tracking-[0.14em]">
            {modeLabel}
          </p>
        ) : null}
      </div>
    </header>
  );
}
