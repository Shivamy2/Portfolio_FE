/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      "primary-dark": "#EB455F",
      "primary-light": "#FCFFE7",
      "on-primary": "#ffffff",
      "secondary-dark": "#2B3467",
      "secondary-light": "#BAD7E9",
      "on-secondary": "#000000",
    },
    backgroundImage: {
      hero: "url('https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg')",
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
