"use client";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    // changed duration from 1.5 to 1.2 (snappier)
    // changed lerp from 0.1 to 0.12 (more responsive)
    <ReactLenis root options={{ lerp: 0.12, duration: 1.2 }}>
      {children}
    </ReactLenis>
  );
}