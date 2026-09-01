import Image from "next/image";
import SilverStamp from "@/components/stamps/SilverStamp";

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src="/textures/embellishments/embossed-stars.png"
        alt=""
        width={300}
        height={150}
        className="hero-star"
      />

      <SilverStamp />

      <Image
        src="/logos/millicent-logo.png"
        alt="Millicent"
        width={700}
        height={250}
        className="hero-logo"
      />

      <p className="hero-tagline">
        In the spirit of abundance.
      </p>

      <Image
        src="/textures/embellishments/embossed-stars.png"
        alt=""
        width={300}
        height={150}
        className="hero-star"
      />
    </section>
  );
}