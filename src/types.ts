export interface EventItem {
  id: string;
  title: string;
  date: string; // Machine/Display format e.g. "Sat 12 Oct 2025" or "8 Nov"
  fullDate: string; // Full representation e.g. "Saturday, 12 October 2025"
  venue: string;
  city: string;
  price: number | 'FREE';
  formattedPrice: string; // e.g. "$45" or "FREE"
  description: string;
  organizer: string;
  isFeatured?: boolean;
  isTrending?: boolean;
  imageAccentColor?: string; // CSS-based color styling
  imageUrl?: string;
}

export interface PackageItem {
  id: string;
  name: string;
  priceText: string;
  priceVal: number;
  isAddon?: boolean;
  isPopular?: boolean;
  description: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  initials: string;
  quote: string;
  author: string;
  role: string;
}

export type ActivePage = 'home' | 'discover' | 'single-event' | 'submit' | 'about';

export interface FilterState {
  city: string;
  dateRange: string;
  pricing: 'all' | 'free' | 'paid';
  sort: 'date-asc' | 'date-desc' | 'price-asc' | 'price-desc';
}
