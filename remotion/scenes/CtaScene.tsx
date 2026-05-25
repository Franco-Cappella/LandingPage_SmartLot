import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { C } from "../theme";
import { headingFontFamily, bodyFontFamily } from "../fonts";
import { AnimatedCounter } from "../components/AnimatedCounter";

const STATS = [
  { target: 30, label: "m\u00E1s eficiencia", delay: 0 },
  { target: 95, label: "satisfacci\u00F3n", delay: 25 },
  { target: 100, label: "digital", delay: 50 },
];

export const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();

  const headingO = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const ctaO = interpolate(frame, [100, 125], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const ctaY = interpolate(frame, [100, 125], [20, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
        background: `linear-gradient(135deg, ${C.navy} 0%, ${C.blue}33 100%)`,
      }}
    >
      <h2
        style={{
          color: C.white,
          fontSize: 26,
          fontWeight: 600,
          fontFamily: headingFontFamily,
          margin: "0 0 45px",
          opacity: headingO,
        }}
      >
        Resultados comprobados
      </h2>
      <div
        style={{
          display: "flex",
          gap: 60,
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        {STATS.map((stat, i) => (
          <AnimatedCounter
            key={i}
            frame={frame}
            startFrame={20}
            target={stat.target}
            label={stat.label}
            delay={stat.delay}
          />
        ))}
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: 28,
          textAlign: "center",
          opacity: ctaO,
          transform: `translateY(${ctaY}px)`,
        }}
      >
        <div
          style={{
            color: C.white,
            fontSize: 22,
            fontWeight: 600,
            fontFamily: headingFontFamily,
          }}
        >
          Transform\u00E1 tu estacionamiento corporativo
        </div>
        <div
          style={{
            color: C.gold,
            fontSize: 18,
            marginTop: 10,
            fontWeight: 500,
            fontFamily: bodyFontFamily,
            letterSpacing: 1,
          }}
        >
          smartlot.vercel.app
        </div>
      </div>
    </AbsoluteFill>
  );
};
