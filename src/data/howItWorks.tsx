import { 
  FaCheckCircle, 
  FaBook, 
  FaShieldAlt, 
  FaQuestionCircle, 
  FaFileAlt 
} from 'react-icons/fa';

export interface HowItWorksStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const steps: HowItWorksStep[] = [
  {
    icon: <FaCheckCircle />,
    title: 'Create Account',
    description: 'Sign up for free and get started',
  },
  {
    icon: <FaBook />,
    title: 'Read Rules',
    description: 'Understand our guidelines and policies',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Ask Problem',
    description: 'Submit your technical challenges',
  },
  {
    icon: <FaQuestionCircle />,
    title: 'Get Solution',
    description: 'Receive expert solutions and support',
  },
  {
    icon: <FaFileAlt />,
    title: 'Well Document',
    description: 'Access comprehensive documentation',
  },
];
