import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'branco-gelo': "#F5F5F5",
        'verde-musgo': "#556B2F",
        'verde-suave': "#6B8E23",
        'cinza-claro': "#D3D3D3",
        'preto-suave': "#333333",
        'azul-profundo': "#1B4F72",
      },
    },
  },
  plugins: [],
} satisfies Config;
