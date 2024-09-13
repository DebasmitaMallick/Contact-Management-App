/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        indigo: "#4F46E5",
        slate: {
          100: "#E0E7FF",
        },
        "white-smoke": "#F5F5F5",

        // Accent Colors
        cyan: "#06B6D4",
        "emerald-green": "#10B981",
        amber: "#F59E0B",
        "rose-red": "#EF4444",

        // Typography Colors
        "dark-charcoal": "#333333",
        "cool-gray": "#6B7280",

        // Data Visualization Colors
        "sky-blue": "#3B82F6",
        "light-coral": "#F87171",
        "pale-green": "#A7F3D0",
      },
    },
  },
  plugins: [],
};
