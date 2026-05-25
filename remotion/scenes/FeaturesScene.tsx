import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { C } from "../theme";
import { headingFontFamily, bodyFontFamily } from "../fonts";
import { BrainIcon } from "../components/icons/BrainIcon";
import { ChartIcon } from "../components/icons/ChartIcon";
import { PhoneIcon } from "../components/icons/PhoneIcon";
import { ShieldIcon } from "../components/icons/ShieldIcon";
import { FeatureCard } from "../components/FeatureCard";

const FEATURES = [
  {
    icon: <BrainIcon />,
    title: "Asignaci\u00F3n Inteligente con IA",
    desc: "Algoritmos predictivos que optimizan cada espacio en tiempo real.",
  },
  {
    icon: <ChartIcon />,
    title: "Panel de Control en Tiempo Real",
    desc: "M\u00E9tricas, reportes y analytics del uso de tu estacionamiento.",
  },
  {
    icon: <PhoneIcon />,
    title: "Acceso M\u00F3vil Sin Contacto",
    desc: "App nativa iOS y Android. Reserva y pago desde el celular.",
  },
  {
    icon: <ShieldIcon />,
    title: "Seguridad y Control Total",
    desc: "Acceso por QR, c\u00E1maras IA y auditor\u00EDa completa.",
  },
];

export const FeaturesScene: React.FC = () => {
  const frame = useCurrentFrame();

  const headingO = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const headingY = interpolate(frame, [0, 20], [30, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.dark,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 80px",
        fontFamily: bodyFontFamily,
      }}
    >
      <h2
        style={{
          color: C.white,
          fontSize: 34,
          fontWeight: 700,
          fontFamily: headingFontFamily,
          margin: "0 0 40px",
          opacity: headingO,
          transform: `translateY(${headingY}px)`,
        }}
      >
        Todo lo que necesitas
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
          width: "100%",
          maxWidth: 1000,
        }}
      >
        {FEATURES.map((f, i) => (
          <FeatureCard
            key={i}
            icon={f.icon}
            title={f.title}
            desc={f.desc}
            index={i}
            startFrame={20}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
