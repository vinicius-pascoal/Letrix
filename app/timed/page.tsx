import { GameExperience } from "@/src/components/GameExperience";
import { Header } from "@/src/components/Header";
import { createRound } from "@/src/lib/round";

export default function TimedPage() {
  const initialRound = createRound("timed");

  return (
    <>
      <Header modeLabel="Modo tempo" />
      <GameExperience
        mode="timed"
        modeLabel="3 minutos para somar o maximo de pontos"
        initialRound={initialRound}
      />
    </>
  );
}