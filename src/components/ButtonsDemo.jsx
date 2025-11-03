import React from "react";
import { GlassButton } from "./ui/GlassButton.jsx";

export default function ButtonsDemo() {
  return (
    <div style={{ display: "grid", gap: "1rem", placeItems: "start" }}>
      <div className="gm-btn-group">
        <GlassButton variant="primary" animated>Generate</GlassButton>
        <GlassButton variant="secondary" size="sm" animated>Contact</GlassButton>
        <GlassButton variant="violet" className="is-solid" animated>View Work</GlassButton>
        <GlassButton variant="primary" loading animated>Loading…</GlassButton>
      </div>
    </div>
  );
}
