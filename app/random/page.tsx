import { GameExperience } from "@/src/components/GameExperience";
import { Header } from "@/src/components/Header";
import { createRound } from "@/src/lib/round";

export default function RandomPage() {
  const initialRound = createRound("random");

  return (
    <>
      <Header modeLabel="Modo aleatorio" />
      <GameExperience
        mode="random"
        modeLabel="Uma rodada casual por vez"
        initialRound={initialRound}
      />
    </>
  );
}
