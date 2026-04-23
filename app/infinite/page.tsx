import { GameExperience } from "@/src/components/GameExperience";
import { Header } from "@/src/components/Header";

export default function InfinitePage() {
  return (
    <>
      <Header modeLabel="Modo infinito" />
      <GameExperience mode="infinite" modeLabel="Complete uma rodada e emende outra" />
    </>
  );
}
