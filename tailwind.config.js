/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// Studio Ghibli inspired colors
  			ghibli: {
  				// Warm sunset/golden hour colors from Howl's Moving Castle
  				sunset: {
  					50: '#fef7ed',
  					100: '#fdedd3',
  					200: '#fbd7a5',
  					300: '#f8bc6d',
  					400: '#f59e42',
  					500: '#f2811d',
  					600: '#e36613',
  					700: '#bc4c12',
  					800: '#963d16',
  					900: '#7a3315'
  				},
  				// Magical sky blues from Spirited Away
  				sky: {
  					50: '#f0f9ff',
  					100: '#e0f2fe',
  					200: '#bae6fd',
  					300: '#7dd3fc',
  					400: '#38bdf8',
  					500: '#0ea5e9',
  					600: '#0284c7',
  					700: '#0369a1',
  					800: '#075985',
  					900: '#0c4a6e'
  				},
  				// Forest greens from nature scenes
  				forest: {
  					50: '#f0fdf4',
  					100: '#dcfce7',
  					200: '#bbf7d0',
  					300: '#86efac',
  					400: '#4ade80',
  					500: '#22c55e',
  					600: '#16a34a',
  					700: '#15803d',
  					800: '#166534',
  					900: '#14532d'
  				},
  				// Warm coral/pink from magical elements
  				coral: {
  					50: '#fef2f2',
  					100: '#fee2e2',
  					200: '#fecaca',
  					300: '#fca5a5',
  					400: '#f87171',
  					500: '#ef4444',
  					600: '#dc2626',
  					700: '#b91c1c',
  					800: '#991b1b',
  					900: '#7f1d1d'
  				},
  				// Mystical purples
  				mystic: {
  					50: '#faf5ff',
  					100: '#f3e8ff',
  					200: '#e9d5ff',
  					300: '#d8b4fe',
  					400: '#c084fc',
  					500: '#a855f7',
  					600: '#9333ea',
  					700: '#7c3aed',
  					800: '#6b21a8',
  					900: '#581c87'
  				},
  				// Warm cream/beige backgrounds
  				cream: {
  					50: '#fefdfb',
  					100: '#fef9f3',
  					200: '#fdf2e9',
  					300: '#fae8d4',
  					400: '#f6d5a7',
  					500: '#f0c27b',
  					600: '#e9a54a',
  					700: '#d4841f',
  					800: '#b16718',
  					900: '#8f5419'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

