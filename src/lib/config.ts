// Site configuration constants
export const SITE_CONFIG = {
  // Contact Information
  phone: "+916385733491",
  email: "dradiacademy@gmail.com", // You can add email here when needed
  
  // Location
  location: {
    city: "Miyapur",
    state: "Hyderabad",
    full: "Miyapur, Hyderabad"
  },
  
  // Business Information
  business: {
    name: "Dr. ADi Academy",
    tagline: "Transform Your Life Through Mind Power",
    description: "Leading training institute for personal development, mind mastery, and life transformation"
  },
  
  // Social Media
  social: {
    // facebook: "",
    // instagram: "",
    youtube: "https://www.youtube.com/@dradiglobalacademy",
    telegram: "https://t.me/+F37v8f6NXpJkYWJl",
    // linkedin: ""
  }
} as const;

// Helper function to format phone for tel: links
export const getPhoneLink = () => `tel:${SITE_CONFIG.phone}`;

// Helper function to get display phone (with formatting)
export const getDisplayPhone = () => {
  // Format +916385733491 to +91 6385 733 491 for better readability
  const phone = SITE_CONFIG.phone;
  return phone.replace(/(\+91)(\d{4})(\d{3})(\d{3})/, '$1 $2 $3 $4');
};

// Helper function to get YouTube URL
export const getYouTubeUrl = () => SITE_CONFIG.social.youtube;

// Helper function to get Telegram URL
export const getTelegramUrl = () => SITE_CONFIG.social.telegram;
