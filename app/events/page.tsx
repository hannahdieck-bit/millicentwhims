import Image from "next/image";

export default function Events() {
  return (
    <main className="events-page">

      {/* Stay Tuned */}

      <section className="upcoming-event">
        <p className="events-kicker">✦ The Gathering Place ✦</p>

        <div className="stay-tuned">
          

          <h1>More little gatherings soon...</h1>

          <p>
            We’re dreaming up our next little something.
            Until then, stay tuned for handmade things,
            new projects, and other unnecessary delights.
          </p>

          <p className="stay-tuned-signoff">
            In the spirit of abundance, always.
          </p>

          <a
            href="https://www.instagram.com/millicent_whims/"
            target="_blank"
            rel="noopener noreferrer"
            className="stay-tuned-link"
          >
            Follow along on Instagram ✦
          </a>
        </div>
      </section>

      {/* Past Events */}

      <section className="past-events">
        <div className="past-events-intro">
          <p className="events-kicker">The Millicent Archive</p>

          <h2>Past Events</h2>

          <p>
            Gatherings we've hosted, moments we've shared, and things we'd
            love to do again.
          </p>
        </div>

        <div className="past-event-flyers">
          <article className="past-event-card">
            <div className="past-event-image">
              <Image
                src="/images/next-event.png"
                alt="Flyer for Millicent's first Halloween pop-up"
                width={1080}
                height={1350}
              />
            </div>

            <h3>Our First Gathering</h3>

            <p>
              Our first little pop-up: handmade things, creative people,
              and a Halloween afternoon together.
            </p>
          </article>
        </div>
      </section>

    </main>
  );
}