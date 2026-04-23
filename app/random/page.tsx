import { GameExperience } from "@/src/components/GameExperience";
import { Header } from "@/src/components/Header";

export default function RandomPage() {
  return (
    <>
      <Header modeLabel="Modo aleatorio" />
      <GameExperience mode="random" modeLabel="Uma rodada casual por vez" />
    </>
  );
}
