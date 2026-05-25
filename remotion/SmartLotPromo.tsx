import { useCurrentFrame, useVideoConfig, AbsoluteFill, interpolate } from "remotion";
import React from "react";

const C = {
  navy: "#0C1E3F",
  blue: "#2A5CBF",
  gold: "#C9A96E",
  cream: "#F7F4EF",
  white: "#FFFFFF",
  dark: "#0A1628",
  fadeF: 15,
};

function toO(frame, start, dur) {
  const local = frame - start;
  const fi = interpolate(local, [0, C.fadeF], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fo = interpolate(local, [dur - C.fadeF, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return Math.min(fi, fo, 1);
}

function toF(frame, start, delay) {
  const local = frame - start - (delay || 0);
  return interpolate(local, [0, C.fadeF], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function toY(frame, start, delay, dist) {
  const local = frame - start - (delay || 0);
  return interpolate(local, [0, 20], [dist || 40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function toS(frame, start, delay) {
  const local = frame - start - (delay || 0);
  return interpolate(local, [0, 25], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function toCount(frame, start, target) {
  const local = Math.min(Math.max(frame - start, 0), 40);
  return Math.round(target * (local / 40));
}

function IconParking({ size }) {
  const s = size || 80;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9" />
    </svg>
  );
}

function IconBrain({ size }) {
  return (
    <svg width={size || 48} height={size || 48} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4a4 4 0 0 1 3.5 2.1A4 4 0 0 1 20 8a4 4 0 0 1-1.5 3.1 4 4 0 0 1-1 5.9 4 4 0 0 1-5.5 0 4 4 0 0 1-1-5.9A4 4 0 0 1 4 8a4 4 0 0 1 4.5-1.9A4 4 0 0 1 12 4z" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
    </svg>
  );
}

function IconChart({ size }) {
  return (
    <svg width={size || 48} height={size || 48} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="12" width="4" height="8" rx="1" />
      <rect x="10" y="6" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="17" rx="1" />
    </svg>
  );
}

function IconPhone({ size }) {
  return (
    <svg width={size || 48} height={size || 48} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function IconShield({ size }) {
  return (
    <svg width={size || 48} height={size || 48} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l7 4v5c0 5-3.5 9.7-7 11-3.5-1.3-7-6-7-11V6l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function Card({ icon, title, desc, index, frame, start }) {
  const sc = toS(frame, start, index * 5);
  const y = toY(frame, start, index * 5);
  const o = toF(frame, start, index * 5);
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
        transform: "translateY(" + y + "px) scale(" + sc + ")",
        opacity: o,
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {icon}
      <div>
        <div style={{ color: C.white, fontSize: 20, fontWeight: 600, fontFamily: "sans-serif" }}>{title}</div>
        <div
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 14,
            marginTop: 4,
            lineHeight: 1.4,
            fontFamily: "sans-serif",
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}

export default function SmartLotPromo() {
  const frame = useCurrentFrame();
  const S = {
    p: 0,
    pD: 150,
    b: 150,
    bD: 240,
    f: 390,
    fD: 270,
    c: 660,
    cD: 240,
  };

  const oP = toO(frame, S.p, S.pD);
  const oB = toO(frame, S.b, S.bD);
  const oF = toO(frame, S.f, S.fD);
  const oC = toO(frame, S.c, S.cD);

  const gridDots = [];
  for (let i = 0; i < 48; i++) {
    const flash = (frame + i * 11) % 60 < 30 && i % 4 === 0;
    gridDots.push(
      <div
        key={i}
        style={{
          position: "absolute",
          width: 42,
          height: 42,
          borderRadius: 8,
          backgroundColor: flash
            ? "rgba(255,70,70,0.45)"
            : "rgba(255,255,255,0.06)",
          left: ((i % 8) * 12.5).toString() + "%",
          top: (Math.floor(i / 8) * 12.5).toString() + "%",
        }}
      />
    );
  }

  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.navy,
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    >
      <AbsoluteFill
        style={{
          opacity: oP,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.35 }}>
          {gridDots}
        </div>
        <IconParking size={80} />
        <h1
          style={{
            color: C.white,
            fontSize: 52,
            fontWeight: 700,
            margin: "28px 0 0",
            textAlign: "center",
            transform: "translateY(" + toY(frame, 20) + "px)",
            opacity: toF(frame, 20),
          }}
        >
          {"\u00BFCaos en tu estacionamiento\ncorporativo?"}
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 22,
            margin: "16px 0 0",
            textAlign: "center",
            maxWidth: 620,
            lineHeight: 1.5,
            transform: "translateY(" + toY(frame, 45) + "px)",
            opacity: toF(frame, 45),
          }}
        >
          {"Espacios perdidos, horas desperdiciadas,\nfrustraci\u00F3n diaria para tus colaboradores."}
        </p>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          opacity: oB,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
          background:
            "radial-gradient(ellipse at center, " +
            C.blue +
            "22 0%, " +
            C.navy +
            " 70%)",
        }}
      >
        <div
          style={{
            opacity: toF(frame, S.b + 15),
            transform: "translateY(" + toY(frame, S.b + 15) + "px)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: C.white,
              fontSize: 72,
              fontWeight: 700,
              margin: 0,
              letterSpacing: 2,
            }}
          >
            <span style={{ color: C.gold }}>Smart</span>Lot
          </h1>
          <div
            style={{
              height: 3,
              width:
                interpolate(frame, [S.b + 55, S.b + 75], [0, 200], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }).toString() + "px",
              backgroundColor: C.gold,
              margin: "20px auto",
              borderRadius: 2,
            }}
          />
          <p
            style={{
              color: C.cream,
              fontSize: 26,
              margin: "20px 0 0",
              opacity: toF(frame, S.b + 65),
            }}
          >
            {"La plataforma inteligente que transforma\nla gesti\u00F3n de tu estacionamiento"}
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 18,
              margin: "28px 0 0",
              opacity: toF(frame, S.b + 100),
            }}
          >
            Sin hardware \u00B7 Sin instalaciones \u00B7 100% en la nube
          </p>
        </div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          opacity: oF,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px",
          backgroundColor: C.dark,
        }}
      >
        <h2
          style={{
            color: C.white,
            fontSize: 34,
            fontWeight: 700,
            margin: "0 0 40px",
            opacity: toF(frame, S.f + 15),
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
          <Card
            icon={<IconBrain />}
            title="Asignaci\u00F3n Inteligente con IA"
            desc="Algoritmos predictivos que optimizan cada espacio en tiempo real."
            index={0}
            frame={frame}
            start={S.f + 25}
          />
          <Card
            icon={<IconChart />}
            title="Panel de Control en Tiempo Real"
            desc="M\u00E9tricas, reportes y analytics del uso de tu estacionamiento."
            index={1}
            frame={frame}
            start={S.f + 25}
          />
          <Card
            icon={<IconPhone />}
            title="Acceso M\u00F3vil Sin Contacto"
            desc="App nativa iOS y Android. Reserva y pago desde el celular."
            index={2}
            frame={frame}
            start={S.f + 25}
          />
          <Card
            icon={<IconShield />}
            title="Seguridad y Control Total"
            desc="Acceso por QR, c\u00E1maras IA y auditor\u00EDa completa."
            index={3}
            frame={frame}
            start={S.f + 25}
          />
        </div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          opacity: oC,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
          background:
            "linear-gradient(135deg, " +
            C.navy +
            " 0%, " +
            C.blue +
            "33 100%)",
        }}
      >
        <h2
          style={{
            color: C.white,
            fontSize: 26,
            fontWeight: 600,
            margin: "0 0 45px",
            opacity: toF(frame, S.c + 15),
          }}
        >
          Resultados comprobados
        </h2>
        <div style={{ display: "flex", gap: 60, justifyContent: "center", marginBottom: 40 }}>
          <div
            style={{
              textAlign: "center",
              opacity: toF(frame, S.c + 30),
              transform: "translateY(" + toY(frame, S.c + 30) + "px)",
            }}
          >
            <div style={{ color: C.gold, fontSize: 62, fontWeight: 700, lineHeight: 1 }}>
              {toCount(frame, S.c + 30, 30).toString() + "%"}
            </div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginTop: 8 }}>
              m\u00E1s eficiencia
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              opacity: toF(frame, S.c + 55),
              transform: "translateY(" + toY(frame, S.c + 55) + "px)",
            }}
          >
            <div style={{ color: C.gold, fontSize: 62, fontWeight: 700, lineHeight: 1 }}>
              {toCount(frame, S.c + 55, 95).toString() + "%"}
            </div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginTop: 8 }}>
              satisfacci\u00F3n
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              opacity: toF(frame, S.c + 80),
              transform: "translateY(" + toY(frame, S.c + 80) + "px)",
            }}
          >
            <div style={{ color: C.gold, fontSize: 62, fontWeight: 700, lineHeight: 1 }}>
              {toCount(frame, S.c + 80, 100).toString() + "%"}
            </div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginTop: 8 }}>
              digital
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 28,
            textAlign: "center",
            opacity: toF(frame, S.c + 130),
            transform: "translateY(" + toY(frame, S.c + 130) + "px)",
          }}
        >
          <div style={{ color: C.white, fontSize: 22, fontWeight: 600 }}>
            Transform\u00E1 tu estacionamiento corporativo
          </div>
          <div
            style={{
              color: C.gold,
              fontSize: 18,
              marginTop: 10,
              fontWeight: 500,
              letterSpacing: 1,
            }}
          >
            smartlot.vercel.app
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
