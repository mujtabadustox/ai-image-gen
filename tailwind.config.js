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
			  "ghibli-orange":"#ED6A28",
			  "ghibli-cyan": "#5EB4C9",
			  "ghibli-cream" : "#FFFDF5",
			  "ghibli-green": "#DBF7E3",
			  "ghibli-purple" : "#6578CD",
			  "ghibli-gray" : "#F4F4F4",
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
  				},
				
				night: {
					50:  '#f5f7fa',
					100: '#e4e9f2',
					200: '#cfd8e3',
					300: '#a4b0c9',
					400: '#6e7fa8',
					500: '#475c91',
					600: '#334478',
					700: '#253360',
					800: '#1b2749',
					900: '#111833',
				  },
				  soot: {
					50:  '#f9fafb',
					100: '#f3f4f6',
					200: '#e5e7eb',
					300: '#d1d5db',
					400: '#9ca3af',
					500: '#6b7280',
					600: '#4b5563',
					700: '#374151',
					800: '#1f2937',
					900: '#111827',
				  },
				  // Ghibli Park official colors
				  park: {
					// Warm earth tones from the official site
					brown: {
					  50: '#faf8f4',
					  100: '#f4f0e8',
					  200: '#e8ddc8',
					  300: '#d4c1a0',
					  400: '#c5a572',
					  500: '#b8924d',
					  600: '#a67c3a',
					  700: '#8b652f',
					  800: '#6f4f24',
					  900: '#5a3f1c',
					},
					// Official Ghibli Park orange/rust
					rust: {
					  50: '#fef7f0',
					  100: '#fdeee0',
					  200: '#f9d6c1',
					  300: '#f4b896',
					  400: '#ec8c5c',
					  500: '#e76530',
					  600: '#d64d1e',
					  700: '#b23d18',
					  800: '#8f311a',
					  900: '#742a18',
					},
					// Natural green from park elements
					nature: {
					  50: '#f4f7f4',
					  100: '#e6efe6',
					  200: '#cfe0cf',
					  300: '#a9c9a9',
					  400: '#7ba87b',
					  500: '#588a58',
					  600: '#446944',
					  700: '#385638',
					  800: '#2d442d',
					  900: '#263826',
					},
					// Soft cream backgrounds
					cream: {
					  50: '#fefcf9',
					  100: '#fdf8f0',
					  200: '#fbf0e1',
					  300: '#f7e4c8',
					  400: '#f1d4a3',
					  500: '#e8c07a',
					  600: '#dba555',
					  700: '#c08843',
					  800: '#9e6f37',
					  900: '#805b2f',
					}
				  },
  			}
  		},
  		// Custom keyframes & animations for Ghibli-style motion
  		keyframes: {
  		  float: {
  		    '0%, 100%': { transform: 'translateY(0px)' },
  		    '50%': { transform: 'translateY(-12px)' },
  		  },
  		  sway: {
  		    '0%, 100%': { transform: 'rotate(0deg)' },
  		    '50%': { transform: 'rotate(3deg)' },
  		  },
  		  drift: {
  		    '0%': { transform: 'translateX(-20%)' },
  		    '100%': { transform: 'translateX(120%)' },
  		  },
  		  wave: {
  		    '0%': { transform: 'translateX(0)' },
  		    '100%': { transform: 'translateX(-50%)' },
  		  },
  		},
  		animation: {
  		  float: 'float 6s ease-in-out infinite',
  		  sway: 'sway 8s ease-in-out infinite',
  		  drift: 'drift 60s linear infinite',
  		  wave: 'wave 30s linear infinite',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

