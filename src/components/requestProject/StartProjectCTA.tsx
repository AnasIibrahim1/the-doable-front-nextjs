'use client';

import { useState } from 'react';
import RequestProjectModal from './RequestProjectModal';
import Button from '@/components/ui/button';

type Props = {
  label?: string;
  prefillService?: string;
  className?: string;
};

export default function StartProjectCTA({ label = 'Start Your Project', prefillService, className = '' }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="primary"
        size="lg"
        icon="🚀"
        floating
        className={className}
      >
        {label}
      </Button>
      <RequestProjectModal open={open} onClose={() => setOpen(false)} prefillService={prefillService} />
    </>
  );
}


