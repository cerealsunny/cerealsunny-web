"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import { IconChevronDown } from "@/components/Icons";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              background: "#ffffff",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "18px 20px",
                textAlign: "left",
              }}
            >
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#111827" }}>
                {item.question}
              </span>
              <span
                style={{
                  flexShrink: 0,
                  color: "#F5A623",
                  display: "flex",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                <IconChevronDown size={18} />
              </span>
            </button>
            {isOpen && (
              <div style={{ padding: "0 20px 20px 20px" }}>
                <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.8", margin: "0" }}>
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
