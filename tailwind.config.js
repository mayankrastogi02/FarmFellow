/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter var', 'Helvetica']
    },
    colors: {
      "black": "#000000",
      "white": "#ffffff",
      "primary-100": "#E4F6D1",
      "primary-200": "#C6EEA6",
      "primary-300": "#93CE71",
      "primary-400": "#5F9E44",
      "primary-500": "#275E17",
      "primary-600": "#1A5010",
      "primary-700": "#10430B",
      "primary-800": "#073607",
      "primary-900": "#042D07",
      "success-100": "#E5FBE8",
      "success-200": "#CCF7D7",
      "success-300": "#ACE9C1",
      "success-400": "#8FD4AD",
      "success-500": "#68b893",
      "success-600": "#4C9E80",
      "success-700": "#34846F",
      "success-800": "#216A5E",
      "success-900": "#135854",
      "info-100": "#CBF0FB",
      "info-200": "#98DDF8",
      "info-300": "#63BDEA",
      "info-400": "#3B99D6",
      "info-500": "#076BBC",
      "info-600": "#0553A1",
      "info-700": "#033D87",
      "info-800": "#022B6D",
      "info-900": "#011F5A",
      "warning-100": "#FEF9CB",
      "warning-200": "#FDF198",
      "warning-300": "#FBE664",
      "warning-400": "#F7DB3D",
      "warning-500": "#F2C900",
      "warning-600": "#D0A900",
      "warning-700": "#AE8A00",
      "warning-800": "#8C6D00",
      "warning-900": "#745800",
      "danger-100": "#FDE5D5",
      "danger-200": "#FCC4AD",
      "danger-300": "#F69B82",
      "danger-400": "#ED7462",
      "danger-500": "#E23A31",
      "danger-600": "#C22329",
      "danger-700": "#A21828",
      "danger-800": "#830F26",
      "danger-900": "#6C0925"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

