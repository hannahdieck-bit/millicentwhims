"use client";

import { useEffect, useState } from "react";

export default function ButterflyCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="butterfly-cursor"
      style={{
        transform: "translate(" + position.x + "px, " + position.y + "px)",
      }}
    >
      <img
        src="/textures/embellishments/butterfly-cursor.png"
        alt=""
      />
    </div>
  );
}