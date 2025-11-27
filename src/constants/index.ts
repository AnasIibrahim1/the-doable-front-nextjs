// Application constants and configuration values

/**
 * Pagination configuration
 */
export const PAGINATION = {
  ARTICLES_PER_PAGE: 9,
  MAX_VISIBLE_PAGES: 5,
  DEFAULT_PAGE: 1,
} as const;

/**
 * Animation configuration
 */
export const ANIMATION = {
  DURATION: {
    FAST: 0.3,
    NORMAL: 0.6,
    SLOW: 0.8,
  },
  DELAY: {
    SHORT: 0.1,
    MEDIUM: 0.2,
    LONG: 0.4,
  },
  EASING: {
    EASE_OUT: 'easeOut',
    EASE_IN_OUT: 'easeInOut',
    LINEAR: 'linear',
  },
} as const;

/**
 * API endpoints
 */
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
  ARTICLES: '/api/articles',
} as const;

/**
 * Cache configuration
 */
export const CACHE = {
  STATIC_CACHE: 'static-v1',
  DYNAMIC_CACHE: 'dynamic-v1',
  CACHE_NAME: 'the-doable-v1',
  TTL: {
    IMAGES: 60 * 60 * 24 * 7, // 7 days
    PAGES: 60 * 60 * 24, // 1 day
    API: 60 * 5, // 5 minutes
  },
} as const;

/**
 * Image configuration
 */
export const IMAGES = {
  QUALITY: 75,
  SIZES: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  PLACEHOLDER: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8vPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Y2E3YWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4=',
} as const;

/**
 * Breakpoints for responsive design
 */
export const BREAKPOINTS = {
  MOBILE: '768px',
  TABLET: '1024px',
  DESKTOP: '1280px',
  LARGE_DESKTOP: '1536px',
} as const;

/**
 * Color palette
 */
export const COLORS = {
  PRIMARY: {
    DARK: '#050D36',
    BLUE: '#104CBA',
    PURPLE: '#913BFF',
  },
  TEXT: {
    GRAY: '#777C90',
    WHITE: '#ffffff',
    LIGHT_GRAY: '#9AA0B5',
  },
  GRADIENTS: {
    PRIMARY: 'from-[#913BFF] to-[#104CBA]',
    SECONDARY: 'from-[#104CBA] to-[#913BFF]',
    BACKGROUND: 'from-[#050D36] to-[#0A1A4A]',
  },
} as const;

/**
 * Z-index layers
 */
export const Z_INDEX = {
  DROPDOWN: 10,
  STICKY: 20,
  FIXED: 30,
  MODAL: 40,
  TOAST: 50,
  TOOLTIP: 60,
} as const;

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  FORM_VALIDATION: 'Please fill in all required fields.',
  IMAGE_LOAD_ERROR: 'Failed to load image',
  GENERIC_ERROR: 'Something went wrong. Please try again.',
} as const;

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
  CONTACT_FORM: 'Thank you for your message. We\'ll get back to you soon!',
  NEWSLETTER: 'Successfully subscribed to our newsletter!',
  FORM_SUBMISSION: 'Form submitted successfully!',
} as const;

/**
 * Validation rules
 */
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[\+]?[1-9][\d]{0,15}$/,
  MIN_PASSWORD_LENGTH: 8,
  MAX_TEXT_LENGTH: 1000,
} as const;

/**
 * Performance thresholds
 */
export const PERFORMANCE = {
  LCP_THRESHOLD: 2500, // 2.5 seconds
  FID_THRESHOLD: 100, // 100 milliseconds
  CLS_THRESHOLD: 0.1, // 0.1
  TTFB_THRESHOLD: 800, // 800 milliseconds
} as const;
