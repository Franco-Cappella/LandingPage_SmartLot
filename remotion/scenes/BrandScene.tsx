import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { C } from "../theme";
import { headingFontFamily, bodyFontFamily } from "../fonts";

export const BrandScene: React.FC = () => {
  const frame = useCurrentFrame();

  const smartX = interpolate(frame, [5, 25], [-80, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const lotX = interpolate(frame, [5, 25], [80, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const headingO = interpolate(frame, [5, 20], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  const lineW = interpolate(frame, [25, 40], [0, 200], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const tagO = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const tagY = interpolate(frame, [35, 55], [20, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const subO = interpolate(frame, [55, 75], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.navy,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center, ${C.blue}33 0%, ${C.navy} 70%)`,
        }}
      />
      <div style={{ textAlign: "center", opacity: headingO }}>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            fontFamily: headingFontFamily,
            margin: 0,
            letterSpacing: 2,
          }}
        >
          <span
            style={{
              color: C.gold,
              display: "inline-block",
              transform: `translateX(${smartX}px)`,
            }}
          >
            Smart
          </span>
          <span
            style={{
              color: C.white,
              display: "inline-block",
              transform: `translateX(${lotX}px)`,
            }}
          >
            Lot
          </span>
        </h1>
        <div
          style={{
            height: 3,
            width: `${lineW}px`,
            backgroundColor: C.gold,
            margin: "20px auto",
            borderRadius: 2,
          }}
        />
        <p
          style={{
            color: C.cream,
            fontSize: 26,
            fontFamily: bodyFontFamily,
            margin: "20px 0 0",
            whiteSpace: "pre-wrap",
            opacity: tagO,
            transform: `translateY(${tagY}px)`,
          }}
        >
          {"La plataforma inteligente que transforma\nla gesti\u00F3n de tu estacionamiento"}
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: 18,
            fontFamily: bodyFontFamily,
            margin: "28px 0 0",
            opacity: subO,
          }}
        >
          Sin hardware \u00B7 Sin instalaciones \u00B7 100% en la nube
        </p>
      </div>
    </AbsoluteFill>
  );
};
