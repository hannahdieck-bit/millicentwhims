"use client";

import Image from "next/image";

export default function EventFlyer() {
  return (
    <section className="event-flyer-section">
      <p className="event-flyer-kicker">✦ Upcoming Event ✦</p>

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

      <div className="event-flyer-dots">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>

      <a href="/events" className="event-flyer-link">
        See All Events →
      </a>
    </section>
  );
}