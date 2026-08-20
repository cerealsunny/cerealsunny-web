"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "bot";
  text: string;
  chips?: string[];
}

const INITIAL_MESSAGE: Message = {
  role: "bot",
  text: "¡Hola! Soy el asistente de Cereal Sunny. Puedo ayudarte con información sobre nuestros productos o conectarte con nuestro equipo de ventas.",
  chips: ["Ver productos", "Quiero ser distribuidor", "Contactar ventas"],
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      const botMsg: Message = {
        role: "bot",
        text: data.reply || "Lo siento, no pude procesar tu mensaje.",
        chips: data.chips || [],
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Hubo un error. Por favor intenta de nuevo." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Abrir chat"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#1f7684",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          boxShadow: "0 4px 16px rgba(57,164,180,0.35)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        )}
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "5.5rem",
            right: "1.5rem",
            width: 340,
            maxHeight: 520,
            background: "#fff",
            borderRadius: 16,
            border: "0.5px solid #e5e7eb",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 999,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            animation: "slideUp 0.2s ease",
          }}
        >
          <div
            style={{
              background: "#1f7684",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "#F5A623",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 16,
                color: "#7a4800",
                flexShrink: 0,
              }}
            >
              S
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: "white", fontSize: 14, fontWeight: 600, margin: 0 }}>
                Asistente Sunny
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: 5, margin: 0 }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#b6f0c2",
                    display: "inline-block",
                  }}
                />
                <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 12 }}>En línea</span>
              </p>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "14px 14px 10px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              background: "#f9fafb",
              minHeight: 260,
              maxHeight: 300,
            }}
          >
            {messages.map((msg, i) => (
              <div key={i}>
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "9px 12px",
                    borderRadius: 14,
                    fontSize: 13,
                    lineHeight: 1.5,
                    ...(msg.role === "user"
                      ? {
                          background: "#1f7684",
                          color: "white",
                          borderBottomRightRadius: 4,
                          marginLeft: "auto",
                        }
                      : {
                          background: "white",
                          border: "0.5px solid #e5e7eb",
                          color: "#111827",
                          borderBottomLeftRadius: 4,
                        }),
                  }}
                >
                  {msg.text}
                </div>
                {msg.chips && msg.chips.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
                    {msg.chips.map((chip, ci) => (
                      <button
                        key={ci}
                        onClick={() => sendMessage(chip)}
                        style={{
                          background: "white",
                          border: "0.5px solid #1f7684",
                          color: "#1f7684",
                          fontSize: 11,
                          padding: "4px 10px",
                          borderRadius: 20,
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div
                style={{
                  background: "white",
                  border: "0.5px solid #e5e7eb",
                  borderRadius: 14,
                  borderBottomLeftRadius: 4,
                  padding: "10px 14px",
                  display: "flex",
                  gap: 4,
                  alignItems: "center",
                  width: "fit-content",
                }}
              >
                {[0, 1, 2].map((n) => (
                  <span
                    key={n}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#1f7684",
                      display: "inline-block",
                      animation: `bounce 1.2s ease-in-out ${n * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div
            style={{
              fontSize: 11,
              color: "#9ca3af",
              textAlign: "center",
              padding: "4px 0 2px",
              background: "#f9fafb",
              borderTop: "0.5px solid #f3f4f6",
            }}
          >
            Powered by Gemini AI
          </div>

          <div
            style={{
              padding: "10px 12px",
              borderTop: "0.5px solid #e5e7eb",
              display: "flex",
              gap: 8,
              alignItems: "center",
              background: "white",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Escribe tu pregunta..."
              style={{
                flex: 1,
                border: "0.5px solid #e5e7eb",
                borderRadius: 20,
                padding: "8px 14px",
                fontSize: 13,
                outline: "none",
                background: "#f9fafb",
                color: "#111827",
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: input.trim() ? "#F5A623" : "#e5e7eb",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: input.trim() ? "pointer" : "default",
                flexShrink: 0,
                transition: "background 0.15s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M2 21L23 12 2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40%            { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>
    </>
  );
}
