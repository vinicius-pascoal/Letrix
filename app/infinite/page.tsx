import { GameExperience } from "@/src/components/GameExperience";
import { Header } from "@/src/components/Header";
import { createRound } from "@/src/lib/round";

export default function InfinitePage() {
  const initialRound = createRound("infinite");

  return (
    <>
      <Header modeLabel="Modo infinito" />
      <GameExperience
        mode="infinite"
        modeLabel="Complete uma rodada e emende outra"
        initialRound={initialRound}
      />
    </>
  );
}
