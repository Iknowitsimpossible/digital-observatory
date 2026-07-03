import Header from "./Header";
import Footer from "./Footer";
import ContentBackground from "../ContentBackground";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <ContentBackground />
      <Header />

      <main className="relative mx-auto max-w-6xl px-6 py-8" style={{ zIndex: 1 }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}
