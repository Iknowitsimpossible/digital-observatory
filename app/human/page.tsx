import SectionIntro from "@/components/section/SectionIntro";
import SectionBlock from "@/components/section/SectionBlock";

export default function HumanPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Human · Knowledge"
        title="Understanding the Cosmos"
        description="Texts, notes, and translations that shape how humans interpret the universe through science, history, and philosophy."
      />

      <SectionBlock
        title="Video Scripts"
        subtitle="The History and Philosophy of Astronomy"
        description="Translated and annotated video scripts exploring astronomical ideas."
        href="/human/video-scripts"
      />

      <SectionBlock
        title="Reading Notes"
        subtitle="A Brief History of Time"
        description="Notes and reflections on cosmology, time, and the structure of the universe."
        href="/human/reading-notes/brief-history-of-time"
      />

      <SectionBlock
        title="Reading Notes"
        subtitle="Astrophysics for People in a Hurry"
        description="Accessible explanations of modern astrophysics."
        href="/human/reading-notes/astrophysics-for-people-in-a-hurry"
      />

      <SectionBlock
        title="Reading Notes"
        subtitle="The Logic of Scientific Discovery"
        description="Philosophical thoughts on how scientific knowledge advances."
        href="/human/reading-notes/logic-of-scientific-discovery"
      />
    </>
  );
}
