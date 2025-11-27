'use client';

import { useState } from 'react';
import Button from '@/components/ui/button';

type Props = {
  onSuccess?: () => void;
  variant?: 'modal' | 'page';
  prefillService?: string | undefined;
};

const SERVICE_OPTIONS = ['Web', 'Mobile', 'Branding', 'Cloud', 'Security', 'Other'] as const;
const BUDGET_OPTIONS = ['< $5k', '$5k – $10k', '$10k – $25k', '$25k – $50k', '$50k+'] as const;
const TIMELINE_OPTIONS = ['ASAP', 'Within a month', '1–3 months', 'Not sure'] as const;
const CONTACT_METHODS = ['Email', 'Phone', 'WhatsApp'] as const;

export default function RequestProjectForm({ onSuccess, variant = 'page', prefillService }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    projectName: '',
    services: prefillService ? [prefillService] : ([] as string[]),
    budget: '',
    startTimeline: '',
    details: '',
    references: '',
    contactMethod: 'Email',
    phone: '',
    privacy: false,
  });

  const setField = (k: string, v: any) => setValues((s) => ({ ...s, [k]: v }));
  const markTouched = (k: string) => setTouched((s) => ({ ...s, [k]: true }));

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
  const required = {
    fullName: values.fullName.trim().length > 1,
    email: emailValid,
    projectName: values.projectName.trim().length > 1,
    details: values.details.trim().length >= 20,
    privacy: values.privacy,
  };
  const formValid = Object.values(required).every(Boolean);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ fullName: true, email: true, projectName: true, details: true, privacy: true });
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
            placeholder="John Doe"
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
          <label className="block text-white mb-2">Company (optional)</label>
          <input
            className="w-full bg-white/5 border border-[#913BFF]/30 text-white rounded px-4 py-3 outline-none focus:border-[#913BFF]"
            placeholder="Your Company"
            value={values.company}
            onChange={(e) => setField('company', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-white mb-2">Role (optional)</label>
          <input
            className="w-full bg-white/5 border border-[#913BFF]/30 text-white rounded px-4 py-3 outline-none focus:border-[#913BFF]"
            placeholder="Product Manager, Founder..."
            value={values.role}
            onChange={(e) => setField('role', e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-white mb-2">Project Name</label>
        <input
          className="w-full bg-white/5 border border-[#913BFF]/30 text-white rounded px-4 py-3 outline-none focus:border-[#913BFF]"
          placeholder="New Website Revamp"
          value={values.projectName}
          onChange={(e) => setField('projectName', e.target.value)}
          onBlur={() => markTouched('projectName')}
        />
        {touched.projectName && !required.projectName && (
          <p className="text-red-400 text-sm mt-1">Please enter your project name.</p>
        )}
      </div>

      <div>
        <label className="block text-white mb-2">Services Needed</label>
        <div className="flex flex-wrap gap-3">
          {SERVICE_OPTIONS.map((s) => {
            const checked = values.services.includes(s);
            return (
              <label key={s} className={`px-4 py-2 rounded-full border cursor-pointer ${checked ? 'bg-[#913BFF]/20 border-[#913BFF]' : 'bg-white/5 border-[#913BFF]/30'} text-white`}>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={checked}
                  onChange={() =>
                    setField(
                      'services',
                      checked ? values.services.filter((x) => x !== s) : [...values.services, s]
                    )
                  }
                />
                {s}
              </label>
            );
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white mb-2">Estimated Budget</label>
          <select
            className="w-full appearance-none dark-select rounded px-4 py-3"
            value={values.budget}
            onChange={(e) => setField('budget', e.target.value)}
          >
            <option value="">Select range</option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-white mb-2">Start Timeline</label>
          <select
            className="w-full appearance-none dark-select rounded px-4 py-3"
            value={values.startTimeline}
            onChange={(e) => setField('startTimeline', e.target.value)}
          >
            <option value="">Choose</option>
            {TIMELINE_OPTIONS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-white mb-2">Project Details</label>
        <textarea
          rows={5}
          className="w-full bg-white/5 border border-[#913BFF]/30 text-white rounded px-4 py-3 outline-none focus:border-[#913BFF]"
          placeholder="Tell us about goals, scope, features…"
          value={values.details}
          onChange={(e) => setField('details', e.target.value)}
          onBlur={() => markTouched('details')}
        />
        {touched.details && !required.details && (
          <p className="text-red-400 text-sm mt-1">Please add at least 20 characters.</p>
        )}
      </div>

      <div>
        <label className="block text-white mb-2">Reference Links (optional)</label>
        <input
          className="w-full bg-white/5 border border-[#913BFF]/30 text-white rounded px-4 py-3 outline-none focus:border-[#913BFF]"
          placeholder="Website, Figma, GitHub..."
          value={values.references}
          onChange={(e) => setField('references', e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white mb-2">Preferred Contact</label>
          <select
            className="w-full appearance-none dark-select rounded px-4 py-3"
            value={values.contactMethod}
            onChange={(e) => setField('contactMethod', e.target.value)}
          >
            {CONTACT_METHODS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        {(values.contactMethod === 'Phone' || values.contactMethod === 'WhatsApp') && (
          <div>
            <label className="block text-white mb-2">Phone (optional)</label>
            <input
              className="w-full bg-white/5 border border-[#913BFF]/30 text-white rounded px-4 py-3 outline-none focus:border-[#913BFF]"
              placeholder="+1 555 123 4567"
              value={values.phone}
              onChange={(e) => setField('phone', e.target.value)}
            />
          </div>
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
        icon={submitting ? '' : '🚀'}
      >
        {submitting ? 'Submitting…' : 'Submit Request'}
      </Button>
</div>
    </form>
  );
}


