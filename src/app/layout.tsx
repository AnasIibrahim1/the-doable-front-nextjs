import type { Metadata } from "next";
import { Raleway } from 'next/font/google';
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollToTop from "@/components/ui/scrollToTop";

// Optimize font loading - only load necessary weights
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Only used weights
  display: 'swap',
  preload: true,
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: "TheDoable - Innovative IT Solutions",
  description: "We're an innovative IT solutions company providing web development, design, and digital marketing services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/Stinger-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Stinger-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        
        {/* Preload critical pages */}
        <link rel="preload" href="/about" as="document" />
        <link rel="preload" href="/services" as="document" />
        <link rel="preload" href="/contact" as="document" />
        
        {/* Preload critical images */}
        <link rel="preload" href="/company.jpg" as="image" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//picsum.photos" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        
        {/* Service Worker registration (disabled on localhost/dev to avoid interference) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${raleway.variable} ${raleway.className}`}>
        <ErrorBoundary>
          <main className="container-fluid mx-auto">
            <Header />
            {children}
            <Footer />
          </main>
          <ScrollToTop />
        </ErrorBoundary>
      </body>
    </html>
  );
}
