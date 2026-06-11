export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  category: "skin" | "beauty" | "training";
  whatsappMessage: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "hydra-facial",
    title: "Hydra Facial",
    description:
      "A deeply hydrating and revitalizing facial treatment that cleanses, exfoliates, and nourishes your skin for a radiant glow.",
    benefits: [
      "Deep hydration",
      "Gentle exfoliation",
      "Instant glow",
      "Suitable for all skin types",
    ],
    image: "/images/placeholder.svg",
    category: "skin",
    whatsappMessage:
      "Hi! I'm interested in booking a *Hydra Facial* at Archi's Beauty Care. Could you let me know the availability and pricing?",
  },
  {
    id: "korean-glass-skin",
    title: "Korean Glass Skin Treatment",
    description:
      "Achieve that coveted glass skin look with our multi-step treatment that focuses on hydration, luminosity, and pore refinement.",
    benefits: [
      "Ultra-hydrated skin",
      "Minimized pores",
      "Luminous complexion",
      "Smooth texture",
    ],
    image: "/images/placeholder.svg",
    category: "skin",
    whatsappMessage:
      "Hi! I'm interested in the *Korean Glass Skin Treatment* at Archi's Beauty Care. Can you share details about the procedure and pricing?",
  },
  {
    id: "chemical-peels",
    title: "Chemical Peels",
    description:
      "Professional-grade chemical peels to address uneven skin tone, dullness, and mild scarring for a renewed complexion.",
    benefits: [
      "Even skin tone",
      "Reduced pigmentation",
      "Brighter skin",
      "Improved texture",
    ],
    image: "/images/placeholder.svg",
    category: "skin",
    whatsappMessage:
      "Hi! I'd like to know more about *Chemical Peels* at Archi's Beauty Care. Can I book a consultation?",
  },
  {
    id: "skin-brightening",
    title: "Skin Brightening",
    description:
      "A targeted brightening treatment designed to reduce dullness and restore your skin's natural radiance.",
    benefits: [
      "Natural radiance",
      "Reduced dullness",
      "Even skin tone",
      "Youthful glow",
    ],
    image: "/images/placeholder.svg",
    category: "skin",
    whatsappMessage:
      "Hi! I'm interested in the *Skin Brightening* treatment at Archi's Beauty Care. Please share more details!",
  },
  {
    id: "melasma-treatment",
    title: "Melasma Treatment",
    description:
      "Specialized treatments to help reduce the appearance of melasma and pigmentation for a clearer, more even complexion.",
    benefits: [
      "Reduced pigmentation",
      "Even skin tone",
      "Gentle on skin",
      "Customized approach",
    ],
    image: "/images/placeholder.svg",
    category: "skin",
    whatsappMessage:
      "Hi! I'm struggling with melasma and would like to know about your *Melasma Treatment* at Archi's Beauty Care. Can I book a consultation?",
  },
  {
    id: "open-pore-treatment",
    title: "Open Pore Treatment",
    description:
      "A refining treatment that helps minimize the appearance of enlarged pores for smoother, clearer-looking skin.",
    benefits: [
      "Minimized pores",
      "Smoother skin",
      "Balanced oil production",
      "Cleaner complexion",
    ],
    image: "/images/placeholder.svg",
    category: "skin",
    whatsappMessage:
      "Hi! I'm interested in the *Open Pore Treatment* at Archi's Beauty Care. Can you help me with more information?",
  },
  {
    id: "permanent-eyebrows",
    title: "Permanent Eyebrows",
    description:
      "Expert eyebrow shaping and micro-pigmentation for naturally defined, long-lasting brows that frame your face beautifully.",
    benefits: [
      "Natural look",
      "Long-lasting results",
      "Time-saving",
      "Customized shape",
    ],
    image: "/images/placeholder.svg",
    category: "beauty",
    whatsappMessage:
      "Hi! I'm interested in *Permanent Eyebrows* at Archi's Beauty Care. I'd love to know more about the process and pricing!",
  },
  {
    id: "permanent-lip-colour",
    title: "Permanent Lip Colour",
    description:
      "Subtle, natural-looking lip pigmentation that enhances your natural lip color and defines your smile.",
    benefits: [
      "Natural enhancement",
      "Symmetrical lips",
      "Long-lasting",
      "Saves makeup time",
    ],
    image: "/images/placeholder.svg",
    category: "beauty",
    whatsappMessage:
      "Hi! I'm interested in *Permanent Lip Colour* at Archi's Beauty Care. Can you share details about the procedure?",
  },
  {
    id: "beauty-consultation",
    title: "Beauty Consultation",
    description:
      "A one-on-one consultation to understand your skin, discuss your goals, and recommend the perfect treatment plan for you.",
    benefits: [
      "Personalized advice",
      "Custom treatment plan",
      "Expert guidance",
      "Skin analysis",
    ],
    image: "/images/placeholder.svg",
    category: "beauty",
    whatsappMessage:
      "Hi! I'd like to book a *Beauty Consultation* at Archi's Beauty Care. When is Archana available?",
  },
  {
    id: "self-grooming",
    title: "Self Grooming Sessions",
    description:
      "Learn essential self-grooming techniques to enhance your daily beauty routine with professional tips and tricks.",
    benefits: [
      "Practical skills",
      "Confidence building",
      "Professional tips",
      "Hands-on learning",
    ],
    image: "/images/placeholder.svg",
    category: "training",
    whatsappMessage:
      "Hi! I'm interested in the *Self Grooming Sessions* at Archi's Beauty Care. Could you share the schedule and fees?",
  },
  {
    id: "beauty-academy",
    title: "Beauty Academy Programs",
    description:
      "Comprehensive beauty training programs for aspiring professionals looking to build a career in the beauty industry.",
    benefits: [
      "Certified training",
      "Industry skills",
      "Career guidance",
      "Hands-on practice",
    ],
    image: "/images/placeholder.svg",
    category: "training",
    whatsappMessage:
      "Hi! I want to enroll in the *Beauty Academy Program* at Archi's Beauty Care. Please tell me more about the courses and fees!",
  },
  {
    id: "confidence-development",
    title: "Confidence Development",
    description:
      "Transformative sessions that combine beauty and personal development to help you feel confident from the inside out.",
    benefits: [
      "Inner confidence",
      "Self-esteem boost",
      "Personal growth",
      "Positive mindset",
    ],
    image: "/images/placeholder.svg",
    category: "training",
    whatsappMessage:
      "Hi! I'm interested in the *Confidence Development* sessions at Archi's Beauty Care. Can I know more about what it includes?",
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "skin",
    title: "Skin Treatments",
    description: "Advanced skincare solutions for every concern.",
  },
  {
    id: "beauty",
    title: "Beauty Services",
    description: "Professional beauty enhancements that last.",
  },
  {
    id: "training",
    title: "Training & Academy",
    description: "Learn the art of beauty with expert guidance.",
  },
];
