import React from "react";
import { spring, interpolate, useCurrentFrame } from "remotion";
import { C } from "../theme";
import { bodyFontFamily } from "../fonts";

interface Props {
  icon: React.ReactNode;
  title: string;
  desc: string;
  index: number;
  startFrame: number;
}

export const FeatureCard: React.FC<Props> = ({ icon, title, desc, index, startFrame }) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - startFrame - index * 6);

  const progress = spring({
    frame: localFrame,
    fps: 30,
    config: { damping: 14, mass: 0.5, stiffness: 120 },
  });

  const opacity = interpolate(localFrame, [0, 5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(progress, [0, 1], [50, 0]);
  const scale = interpolate(progress, [0, 1], [0.88, 1]);

  return (
    <div
      style={{
        width: "42%",
        backgroundColor: "rgba(255,255,255,0.06)",
        borderRadius: 16,
        padding: "24px 28px",
        display: "flex",
        alignItems: "center",
        gap: 20,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        border: "1px solid rgba(255,255,255,0.08)",
        fontFamily: bodyFontFamily,
      }}
    >
      {icon}
      <div>
        <div style={{ color: C.white, fontSize: 20, fontWeight: 600, fontFamily: bodyFontFamily }}>
          {title}
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 14,
            marginTop: 4,
            lineHeight: 1.4,
            fontFamily: bodyFontFamily,
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
};
