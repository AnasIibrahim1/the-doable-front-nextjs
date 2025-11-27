export interface PricingPlan {
  name: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  description: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 100,
    currency: '$',
    period: 'monthly',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 3 projects',
      'Basic web development',
      'Email support',
      'Monthly reporting',
      'Basic SEO optimization',
    ],
    buttonText: 'Get Started',
  },
  {
    name: 'Medium',
    price: 500,
    currency: '$',
    period: 'monthly', 
    description: 'Ideal for growing businesses',
    features: [
      'Up to 10 projects',
      'Advanced web development',
      'Priority support',
      'Weekly reporting',
      'Advanced SEO optimization',
      'Social media integration',
      'Custom analytics dashboard',
    ],
    popular: true,
    buttonText: 'Most Popular',
  },
  {
    name: 'Advance',
    price: 800,
    currency: '$',
    period: 'monthly',
    description: 'For enterprise-level solutions',
    features: [
      'Unlimited projects',
      'Full-stack development',
      '24/7 dedicated support',
      'Daily reporting',
      'Enterprise SEO suite',
      'Multi-platform integration',
      'Custom development',
      'Dedicated account manager',
    ],
    buttonText: 'Contact Sales',
  },
];
