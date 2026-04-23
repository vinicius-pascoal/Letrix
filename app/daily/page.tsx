import { GameExperience } from "@/src/components/GameExperience";
import { Header } from "@/src/components/Header";

export default function DailyPage() {
  return (
    <>
      <Header modeLabel="Modo diario" />
      <GameExperience mode="daily" modeLabel="Mesmo desafio para todos no dia" />
    </>
  );
}
