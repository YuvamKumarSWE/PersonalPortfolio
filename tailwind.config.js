/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'press-start': ['"Press Start 2P"', 'cursive'],
				'vt323': ['VT323', 'monospace'],
				'space-mono': ['"Space Mono"', 'monospace'],
				// Keep old fonts during migration
				grotesk: ['Space Grotesk', 'sans-serif'],
				'roboto-flex': ['Roboto Flex', 'sans-serif'],
				orbitron: ['Orbitron', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
			colors: {
				// Y2K palette - Light Mode
				'y2k-bg':      '#FAFAFA',
				'y2k-surface': '#F4F4F5',
				'y2k-magenta': '#D946EF', // Slightly softened magenta
				'y2k-cyan':    '#06B6D4', // Darker cyan for contrast
				'y2k-yellow':  '#EAB308', // Darker yellow
				'y2k-orange':  '#F97316',
				'y2k-lime':    '#22C55E',
				'y2k-pink':    '#EC4899',
				'y2k-blue':    '#3B82F6',
				// Keep legacy tokens during migration
				'neon-green':   '#16A34A',
				'dark-bg':      '#FAFAFA', // Renamed but kept key for compatibility
				'dark-surface': '#F4F4F5',
				// HSL token wrappers
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				'blink': 'blink 1s step-end infinite',
				'blink-slow': 'blink 1.5s step-end infinite',
				'marquee': 'marquee 30s linear infinite',
				'marquee-reverse': 'marquee-reverse 30s linear infinite',
				'pixel-float': 'pixel-float 3s ease-in-out infinite',
				'magenta-glow-pulse': 'magenta-glow-pulse 2s ease-in-out infinite',
				'scanline': 'scanline 8s linear infinite',
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				'marquee-reverse': {
					'0%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(0%)' },
				},
				'pixel-float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' },
				},
				'magenta-glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 10px #FF00FF44, 0 0 20px #FF00FF22' },
					'50%': { boxShadow: '0 0 25px #FF00FF88, 0 0 50px #FF00FF44' },
				},
				scanline: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' },
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
