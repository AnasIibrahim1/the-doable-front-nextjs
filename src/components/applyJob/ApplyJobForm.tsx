'use client';

import { useState } from 'react';
import Button from '@/components/ui/button';

type Props = {
  onSuccess?: () => void;
  variant?: 'modal' | 'page';
};

const ROLES = ['Frontend Engineer', 'Backend Engineer', 'Full‑Stack', 'UI/UX Designer', 'Project Manager', 'Other'] as const;
const EXPERIENCE = ['Intern', 'Junior (0–2y)', 'Mid (2–5y)', 'Senior (5y+)', 'Lead'] as const;

export default function ApplyJobForm({ onSuccess, variant = 'page' }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    portfolio: '',
    linkedin: '',
    coverLetter: '',
    privacy: false,
  });

  const setField = (k: string, v: any) => setValues((s) => ({ ...s, [k]: v }));
  const markTouched = (k: string) => setTouched((s) => ({ ...s, [k]: true }));

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
  const required = {
    fullName: values.fullName.trim().length > 1,
    email: emailValid,
    role: values.role.length > 0,
    coverLetter: values.coverLetter.trim().length >= 20,
    privacy: values.privacy,
  };
  const formValid = Object.values(required).every(Boolean);

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setTouched({ fullName: true, email: true, role: true, coverLetter: true, privacy: true });
    if (!formValid) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    onSuccess?.();
  };

  const isModal = variant === 'modal';

  return (
    <form onSubmit={submit} className={`${isModal ? '' : 'max-w-3xl mx-auto'} space-y-6`}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white mb-2">Full Name</label>
          <input
            className="w-full bg-white/5 border border-[#913BFF]/30 text-white rounded px-4 py-3 outline-none focus:border-[#913BFF]"
            placeholder="Jane Doe"
            value={values.fullName}
            onChange={(e) => setField('fullName', e.target.value)}
            onBlur={() => markTouched('fullName')}
          />
          {touched.fullName && !required.fullName && (
            <p className="text-red-400 text-sm mt-1">Please enter your name.</p>
          )}
        </div>
        <div>
          <label className="block text-white mb-2">Email</label>
          <input
            type="email"
            className="w-full bg-white/5 border border-[#913BFF]/30 text-white rounded px-4 py-3 outline-none focus:border-[#913BFF]"
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => setField('email', e.target.value)}
            onBlur={() => markTouched('email')}
          />
          {touched.email && !required.email && (
            <p className="text-red-400 text-sm mt-1">Please enter a valid email.</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white mb-2">Phone (optional)</label>
          <input
            className="w-full bg-white/5 border border-[#913BFF]/30 text-white rounded px-4 py-3 outline-none focus:border-[#913BFF]"
            placeholder="+1 555 123 4567"
            value={values.phone}
            onChange={(e) => setField('phone', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-white mb-2">Role</label>
          <select
            className="w-full appearance-none dark-select rounded px-4 py-3"
            value={values.role}
            onChange={(e) => setField('role', e.target.value)}
            onBlur={() => markTouched('role')}
          >
            <option value="">Select a role</option>
            {ROLES.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          {touched.role && !required.role && (
            <p className="text-red-400 text-sm mt-1">Please select a role.</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white mb-2">Experience Level</label>
          <select
            className="w-full appearance-none dark-select rounded px-4 py-3"
            value={values.experience}
            onChange={(e) => setField('experience', e.target.value)}
          >
            <option value="">Choose level</option>
            {EXPERIENCE.map((x) => (
              <option key={x} value={x}>{x}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-white mb-2">Portfolio (optional)</label>
          <input
            className="w-full bg-white/5 border border-[#913BFF]/30 text-white rounded px-4 py-3 outline-none focus:border-[#913BFF]"
            placeholder="Website, GitHub, Behance..."
            value={values.portfolio}
            onChange={(e) => setField('portfolio', e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-white mb-2">LinkedIn (optional)</label>
        <input
          className="w-full bg-white/5 border border-[#913BFF]/30 text-white rounded px-4 py-3 outline-none focus:border-[#913BFF]"
          placeholder="https://linkedin.com/in/username"
          value={values.linkedin}
          onChange={(e) => setField('linkedin', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-white mb-2">Cover Letter</label>
        <textarea
          rows={5}
          className="w-full bg-white/5 border border-[#913BFF]/30 text-white rounded px-4 py-3 outline-none focus:border-[#913BFF]"
          placeholder="Tell us why you’re a great fit…"
          value={values.coverLetter}
          onChange={(e) => setField('coverLetter', e.target.value)}
          onBlur={() => markTouched('coverLetter')}
        />
        {touched.coverLetter && !required.coverLetter && (
          <p className="text-red-400 text-sm mt-1">Please add at least 20 characters.</p>
        )}
      </div>

      <label className="flex items-center gap-3 text-white/90">
        <input
          type="checkbox"
          checked={values.privacy}
          onChange={(e) => setField('privacy', e.target.checked)}
        />
        I agree to the Privacy Policy
      </label>
      {touched.privacy && !required.privacy && (
        <p className="text-red-400 text-sm -mt-2">Please accept the privacy policy.</p>
      )}

      <div className='flex justify-center'>
        <Button
          onClick={submit as unknown as () => void}
          disabled={submitting}
          variant="primary"
          size="md"
          icon={submitting ? '' : '📨'}
        >
          {submitting ? 'Submitting…' : 'Apply Now'}
        </Button>
      </div>
    </form>
  );
}


