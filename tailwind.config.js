module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors - Editorial authority and trust foundation
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1E40AF", // blue-700 - Main primary
          800: "#1E3A8A", // blue-800
          900: "#1E40AF", // blue-900
          DEFAULT: "#1E40AF" // blue-700
        },
        
        // Secondary colors - Professional depth for analysis content
        secondary: {
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600 - Main secondary
          700: "#334155", // slate-700
          800: "#1E293B", // slate-800
          DEFAULT: "#475569" // slate-600
        },
        
        // Accent colors - Breaking news and urgent updates
        accent: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500 - Main accent
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          DEFAULT: "#F59E0B" // amber-500
        },
        
        // Background colors
        background: "#FEFEFE", // neutral-50 - Clean reading canvas
        surface: "#F8FAFC", // slate-50 - Content separation
        
        // Text colors
        text: {
          primary: "#1E293B", // slate-800 - Extended reading comfort
          secondary: "#64748B" // slate-500 - Bylines and timestamps
        },
        
        // Status colors
        success: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600 - Main success
          DEFAULT: "#059669" // emerald-600
        },
        
        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500 - Main warning
          DEFAULT: "#F59E0B" // amber-500
        },
        
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600 - Main error
          DEFAULT: "#DC2626" // red-600
        },
        
        // Border colors
        border: {
          light: "#E2E8F0", // slate-200
          medium: "#CBD5E1" // slate-300
        }
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        editorial: ['Crimson Text', 'serif'],
        crimson: ['Crimson Text', 'serif']
      },
      
      fontSize: {
        'editorial-xs': ['0.75rem', { lineHeight: '1.5' }],
        'editorial-sm': ['0.875rem', { lineHeight: '1.6' }],
        'editorial-base': ['1rem', { lineHeight: '1.6' }],
        'editorial-lg': ['1.125rem', { lineHeight: '1.6' }],
        'editorial-xl': ['1.25rem', { lineHeight: '1.5' }],
        'editorial-2xl': ['1.5rem', { lineHeight: '1.4' }],
        'editorial-3xl': ['1.875rem', { lineHeight: '1.3' }],
        'editorial-4xl': ['2.25rem', { lineHeight: '1.2' }],
        'editorial-5xl': ['3rem', { lineHeight: '1.1' }]
      },
      
      spacing: {
        'editorial': '1.5rem',
        'editorial-sm': '1rem',
        'editorial-lg': '2rem',
        'editorial-xl': '3rem'
      },
      
      boxShadow: {
        'editorial': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'editorial-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
        'editorial-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
        'editorial-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)'
      },
      
      borderRadius: {
        'editorial': '0.5rem',
        'editorial-sm': '0.25rem',
        'editorial-lg': '0.75rem'
      },
      
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
        '400': '400ms'
      },
      
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'editorial-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'editorial-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out',
        'slide-up': 'slideUp 400ms ease-out',
        'slide-down': 'slideDown 400ms ease-out'
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      
      typography: {
        DEFAULT: {
          css: {
            color: '#1E293B', // slate-800
            maxWidth: 'none',
            lineHeight: '1.6',
            h1: {
              color: '#1E293B', // slate-800
              fontWeight: '700',
              fontSize: '2.25rem',
              lineHeight: '1.2'
            },
            h2: {
              color: '#1E293B', // slate-800
              fontWeight: '600',
              fontSize: '1.875rem',
              lineHeight: '1.3'
            },
            h3: {
              color: '#1E293B', // slate-800
              fontWeight: '600',
              fontSize: '1.5rem',
              lineHeight: '1.4'
            },
            p: {
              color: '#334155', // slate-700
              lineHeight: '1.6'
            },
            a: {
              color: '#1E40AF', // blue-700
              textDecoration: 'none',
              '&:hover': {
                color: '#1D4ED8' // blue-700 hover
              }
            },
            blockquote: {
              fontFamily: 'Crimson Text, serif',
              fontStyle: 'italic',
              borderLeftColor: '#1E40AF', // blue-700
              color: '#475569' // slate-600
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}