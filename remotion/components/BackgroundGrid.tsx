import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { C } from "../theme";

const CELLS_X = 12;
const CELLS_Y = 8;
const TOTAL = CELLS_X * CELLS_Y;

export const BackgroundGrid: React.FC = () => {
  const frame = useCurrentFrame();

  const cells = [];
  for (let i = 0; i < TOTAL; i++) {
    const pulse = interpolate(
      (frame + i * 7) % 90,
      [0, 45, 90],
      [0.3, 1, 0.3],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.sin) }
    );

    cells.push(
      <div
        key={i}
        style={{
          position: "absolute",
          width: 36,
          height: 36,
          borderRadius: 6,
          backgroundColor: i % 3 === 0
            ? `rgba(201,169,110,${0.04 * pulse})`
            : `rgba(255,255,255,${0.03 * pulse})`,
          left: `${(i % CELLS_X) * (100 / CELLS_X)}%`,
          top: `${Math.floor(i / CELLS_X) * (100 / CELLS_Y)}%`,
          transform: `translate(-50%, -50%)`,
          transition: "none",
        }}
      />
    );
  }

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.4 }}>
      {cells}
    </div>
  );
};
