import React from "react";
import { C } from "../../theme";

interface Props {
  size?: number;
}

export const BrainIcon: React.FC<Props> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4a4 4 0 0 1 3.5 2.1A4 4 0 0 1 20 8a4 4 0 0 1-1.5 3.1 4 4 0 0 1-1 5.9 4 4 0 0 1-5.5 0 4 4 0 0 1-1-5.9A4 4 0 0 1 4 8a4 4 0 0 1 4.5-1.9A4 4 0 0 1 12 4z" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
  </svg>
);
