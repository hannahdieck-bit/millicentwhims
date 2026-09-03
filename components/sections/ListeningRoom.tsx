"use client";

import { useState } from "react";

export default function ListeningRoom() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`whimsy-player ${isOpen ? "is-open" : ""}`}>
      <button
        className="music-box-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close music box" : "Open music box"}
        aria-expanded={isOpen}
      >
        ♫
      </button>

      <div className="music-box-content">
        <p className="music-box-title">✦ our music box ✦</p>

        <iframe
          src="https://open.spotify.com/embed/playlist/5aLxV2IlhEfuyRIMgrqm28?utm_source=generator"
          width="220"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>
    </div>
  );
}