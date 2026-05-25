import React from "react";
import { C } from "../../theme";

interface Props {
  size?: number;
}

export const ParkingIcon: React.FC<Props> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9" />
  </svg>
);
