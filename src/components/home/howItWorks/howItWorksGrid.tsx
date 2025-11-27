'use client';

import { steps } from '../../../data/howItWorks';

import HowItWorksStep from './howItWorksStep';

export default function HowItWorksGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {steps.map((step, index) => (
        <HowItWorksStep
          key={index}
          step={step}
          index={index}
        />
      ))}
    </div>
  );
}
