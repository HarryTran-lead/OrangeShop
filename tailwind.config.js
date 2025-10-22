export default {
content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#F97316', // orange-500
dark: '#EA580C', // orange-600
light: '#FFF7ED', // orange-50
},
},
container: {
center: true,
padding: '1rem',
screens: { lg: '992px', xl: '1140px', '2xl': '1280px' },
},
boxShadow: { soft: '0 8px 30px rgba(0,0,0,0.06)' }
},
},
plugins: [],
}