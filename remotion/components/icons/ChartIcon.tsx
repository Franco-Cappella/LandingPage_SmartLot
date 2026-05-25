import React from "react";
import { C } from "../../theme";

interface Props {
  size?: number;
}

export const ChartIcon: React.FC<Props> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="12" width="4" height="8" rx="1" />
    <rect x="10" y="6" width="4" height="14" rx="1" />
    <rect x="17" y="3" width="4" height="17" rx="1" />
  </svg>
);
