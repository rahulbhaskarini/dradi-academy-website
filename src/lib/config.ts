// Site configuration constants
export const SITE_CONFIG = {
  // Contact Information
  phone: "+918978544550",
  email: "contact@dradiacademy.com", // You can add email here when needed
  
  // Location
  location: {
    city: "Miyapur",
    state: "Hyderabad",
    full: "Miyapur, Hyderabad"
  },
  
  // Business Information
  business: {
    name: "DR.ADI Academy",
    tagline: "Transform Your Life Through Mind Power",
    description: "Leading training institute for personal development, mind mastery, and life transformation"
  },
  
  // Social Media
  social: {
    // facebook: "",
    // instagram: "",
    youtube: "https://www.youtube.com/@dradiglobalacademy",
    // linkedin: ""
  }
} as const;

// Helper function to format phone for tel: links
export const getPhoneLink = () => `tel:${SITE_CONFIG.phone}`;

// Helper function to get display phone (with formatting)
export const getDisplayPhone = () => {
  // Format +918978544550 to +91 8978 544 550 for better readability
  const phone = SITE_CONFIG.phone;
  return phone.replace(/(\+91)(\d{4})(\d{3})(\d{3})/, '$1 $2 $3 $4');
};

// Helper function to get YouTube URL
export const getYouTubeUrl = () => SITE_CONFIG.social.youtube;
