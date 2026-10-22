"use client";

import React, { useState, useId } from "react";

export interface AccordionProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  className?: string;
}

export function Accordion({
  question,
  answer,
  defaultOpen = false,
  className = "",
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div
      className={`tp-accordion ${className}`.trim()}
      data-open={isOpen ? "true" : "false"}
    >
      <button
        type="button"
        className="tp-accordion__trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{question}</span>
        <svg
          className="tp-accordion__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        id={contentId}
        className="tp-accordion__content"
        data-open={isOpen ? "true" : "false"}
        role="region"
      >
        <div className="tp-accordion__body">{answer}</div>
      </div>
    </div>
  );
}

export default Accordion;
