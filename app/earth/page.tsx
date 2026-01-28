import SectionIntro from "@/components/section/SectionIntro";
import SectionBlock from "@/components/section/SectionBlock";

export default function EarthPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Earth · Methods"
        title="Studying the Universe"
        description="The methods by which we study the universe — from observation and instrumentation to computation and theory."
      />

      <SectionBlock
        title="Time-Domain Astronomy"
        subtitle="Observing how celestial objects change over time."
        description="Studies transient and variable phenomena—supernovae, variable stars, and cosmic events."
        href="/earth/time-domain"
      />

      <SectionBlock
        title="Spectroscopy"
        subtitle="Reading the universe through light and elemental signatures."
        description="Interprets the composition, motion, and physical conditions of celestial objects by analyzing light across different wavelengths."
        href="/earth/spectroscopy"
      />

      <SectionBlock
        title="Radio Astronomy"
        subtitle="Listening to the cosmos beyond visible light."
        description="Explores the universe through radio waves, revealing structures and phenomena invisible to optical observation."
        href="/earth/multi-messenger"
      />

      <SectionBlock
        title="Computational Astrophysics"
        subtitle="Simulating and modeling the universe through mathematics and code."
        description="Uses numerical simulations and computational models to study complex cosmic systems that cannot be tested through direct observation alone."
        href="/earth/computation"
      />

      <SectionBlock
        title="Astrobiology"
        subtitle="Exploring the possibility of life beyond Earth."
        description="Investigates the origins, evolution, and potential existence of life elsewhere in the universe, bridging astronomy, biology, and chemistry."
        href="/earth/astrobiology"
      />

      <SectionBlock
        title="Astrophotography"
        subtitle="Capturing the night sky through careful observation and imaging."
        description="Combines technical precision and aesthetic sensitivity to document celestial objects and the night sky."
        href="/earth/astrophotography"
      />
    </>
  );
}
