import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sunny: {
          blue:   "#1B4F8A",
          gold:   "#F5A623",
          yellow: "#F9D423",
          green:  "#166534",
        },
      },
    },
  },
  plugins: [],
};

export default config;
