import Image from "next/image";

export default function About() {
  return (
    <main className="about-page">

      <div className="about-page-content">

        {/* ========================================
            TITLE
            ======================================== */}

        <section className="about-hero">

          <p className="about-kicker">
            The Millicent Lore
          </p>

          <h1>About Millicent</h1>

          <div className="about-ornament">
            ✦
          </div>

        </section>


        {/* ========================================
            POSTCARD ONE
            ======================================== */}

        <section className="about-postcard about-postcard-one">

          <Image
            src="/textures/embellishments/about-us-graphic-1.png"
            alt="About Millicent"
            width={1200}
            height={800}
            priority
          />

        </section>


        {/* ========================================
            POSTCARD TWO
            ======================================== */}

        <section className="about-postcard about-postcard-two">

          <Image
            src="/textures/embellishments/about-us-graphic-2.png"
            alt="About Millicent"
            width={1200}
            height={800}
          />

        </section>


        {/* ========================================
            POSTCARD THREE
            ======================================== */}

        <section className="about-postcard about-postcard-three">

          <Image
            src="/textures/embellishments/about-us-graphic-3.png"
            alt="About Millicent"
            width={1200}
            height={800}
          />

        </section>

      </div>

    </main>
  );
}