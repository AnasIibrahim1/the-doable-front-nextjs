'use client';

import { motion, AnimatePresence } from 'framer-motion';
import ApplyJobForm from './ApplyJobForm';
import Button from '@/components/ui/button';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ApplyJobModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.div
            className="relative z-10 w-full max-w-3xl mx-auto bg-[#0B1542]/95 border border-[#913BFF]/30 rounded-2xl p-6 max-h-[80vh] overflow-y-auto scrollbar-hide"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-xl font-semibold">Apply for a Job</h3>
              <Button onClick={onClose} variant="ghost" size="sm" className="!py-1 !px-3">✕</Button>
            </div>
            <ApplyJobForm variant="modal" onSuccess={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


