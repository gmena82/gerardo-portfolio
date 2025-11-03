// Enhanced GlassButton: adds 'animated' and 'glow' controls.
// animated: boolean -> when true, applies data-animated="shimmer"
// glow: "pink" | "none" (defaults to "pink")
import React from "react";

export function GlassButton({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  className = "",
  loading = false,
  disabled = false,
  animated = false,
  glow = "pink",
  ...rest
}) {
  const Component = as === "a" ? "a" : "button";
  const isDisabled = disabled || loading;
  const classes = ["gm-glass-btn", `gm-btn--${size}`, className].filter(Boolean).join(" ");

  return (
    <Component
      className={classes}
      data-variant={variant}
      data-animated={animated ? "shimmer" : undefined}
      data-glow={glow !== "none" ? glow : undefined}
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
