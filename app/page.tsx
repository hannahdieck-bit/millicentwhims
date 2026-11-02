import Hero from "@/components/sections/Hero";
import MillicentIntro from "@/components/sections/MillicentIntro";
import HomeAnimations from "@/components/sections/HomeAnimations";

export default function Home() {
  return (
    <main className="home-page">
      <div className="page-decorations" aria-hidden="true" />
      <div className="margin-left" aria-hidden="true" />
      <div className="margin-right" aria-hidden="true" />

      <HomeAnimations />
      <Hero />
      <MillicentIntro />
    </main>
  );
}