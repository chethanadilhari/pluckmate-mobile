/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        teaGreen: "#1F4D33",
        lightBrown: "#B38A5C",
        lightGray: "#D9D9D9",
        darkBrown: "#5E360A",
      },

      fontFamily: {
        poppins: ['Poppins_400Regular'],
        'poppins-semibold': ['Poppins_600SemiBold'],
        'poppins-bold': ['Poppins_700Bold'],

        inter: ['Inter_400Regular'],
        'inter-semibold': ['Inter_600SemiBold'],
        'inter-bold': ['Inter_700Bold'],
      },
    },
  },
  plugins: [],
}