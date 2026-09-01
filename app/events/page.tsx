import Image from "next/image";

export default function Events() {
  return (
    <main className="events-page">

      {/* Upcoming Event */}

   <section className="upcoming-event">
  <p className="events-kicker">✦ Upcoming Event ✦</p>

  <div className="event-flyer-frame">
    <div className="event-flyer">
      <Image
        src="/images/next-event.png"
        alt="Upcoming Millicent event"
        width={1080}
        height={1350}
      />
    </div>
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
                alt="Past Millicent event"
                width={1080}
                height={1350}
              />
            </div>

            <h3>Our First Gathering</h3>

            <p>
              A little gathering of creative people, handmade things, and
              good company.
            </p>
          </article>

        </div>
      </section>

    </main>
  );
}