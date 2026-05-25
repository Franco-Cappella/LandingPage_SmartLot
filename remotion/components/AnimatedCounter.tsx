import React from "react";
import { spring, interpolate } from "remotion";
import { C } from "../theme";

interface Props {
  frame: number;
  startFrame: number;
  target: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export const AnimatedCounter: React.FC<Props> = ({
  frame,
  startFrame,
  target,
  suffix = "%",
  label,
  delay = 0,
}) => {
  const localFrame = Math.max(0, frame - startFrame - delay);

  const progress = spring({
    frame: localFrame,
    fps: 30,
    config: { damping: 25, mass: 0.8, stiffness: 100 },
  });

  const value = Math.round(progress * target);
  const opacity = interpolate(localFrame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(localFrame, [0, 15], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ textAlign: "center", opacity, transform: `translateY(${translateY}px)` }}>
      <div style={{ color: C.gold, fontSize: 62, fontWeight: 700, lineHeight: 1 }}>
        {value}{suffix}
      </div>
      <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginTop: 8 }}>
        {label}
      </div>
    </div>
  );
};
