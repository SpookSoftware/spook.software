/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      // Dark & Moody palette
      void: "#140314",         // Near-black base
      shadow: "#330333",       // Deep purple - secondary surfaces
      wine: "#8E2E50",         // Maroon - tertiary accent
      ember: "#C65842",        // Terracotta - primary accent
      flame: "#FF931E",        // Orange - CTAs, highlights
      light: "#FFFFFF",        // Text on dark
      mist: "rgba(255,255,255,0.6)", // Secondary text
      // Legacy aliases for compatibility
      "dark-orange": "#C65842",
      orange: "#FF931E",
      purple: "#330333",
      black: "#140314",
      white: "#FFFFFF",
      magenta: "#8E2E50",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        header: [
          "Clash Display",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "JetBrains Mono",
          "ui-monospace",
          "Cascadia Code",
          "Source Code Pro",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        "glow-ember": "0 0 40px rgba(198, 88, 66, 0.4)",
        "glow-flame": "0 0 30px rgba(255, 147, 30, 0.3)",
        "glow-ember-sm": "0 0 20px rgba(198, 88, 66, 0.3)",
      },
      backgroundImage: {
        "gradient-ember": "linear-gradient(135deg, #C65842 0%, #FF931E 100%)",
      },
    },
  },
  plugins: [],
};
