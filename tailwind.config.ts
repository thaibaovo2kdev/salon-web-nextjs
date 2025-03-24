module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-background": "var(--app-background)",
        "fuschia-100": "var(--fuschia-100)",
        "fuschia-60": "var(--fuschia-60)",
        "fuschia-80": "var(--fuschia-80)",
        "iris-100": "var(--iris-100)",
        "iris-60": "var(--iris-60)",
        "iris-80": "var(--iris-80)",
        "light-pink": "var(--light-pink)",
        "neutral-2": "var(--neutral-2)",
        neutralblack: "var(--neutralblack)",
        neutralwhite: "var(--neutralwhite)",
        pink: "var(--pink)",
        red: "var(--red)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        body: "var(--body-font-family)",
        "desktop-body-para-20": "var(--desktop-body-para-20-font-family)",
        "desktop-body-para-20-med":
          "var(--desktop-body-para-20-med-font-family)",
        "desktop-body-paragraph-med":
          "var(--desktop-body-paragraph-med-font-family)",
        "desktop-body-paragraph-reg":
          "var(--desktop-body-paragraph-reg-font-family)",
        "desktop-body-subtitle-reg":
          "var(--desktop-body-subtitle-reg-font-family)",
        "desktop-header-h2": "var(--desktop-header-h2-font-family)",
        "desktop-header-h3": "var(--desktop-header-h3-font-family)",
        "header-1": "var(--header-1-font-family)",
        "header-2": "var(--header-2-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        branch: ["Branch"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
