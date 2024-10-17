/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "dark-orange": "#C65842",
      orange: "#FF931E",
      purple: "#330333",
      black: "#140314",
      white: "#FFFFFF",
      magenta: "#8E2E50",
    },
    extend: {
      fontFamily: {
        // https://github.com/system-fonts/modern-font-stacks?tab=readme-ov-file#monospace-code
        header: [
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Arial Nova",
          "Nimbus Sans",
          "Arial",
          "sans-serif",
        ],
        // https://github.com/system-fonts/modern-font-stacks?tab=readme-ov-file#monospace-code
        body: [
          "ui-monospace",
          "Cascadia Code",
          "Source Code Pro",
          "Menlo",
          "Consolas",
          "DejaVu Sans Mono",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
