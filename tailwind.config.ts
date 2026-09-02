import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red    : "#CC2229",
          navy   : "#1B2A6B",
          green  : "#2E7D52",
          offwhite: "#F8F8F8",
          charcoal: "#1C1C1C",
          gray   : "#6B7280",
          border : "#E5E7EB",
        },
      },
      fontFamily: {
        heading : ["Playfair Display", "Georgia", "serif"],
        body    : ["DM Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero"    : ["clamp(2.25rem, 6vw + 1rem, 5rem)", { lineHeight: "1.1", fontWeight: "700" }],
        "h1"      : ["clamp(1.75rem, 5vw + 1rem, 3.5rem)", { lineHeight: "1.2",  fontWeight: "700" }],
        "h2"      : ["clamp(1.5rem, 4vw + 1rem, 2.5rem)", { lineHeight: "1.25", fontWeight: "700" }],
        "h3"      : ["clamp(1.25rem, 3vw + 1rem, 1.75rem)", { lineHeight: "1.3", fontWeight: "600" }],
        "h4"      : ["clamp(1.125rem, 2vw + 1rem, 20px)", { lineHeight: "1.4",  fontWeight: "600" }],
        "body-lg" : ["18px", { lineHeight: "1.7"  }],
        "body"    : ["16px", { lineHeight: "1.7"  }],
        "sm"      : ["14px", { lineHeight: "1.6"  }],
        "xs"      : ["13px", { lineHeight: "1.5"  }],
      },
      maxWidth: {
        site: "1200px",
      },
      spacing: {
        section: "96px",
      },
      boxShadow: {
        card  : "0 2px 16px rgba(27, 42, 107, 0.08)",
        hover : "0 8px 32px rgba(27, 42, 107, 0.16)",
        nav   : "0 2px 12px rgba(27, 42, 107, 0.10)",
      },
      borderRadius: {
        xl2: "16px",
        xl3: "24px",
      },
      keyframes: {
        "fade-up": {
          "0%"  : { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse_soft: {
          "0%, 100%": { transform: "scale(1)",    opacity: "1"   },
          "50%"      : { transform: "scale(1.08)", opacity: "0.9" },
        },
      },
      animation: {
        "fade-up"    : "fade-up 0.6s ease-out forwards",
        "pulse-soft" : "pulse_soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
