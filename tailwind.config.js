/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
               'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         screens: {
            'phone': "640px",
            'tablet': '768px',
            'laptop': '1024px',
            'desktop': '1280px',
            'desktop-md': '1536px',
         },
         colors: {
            "darkBg": "#0f172a",
            "darkText": "#ddd"
         },
         maxWidth: {
            "1366": "1366px",
            "1024": "1024px",
            "768": "768px",
            "640": "640px",
            "475": "475px",
         }
      },
   },
   plugins: [],
   darkMode: "class"
}
