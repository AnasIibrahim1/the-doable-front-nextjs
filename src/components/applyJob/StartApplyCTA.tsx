'use client';

import { useState } from 'react';
import ApplyJobModal from './ApplyJobModal';
import Button from '@/components/ui/button';

type Props = {
  label?: string;
  className?: string;
};

export default function StartApplyCTA({ label = 'Apply for a Job', className = '' }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="primary"
        size="lg"
        icon="💼"
        floating
        className={className}
      >
        {label}
      </Button>
      <ApplyJobModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}


