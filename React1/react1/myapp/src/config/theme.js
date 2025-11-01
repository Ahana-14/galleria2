// Theme Configuration
export const theme = {
  colors: {
    // Primary colors - soft lavender
    primary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95'
    },
    
    // Secondary colors - teal
    secondary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a'
    },
    
    // Accent colors - blush pink
    accent: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843'
    },
    
    // Sky blue accent
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
    
    // Neutral colors
    neutral: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    }
  },
  
  // Background gradients
  backgrounds: {
    primary: 'bg-gradient-to-br from-purple-50 via-white to-pink-50',
    secondary: 'bg-gradient-to-br from-teal-50 via-white to-sky-50',
    accent: 'bg-gradient-to-br from-pink-50 via-white to-purple-50',
    neutral: 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
  },
  
  // Button styles
  buttons: {
    primary: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    secondary: 'bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600',
    accent: 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'
  },
  
  // Card styles
  cards: {
    default: 'bg-white/80 backdrop-blur-sm border border-white/20',
    elevated: 'bg-white shadow-lg border border-gray-100',
    glass: 'bg-white/60 backdrop-blur-md border border-white/30'
  }
};

export default theme;