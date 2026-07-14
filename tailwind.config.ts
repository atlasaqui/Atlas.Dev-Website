import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0608',
        'bg-2': '#110810',
        'bg-3': '#1a0c12',
        red: { DEFAULT: '#e01020', 2: '#ff2235', dark: '#8b0010' },
        pink: '#ff4060',
        orange: '#ff6020',
        cyan: '#00d4ff',
        green: '#00e060',
        purple: '#9b2de5',
        yellow: '#ffd700',
        'bode-green': '#475c1b',
        'bode-green-dark': '#2e3c11',
        'bode-cream': '#f7eeda',
        'bode-gold': '#fbb03b',
        text1: '#f5e8ea',
        text2: '#8a7075',
        text3: '#4a3038',
        border1: 'rgba(255,255,255,0.08)'
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Impact', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', '"Courier New"', 'monospace'],
        grave: ['var(--font-grave)', 'Impact', 'sans-serif'],
        fraunces: ['var(--font-fraunces)', 'Georgia', 'serif']
      },
      borderRadius: {
        sm2: '6px',
        md2: '12px',
        lg2: '18px'
      },
      boxShadow: {
        glow: '0 0 40px rgba(224,16,32,.25)'
      },
      backgroundImage: {
        'red-grad': 'linear-gradient(135deg, #ff2235 0%, #ff6020 100%)'
      }
    }
  },
  plugins: []
};

export default config;
