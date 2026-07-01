export interface AgendaItem {
  time: string;
  title: string;
  speaker: string;
}

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
  isPast?: boolean;
  isOverdue?: boolean;
  imageAccentColor?: string; // CSS-based color styling
  imageUrl?: string;
  reviewImages?: string[]; // 4 premium review/atmosphere images
  time?: string; // e.g. "10:00 AM — 12:00 PM"
  agenda?: AgendaItem[];
  whoShouldAttend?: string[];
  highlights?: string[];
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

export interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  role: string;
  company?: string;
  rating: number; // 5
  comment: string;
  date: string;
}

export type ActivePage = 'home' | 'discover' | 'single-event' | 'submit' | 'about';

export interface FilterState {
  city: string;
  dateRange: string;
  pricing: 'all' | 'free' | 'paid';
  sort: 'date-asc' | 'date-desc' | 'price-asc' | 'price-desc';
}
