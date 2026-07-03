import SectionIntro from "@/components/section/SectionIntro";
import SectionBlock from "@/components/section/SectionBlock";

const videos = [
  {
    title: "The Dawn of Reason",
    subtitle: "Mapping the Five Eras of Science",
    href: "/human/media/video-scripts/dawn-of-reason",
  },
  {
    title: "Genesis Reimagined",
    subtitle: "Myth, Logic, and the Origins of the Cosmos",
    href: "/human/media/video-scripts/genesis-reimagined",
  },
  {
    title: "Heavenly Connections",
    subtitle: "How Faith and Philosophy Shaped our Universe",
    href: "/human/media/video-scripts/heavenly-connections",
  },
  {
    title: "East Meets West",
    subtitle: "Two Worlds, One Sky",
    href: "/human/media/video-scripts/east-meets-west",
  },
  {
    title: "Beyond the Horoscope",
    subtitle: "The Great Shift from Astrology to Science",
    href: "/human/media/video-scripts/beyond-the-horoscope",
  },
  {
    title: "Modern Miracles",
    subtitle: "Deciphering the Secrets of Deep Space",
    href: "/human/media/video-scripts/modern-miracles",
  },
  {
    title: "The Final Frontier",
    subtitle: "Predicting the Next Great Leap for Humanity",
    href: "/human/media/video-scripts/final-frontier",
  },
];

export default function VideoScriptsPage() {
  return (
    <div className="space-y-24">
      <SectionIntro
        eyebrow="Library"
        title="Video Scripts"
        description="Translated and annotated scripts that communicate astronomical ideas through visual media. Bridging the gap between scientific inquiry and cinematic storytelling."
      />

      <div className="space-y-16"> 
        {videos.map((v) => (
          <SectionBlock
            key={v.href}
            title={v.title}
            description={v.subtitle}
            href={v.href}
          />
        ))}
      </div>
    </div>
  );
}