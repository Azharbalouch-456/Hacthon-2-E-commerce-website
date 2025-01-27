// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//    "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
    
//       "./app/**/*.{js,ts,jsx,tsx,mdx}",
//       "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//       "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
//       // Or if using `src` directory:
//       "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         gold: '#D4AF37', // Custom gold color
        
//         cream: '#FAF8F6',
//         gold: '#FFC107',
//       },
//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Remove the line below if you're not using a `src` directory
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFC107', // Corrected and unique custom gold color
        cream: '#FAF8F6',
        colors: {
          cream: "#F9F1E7", // Define your custom color
          fontFamily: {
            poppins: ["Poppins", "sans-serif"],
          },
        },
      },

    },
  },
  plugins: [],
};
