"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "¡Hola! Soy Sunny, tu asistente de Cereal Sunny. ¿En qué puedo ayudarte hoy?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", text: "Error de conexión. Por favor intenta de nuevo." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#39a4b4",
          border: "none",
          cursor: "pointer",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(57,164,180,0.5)",
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div style={{
          position: "fixed",
          bottom: "92px",
          right: "24px",
          width: "340px",
          maxHeight: "500px",
          background: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}>

          {/* Header */}
          <div style={{ background: "#39a4b4", padding: "14px 16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>☀️</div>
            <div>
              <div style={{ color: "#fff", fontWeight: "700", fontSize: "14px" }}>Asistente Sunny</div>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "11px", display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#86efac", display: "inline-block" }} />
                En línea
              </div>
            </div>
          </div>

          {/* Quick buttons */}
          <div style={{ padding: "10px 12px", display: "flex", gap: "6px", flexWrap: "wrap", borderBottom: "1px solid #f0f0f0" }}>
            {["¿Cómo distribuir?", "Ver productos", "Contacto"].map((q) => (
              <button key={q} onClick={() => sendMessage(q)}
                style={{ background: "#f0f9fa", border: "1px solid #39a4b4", color: "#39a4b4", borderRadius: "20px", padding: "4px 10px", fontSize: "11px", cursor: "pointer", fontWeight: "600" }}
              >{q}</button>
            ))}
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "82%",
                  padding: "10px 13px",
                  borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                  background: msg.role === "user" ? "#39a4b4" : "#f5f5f5",
                  color: msg.role === "user" ? "#fff" : "#111827",
                  fontSize: "13px",
                  lineHeight: "1.5",
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ background: "#f5f5f5", borderRadius: "14px 14px 14px 4px", padding: "12px 16px", display: "flex", gap: "5px", alignItems: "center" }}>
                  {[0, 1, 2].map((i) => (
                    <span key={i} style={{
                      width: "7px", height: "7px", borderRadius: "50%", background: "#39a4b4", display: "inline-block",
                      animation: `bounce 0.9s ${i * 0.2}s infinite`
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: "10px 12px", borderTop: "1px solid #f0f0f0", display: "flex", gap: "8px" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Escribe tu pregunta..."
              style={{
                flex: 1, border: "1px solid #e0e0e0", borderRadius: "20px",
                padding: "8px 14px", fontSize: "13px", outline: "none",
                fontFamily: "Arial, sans-serif",
              }}
            />
            <button onClick={() => sendMessage()} disabled={loading || !input.trim()}
              style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: loading || !input.trim() ? "#ccc" : "#39a4b4",
                border: "none", cursor: loading || !input.trim() ? "default" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}
