import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="relative pt-32 pb-24 min-h-screen flex items-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050D36] via-[#0A1A4A] to-[#1A0B4E]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#913BFF]/10 via-transparent to-[#104CBA]/10" />

      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10 w-full">
        <div className="text-center">
          <h1 className="text-7xl md:text-8xl font-extrabold text-white mb-4 counter">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-[#777C90] max-w-2xl mx-auto mb-10">
            The page you’re looking for doesn’t exist or was moved. Try going back to the homepage or contact us if you think this is a mistake.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-lg bg-[#913BFF] hover:bg-[#7C2BE0] text-white font-semibold transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-[#913BFF] text-white hover:bg-[#913BFF]/10 font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050D36] to-transparent" />
    </section>
  );
}


