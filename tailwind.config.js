/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      "primary-dark": "var(--theme-primary-dark)",
      "primary-light": "var(--theme-primary-light)",
      "on-primary": "var(--theme-on-primary)",
      "secondary-dark": "var(--theme-secondary-dark)",
      "secondary-light": "var(--theme-secondary-light)",
      "on-secondary": "var(--theme-on-secondary)",
      "tag-bg": "#99999933",
    },
    backgroundImage: {
      hero: "var(--theme-hero)",
    },
  },
  variants: {
    backgroundOpacity: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
    ],
  },
};
export const plugins = [];
