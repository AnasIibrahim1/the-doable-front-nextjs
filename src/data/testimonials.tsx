export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'TheDoable has transformed our business with their innovative IT solutions. Their team is professional, skilled, and always ready to help.',
    author: 'Wade Warren',
    role: 'CEO, Company Name',
    rating: 4.5,
  },
  {
    quote: 'Excellent service and outstanding results. Highly recommend TheDoable for any IT needs.',
    author: 'John Smith',
    role: 'CTO, Tech Corp',
    rating: 5,
  },
  {
    quote: 'Professional team with cutting-edge solutions. They exceeded our expectations.',
    author: 'Sarah Johnson',
    role: 'Director, Digital Inc',
    rating: 4.5,
  },
];
