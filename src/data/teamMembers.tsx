export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    dribbble?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Savannah Nguyen',
    role: 'Chief Executive',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Jane Cooper',
    role: 'Medical Assistant',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    socialLinks: {
      facebook: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Esther Howard',
    role: 'Nursing Assistant',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Devon Lane',
    role: 'Marketing Coordinator',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Jacob Jones',
    role: 'President of Sales',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Cody Fisher',
    role: 'Dog Trainer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    socialLinks: {
      facebook: '#',
      instagram: '#',
    },
  },
  {
    name: 'Bessie Cooper',
    role: 'Web Designer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    socialLinks: {
      dribbble: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    name: 'Wade Warren',
    role: 'React & Next.js Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Theresa Webb',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
];
