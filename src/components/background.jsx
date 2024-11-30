import { useLayoutEffect } from "react";
import { useState } from "react";

const Glow = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useLayoutEffect(() => {
    const removeGlow = () => {
      document
        .querySelector(".highlighted")
        ?.classList.remove("bg-red-100/80", "highlighted");
    };

    document.onmousemove = (event) => {
      const e = event;
      setX(e.clientX);
      setY(e.clientY);

      const insideHighlightArea =
        (e.clientX > 0 && e.clientX < window.innerWidth * highlightBounds[0]) ||
        (e.clientX > window.innerWidth * highlightBounds[1] &&
          e.clientX < window.innerWidth) ||
        (e.clientY > 0 &&
          e.clientY < window.innerHeight * highlightBounds[0]) ||
        (e.clientY > window.innerHeight * highlightBounds[1] &&
          e.clientY < window.innerHeight);

      const tiles = document.querySelectorAll(".animated-grid-tile");
      const xIndex = Math.floor(e.clientX / tileSize);
      const yIndex = Math.floor(e.clientY / tileSize);
      const tile = tiles[yIndex * maxItemsInRow + xIndex];

      removeGlow();

      if (
        tile &&
        insideHighlightArea &&
        e.clientX > tile.offsetLeft &&
        e.clientX < tile.offsetLeft + tile.offsetWidth &&
        e.clientY > tile.offsetTop &&
        e.clientY < tile.offsetTop + tile.offsetHeight
      ) {
        tile.classList.add("bg-red-100/80", "highlighted");
      }
    };
  });

  return (
    <div
      id="cursor"
      className="block fixed z-[60] pointer-events-none mix-blend-screen duration-500"
      style={{
        top: y,
        left: x,
        boxShadow: "0 0 150px 30px rgba(0, 0, 255, 0.5)",
      }}
    />
  );
};

const Background = () => {
  return (
    <div className="select-none relative overflow-y-hidden snap-start md:h-screen md:w-screen z-30  py-1">
      <Glow />
    </div>
  );
};

export default Background;
