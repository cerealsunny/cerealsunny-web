import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `Eres Sunny, el asistente virtual de Cereal Sunny — una fábrica venezolana de cereales de alta calidad que vende exclusivamente a distribuidores mayoristas.

Información que conoces:
- Productos: Granola Clásica, Copos de Maíz, Muesli Tropical, Trigo Integral, Sunny Kids (infantil), Granola Premium, Cereal Sin Gluten, High Protein
- Empresa: Fabricante B2B en Venezuela y Latinoamérica
- Contacto: +58 212 555-0100 | info@cerealsunny.com | Caracas, Venezuela
- Para distribuidores: visitar la sección Contacto del sitio o llamar al teléfono
- Recetas: Bowl Energético, Granola con Yogur, Barras de Cereal, Smoothie Tropical y más

Responde siempre en español, de forma amable y concisa. Si no sabes algo específico, invita al usuario a contactar directamente a la empresa.`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://cerealsunny-web.vercel.app",
        "X-Title": "Cereal Sunny",
      },
      body: JSON.stringify({
        model: "openrouter/auto",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message }
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    console.log("OpenRouter response:", JSON.stringify(data).substring(0, 300));

    const reply = data?.choices?.[0]?.message?.content?.trim() 
      || "Lo siento, no pude procesar tu mensaje. Contáctanos al +58 212 555-0100.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({ 
      reply: "Error de conexión. Contáctanos al +58 212 555-0100." 
    }, { status: 500 });
  }
}
