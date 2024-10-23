module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			indigo: {
  				'600': '#4f46e5'
  			},
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
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			'neon-green': '#39FF14',
  			'neon-pink': '#FF10F0',
  			'neon-blue': '#3B83BD',
  			'light-punk': {
  				background: '#F0F0F0',
  				text: '#333333',
  				accent1: '#FF6B6B',
  				accent2: '#4ECDC4',
  				accent3: '#45B7D1',
  			},
  		},
  		animation: {
  			'fade-in-down': 'fadeInDown 1s ease-out',
  			'fade-in-up': 'fadeInUp 1s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'glitch': 'glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
  			'typewriter': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
  		},
  		keyframes: {
  			fadeInDown: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(-10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			fadeInUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			glitch: {
  				'0%': { transform: 'translate(0)' },
  				'20%': { transform: 'translate(-5px, 5px)' },
  				'40%': { transform: 'translate(-5px, -5px)' },
  				'60%': { transform: 'translate(5px, 5px)' },
  				'80%': { transform: 'translate(5px, -5px)' },
  				'100%': { transform: 'translate(0)' },
  			},
  			typing: {
  				'from': { width: '0' },
  				'to': { width: '100%' },
  			},
  			blink: {
  				'from, to': { 'border-color': 'transparent' },
  				'50%': { 'border-color': 'orange' },
  			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'neon': '0 0 5px theme("colors.neon-pink"), 0 0 10px theme("colors.neon-pink")',
  			'neon-intense': '0 0 10px theme("colors.neon-pink"), 0 0 20px theme("colors.neon-pink"), 0 0 30px theme("colors.neon-pink")',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
