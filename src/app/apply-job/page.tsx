import ApplyJobForm from '@/components/applyJob/ApplyJobForm';

export default function ApplyJobPage() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050D36] via-[#0A1A4A] to-[#1A0B4E]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#913BFF]/10 via-transparent to-[#104CBA]/10" />
      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
        <p className="text-[#777C90] mb-10 max-w-2xl">
          Share your details and experience—our team will reach out if there’s a match.
        </p>
        <ApplyJobForm variant="page" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050D36] to-transparent" />
    </section>
  );
}


