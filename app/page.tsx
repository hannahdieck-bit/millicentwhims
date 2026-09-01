import Hero from "@/components/sections/Hero";
import EventFlyer from "@/components/sections/EventFlyer";

export default function Home() {
  return (
    <main>
      <div className="page-decorations" />
      <div className="margin-left" />
      <div className="margin-right" />

      <Hero />
      <EventFlyer />
    </main>
  );
}