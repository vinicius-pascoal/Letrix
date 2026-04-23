import Link from "next/link";
import { Header } from "@/src/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-5 px-3 pb-8 pt-4 sm:gap-6 sm:px-5 sm:pt-8">
        <section className="grid gap-4 rounded-3xl border border-slate-700/60 bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:grid-cols-[1.2fr_1fr] sm:p-7 lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300/70">
              MVP jogavel
            </p>
            <h1 className="mt-2 font-display text-3xl font-black uppercase leading-[0.92] tracking-[0.04em] text-slate-50 sm:text-5xl lg:text-6xl">
              Organize as letras.
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-300 sm:mt-4 sm:text-base">
              No Letrix, voce recebe um anagrama da palavra secreta e precisa
              descobrir a ordem correta em ate 2 tentativas.
            </p>
          </div>

          <div className="grid gap-3 self-end">
            <Link
              href="/daily"
              className="rounded-2xl bg-sky-500 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-sky-400 sm:py-4 sm:text-sm"
            >
              Jogar diario
            </Link>
            <Link
              href="/random"
              className="rounded-2xl border border-slate-600/70 bg-slate-900 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-slate-100 transition hover:bg-slate-800 sm:py-4 sm:text-sm"
            >
              Jogar aleatorio
            </Link>
            <Link
              href="/infinite"
              className="rounded-2xl border border-slate-600/70 bg-slate-900 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-slate-100 transition hover:bg-slate-800 sm:py-4 sm:text-sm"
            >
              Modo infinito
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-700/60 bg-slate-900/90 p-4 shadow-sm sm:p-5 lg:p-6">
          <h2 className="text-base font-black uppercase tracking-[0.08em] text-slate-50 sm:text-lg lg:text-xl">
            Como jogar
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            <li>Receba um anagrama da palavra secreta de 5 letras.</li>
            <li>Digite um chute valido usando exatamente as mesmas letras.</li>
            <li>Acerto de posicao: verde. Letra fora de ordem: amarelo.</li>
            <li>Voce tem 2 tentativas para vencer a rodada.</li>
          </ul>
        </section>
      </main>
    </>
  );
}
