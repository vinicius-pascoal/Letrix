import Link from "next/link";

interface HeaderProps {
  modeLabel?: string;
}

export function Header({ modeLabel }: HeaderProps) {
  return (
    <header className="w-full border-b border-amber-950/15 bg-amber-50/85 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-2xl font-black uppercase tracking-[0.18em] text-amber-950"
        >
          Letrix
        </Link>
        {modeLabel ? (
          <p className="rounded-full border border-amber-900/20 bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-900 sm:text-sm">
            {modeLabel}
          </p>
        ) : null}
      </div>
    </header>
  );
}
