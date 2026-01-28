import SectionIntro from "@/components/section/SectionIntro";
import SectionBlock from "@/components/section/SectionBlock";

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* 1. 顶部介绍：使用 SectionIntro */}
      <SectionIntro 
        eyebrow="Introduction"
        title="The Digital Observatory"
        description="A personal observatory exploring the universe through science, the night sky, and human knowledge. Mapping the intersection of heaven, earth, and humanity."
      />

      {/* 2. 内容主体：使用 SectionBlock */}
      <div className="grid gap-12">
        <SectionBlock 
          title="Earth"
          subtitle="Methods & Observation"
          description="The methods by which we study the universe — from direct observation to advanced computation and theoretical modeling."
          href="/earth"
        />

        <SectionBlock 
          title="Sky"
          subtitle="Cosmos & Constellations"
          description="The night sky as seen across cultures, exploring constellations, celestial movements, and astronomical traditions."
          href="/sky"
        />

        <SectionBlock 
          title="Human"
          subtitle="Knowledge & Philosophy"
          description="Texts, notes, and translations that shape how we understand the cosmos. The human record of looking upward."
          href="/human"
        />
      </div>
    </div>
  );
}
