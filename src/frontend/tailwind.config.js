import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans:  ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "oklch(0.72 0.09 78)",
          light:   "oklch(0.77 0.09 78)",
          muted:   "oklch(0.60 0.09 75)",
          dark:    "oklch(0.45 0.06 75)",
        },
        burgundy: {
          DEFAULT: "oklch(0.27 0.07 15)",
          light:   "oklch(0.33 0.08 15)",
          deep:    "oklch(0.20 0.06 15)",
        },
        luxury: {
          black:    "oklch(0.09 0 0)",
          charcoal: "oklch(0.12 0 0)",
          graphite: "oklch(0.16 0 0)",
          dark:     "oklch(0.20 0 0)",
        },
        border:     "oklch(var(--border))",
        input:      "oklch(var(--input))",
        ring:       "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT:    "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT:    "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT:              "oklch(var(--sidebar))",
          foreground:           "oklch(var(--sidebar-foreground))",
          primary:              "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent:               "oklch(var(--sidebar-accent))",
          "accent-foreground":  "oklch(var(--sidebar-accent-foreground))",
          border:               "oklch(var(--sidebar-border))",
          ring:                 "oklch(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xs:        "0 1px 2px 0 rgba(0,0,0,0.05)",
        gold:      "0 0 30px oklch(0.72 0.09 78 / 0.15)",
        "gold-lg": "0 0 60px oklch(0.72 0.09 78 / 0.22)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        /* Ken Burns slow zoom: applied via CSS class hero-kenburns */
        kenburns: {
          from: { transform: "scale(1.08)" },
          to:   { transform: "scale(1.0)"  },
        },
        /* Scroll dot bounce inside mouse indicator */
        "scroll-dot": {
          "0%":   { transform: "translateY(0)",    opacity: "1"   },
          "60%":  { transform: "translateY(10px)", opacity: "0.2" },
          "100%": { transform: "translateY(0)",    opacity: "0"   },
        },
        /* Gold shimmer sweep across buttons */
        "shimmer-sweep": {
          "0%":   { left: "-120%" },
          "100%": { left: "120%"  },
        },
      },
      animation: {
        "accordion-down":  "accordion-down 0.2s ease-out",
        "accordion-up":    "accordion-up 0.2s ease-out",
        "fade-up":         "fade-up 0.8s ease-out forwards",
        "fade-in":         "fade-in 1s ease-out forwards",
        kenburns:          "kenburns 10s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "scroll-dot":      "scroll-dot 1.8s ease-in-out infinite",
        "shimmer-sweep":   "shimmer-sweep 0.55s ease forwards",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
