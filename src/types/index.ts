export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PetType {
  id: string;
  name: string;
  icon: string;
}

export interface BookingFormData {
  petType: string;
  emergencyLevel: 'critical' | 'urgent' | 'scheduled';
  location: string;
  contactName: string;
  contactPhone: string;
  petName: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  petName: string;
  petType: string;
  rating: number;
  comment: string;
  date: string;
  image?: string;
}

export interface CoverageArea {
  city: string;
  available: boolean;
  responseTime: string;
}
