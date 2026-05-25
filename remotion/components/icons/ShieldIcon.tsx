import React from "react";
import { C } from "../../theme";

interface Props {
  size?: number;
}

export const ShieldIcon: React.FC<Props> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l7 4v5c0 5-3.5 9.7-7 11-3.5-1.3-7-6-7-11V6l7-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
