import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, Easing } from "remotion";
import { C } from "../theme";
import { headingFontFamily, bodyFontFamily } from "../fonts";
import { ParkingIcon } from "../components/icons/ParkingIcon";
import { BackgroundGrid } from "../components/BackgroundGrid";

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  const iconSpring = spring({
    frame: Math.max(0, frame - 5),
    fps,
    config: { damping: 12, mass: 0.6, stiffness: 100 },
  });
  const iconScale = interpolate(iconSpring, [0, 1], [0.6, 1]);
  const iconOpacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  const titleY = interpolate(frame, [10, 30], [50, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const titleO = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const subY = interpolate(frame, [25, 45], [30, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const subO = interpolate(frame, [25, 45], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{ backgroundColor: C.navy }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.3 }}>
        <BackgroundGrid />
      </div>
      <AbsoluteFill
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div style={{ opacity: iconOpacity, transform: `scale(${iconScale})` }}>
          <ParkingIcon size={80} />
        </div>
        <h1
          style={{
            color: C.white,
            fontSize: 52,
            fontWeight: 700,
            fontFamily: headingFontFamily,
            margin: "28px 0 0",
            textAlign: "center",
            whiteSpace: "pre-wrap",
            transform: `translateY(${titleY}px)`,
            opacity: titleO,
          }}
        >
          {"\u00BFCaos en tu estacionamiento\ncorporativo?"}
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 22,
            fontFamily: bodyFontFamily,
            margin: "16px 0 0",
            textAlign: "center",
            maxWidth: 620,
            lineHeight: 1.5,
            whiteSpace: "pre-wrap",
            transform: `translateY(${subY}px)`,
            opacity: subO,
          }}
        >
          {"Espacios perdidos, horas desperdiciadas,\nfrustraci\u00F3n diaria para tus colaboradores."}
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
