export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  category: ServiceCategory;
  whatsappMessage: string;
}

export type ServiceCategory = "skin" | "beauty" | "training";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  title: string;
}

export type GalleryCategory = "facial" | "skin" | "brows" | "lip";

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface BusinessInfo {
  name: string;
  owner: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  address: string;
  city: string;
  state: string;
  mapEmbedUrl: string;
  businessHours: BusinessHours[];
}

export interface BusinessHours {
  day: string;
  hours: string;
}

export interface AppointmentFormData {
  fullName: string;
  mobileNumber: string;
  service: string;
  preferredDate: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface WhyChooseUsItem {
  icon: string;
  title: string;
  description: string;
}
