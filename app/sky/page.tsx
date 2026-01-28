import SectionIntro from "@/components/section/SectionIntro";
import SectionBlock from "@/components/section/SectionBlock";

export default function SkyPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Sky · Constellations"
        title="Reading the Night Sky"
        description="The night sky as seen across cultures, constellations, and traditions."
      />

      <SectionBlock
        title="Orion the Hunter"
        subtitle="猎户座"
        description="A prominent Western constellation associated with myth, navigation, and seasonal change."
        href="/sky/orion"
      />

      <SectionBlock
        title="The White Tiger"
        subtitle="白虎 · 参宿"
        description="A major symbol in traditional Chinese astronomy representing the western sky."
        href="/sky/white-tiger"
      />

      <SectionBlock
        title="The Big Dipper"
        subtitle="北斗七星"
        description="A shared celestial reference used for navigation, timekeeping, and symbolism across cultures."
        href="/sky/big-dipper"
      />

      <SectionBlock
        title="The Azure Dragon"
        subtitle="青龙 · 心宿"
        description="An eastern celestial symbol representing renewal and cosmic order."
        href="/sky/azure-dragon"
      />
    </>
  );
}