import React from "react";
import { GlassButton } from "./ui/GlassButton.jsx";

export default function ButtonsDemo() {
  return (
    <div style={{ display: "grid", gap: "1rem", placeItems: "start" }}>
      <div className="gm-btn-group">
        <GlassButton variant="primary">Generate</GlassButton>
        <GlassButton variant="secondary" size="sm">Contact</GlassButton>
        <GlassButton variant="violet" className="is-solid">View Work</GlassButton>
        <GlassButton variant="primary" loading>Loading…</GlassButton>
      </div>
    </div>
  );
}
