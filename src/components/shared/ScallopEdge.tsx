import React, { useId } from "react";

export interface ScallopEdgeProps {
  className?: string;
  fillColor?: string;
}

export function ScallopEdge({ className = "", fillColor }: ScallopEdgeProps) {
  const rawId = useId();
  const patternId = `scallop-pattern-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <svg
      className={`tp-scallop ${className}`.trim()}
      height="14"
      width="100%"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          width="44"
          height="14"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 0H44V2A22 11 0 0 1 0 2Z"
            className="tp-header__hem-fill"
            style={fillColor ? { fill: fillColor } : undefined}
          />
          <path
            d="M0 2A22 11 0 0 0 44 2"
            className="tp-header__hem-line"
          />
        </pattern>
      </defs>
      <rect width="100%" height="14" fill={`url(#${patternId})`} />
    </svg>
  );
}

export default ScallopEdge;
