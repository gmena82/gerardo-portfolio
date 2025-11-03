// src/components/ui/GlassButton.jsx
// Lightweight React component (no external deps).
// Uses the CSS in src/styles/glass-buttons.css

import React from "react";

export function GlassButton({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  className = "",
  loading = false,
  disabled = false,
  ...rest
}) {
  const Component = as === "a" ? "a" : "button";
  const isDisabled = disabled || loading;
  const classes = ["gm-glass-btn", `gm-btn--${size}`, className].filter(Boolean).join(" ");

  return (
    <Component
      className={classes}
      data-variant={variant}
      data-loading={loading ? "true" : undefined}
      aria-disabled={as === "a" && isDisabled ? "true" : undefined}
      disabled={as !== "a" ? isDisabled : undefined}
      {...rest}
    >
      {loading ? <span className="gm-spinner" aria-hidden="true" /> : null}
      <span className="gm-label">{children}</span>
    </Component>
  );
}

export default GlassButton;
