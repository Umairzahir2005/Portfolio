module.exports = {
    content: [
        './app/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                soft: '#f8fafc',
                neon: {
                    cyan: '#00f0ff',
                    purple: '#d946ef',
                    pink: '#ec4899',
                    blue: '#3b82f6',
                },
            },
            boxShadow: {
                glow: '0 30px 80px rgba(37, 99, 235, 0.18)',
                'glow-sm': '0 10px 25px rgba(147, 51, 234, 0.15)',
                'glow-lg': '0 50px 100px rgba(99, 102, 241, 0.25)',
                'glow-cyan': '0 30px 80px rgba(0, 240, 255, 0.2)',
                'glow-purple': '0 30px 80px rgba(217, 70, 239, 0.2)',
            },
            backgroundImage: {
                hero: 'radial-gradient(circle at top left, rgba(37, 99, 235, 0.24), transparent 24%), radial-gradient(circle at top right, rgba(59, 130, 246, 0.16), transparent 18%)',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'aurora': 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1), rgba(0, 240, 255, 0.05))',
                'aurora-dark': 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(124, 58, 255, 0.1))',
            },
            keyframes: {
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.7 },
                },
                'shimmer': {
                    '0%': { backgroundPosition: '200% center' },
                    '100%': { backgroundPosition: '-200% center' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'slide-up': {
                    'from': { opacity: 0, transform: 'translateY(40px)' },
                    'to': { opacity: 1, transform: 'translateY(0)' },
                },
                'fade-in-scale': {
                    'from': { opacity: 0, transform: 'scale(0.95)' },
                    'to': { opacity: 1, transform: 'scale(1)' },
                },
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'shimmer': 'shimmer 3s linear infinite',
                'gradient-shift': 'gradient-shift 8s ease infinite',
                'slide-up': 'slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                'fade-in-scale': 'fade-in-scale 0.5s ease-out',
            },
            transitionTimingFunction: {
                'smooth': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                'bounce-smooth': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            },
        },
    },
    plugins: [],
};
