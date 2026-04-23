import { GameExperience } from "@/src/components/GameExperience";
import { Header } from "@/src/components/Header";
import { createRound } from "@/src/lib/round";

export default function DailyPage() {
  const initialRound = createRound("daily");

  return (
    <>
      <Header modeLabel="Modo diario" />
      <GameExperience
        mode="daily"
        modeLabel="Mesmo desafio para todos no dia"
        initialRound={initialRound}
      />
    </>
  );
}
