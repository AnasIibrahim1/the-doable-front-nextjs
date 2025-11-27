'use client';
import Link from "next/link";
import { useState, useLayoutEffect } from "react";

/**
 * Custom hook to handle hydration issues with SSR
 * Prevents hydration mismatches by delaying client-side rendering
 * 
 * @returns {boolean} Whether the component is hydrated
 */
function useHydration(): boolean {
  const [isHydrated, setIsHydrated] = useState(false);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setIsHydrated(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return isHydrated;
}

/**
 * Interactive header component with mobile menu and search functionality
 * Features:
 * - Responsive navigation
 * - Mobile menu with overlay
 * - Search functionality
 * - Language switching
 * - Accessibility support
 * 
 * @returns {JSX.Element} The interactive header component
 */
function InteractiveHeader() {
  const [isEnglish, setIsEnglish] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    if (!isLanguageDropdownOpen) {
      setIsSearchOpen(false);
    }
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsSearchOpen(false);
      setIsLanguageDropdownOpen(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMobileMenu();
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setIsMobileMenuOpen(false);
      setIsLanguageDropdownOpen(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      {/* Right side icons */}
      <div className="flex items-center gap-4">
        {/* Search Icon - Hidden on mobile */}
        <button 
          onClick={toggleSearch}
          className="hidden md:flex w-10 h-10 rounded-full bg-gradient-to-br from-white/20 via-[#913BFF]/30 to-[#050D36]/40 hover:from-[#913BFF]/40 hover:via-[#913BFF]/50 hover:to-[#913BFF]/60 text-white hover:text-white transition-all duration-300 items-center justify-center shadow-lg hover:shadow-[#913BFF]/25"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Language Toggle - Hidden on mobile */}
        <div className="hidden md:block relative">
          <button 
            onClick={toggleLanguageDropdown}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 via-[#913BFF]/30 to-[#050D36]/40 hover:from-[#913BFF]/40 hover:via-[#913BFF]/50 hover:to-[#913BFF]/60 text-white hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-[#913BFF]/25"
            title="Select Language"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </button>

          {/* Language Dropdown */}
          <div className={`absolute top-full right-0 mt-2 w-48 bg-gradient-to-br from-[#050D36]/95 to-[#913BFF]/20 backdrop-blur-md border border-[#913BFF]/30 rounded-lg shadow-2xl transition-all duration-300 ease-in-out transform ${
            isLanguageDropdownOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-2 invisible'
          }`}>
            <div className="py-2">
              <button
                onClick={() => {
                  if (!isEnglish) {
                    setIsEnglish(true);
                    setIsLanguageDropdownOpen(false);
                  }
                }}
                className={`w-full px-4 py-3 text-left text-sm transition-all duration-200 flex items-center gap-3 ${
                  isEnglish 
                    ? 'text-[#913BFF] bg-[#913BFF]/10' 
                    : 'text-white hover:text-[#913BFF] hover:bg-white/10'
                }`}
              >
                <span className="text-lg">🇺🇸</span>
                <span className="font-medium">English</span>
                {isEnglish && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => {
                  if (isEnglish) {
                    setIsEnglish(false);
                    setIsLanguageDropdownOpen(false);
                  }
                }}
                className={`w-full px-4 py-3 text-left text-sm transition-all duration-200 flex items-center gap-3 ${
                  !isEnglish 
                    ? 'text-[#913BFF] bg-[#913BFF]/10' 
                    : 'text-white hover:text-[#913BFF] hover:bg-white/10'
                }`}
              >
                <span className="text-lg">🇸🇦</span>
                <span className="font-medium">العربية</span>
                {!isEnglish && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button - Only visible on mobile */}
        <button 
          onClick={toggleMobileMenu}
          onKeyDown={handleKeyDown}
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden w-10 h-10 rounded-full bg-gradient-to-br from-white/20 via-[#913BFF]/30 to-[#050D36]/40 hover:from-[#913BFF]/40 hover:via-[#913BFF]/50 hover:to-[#913BFF]/60 text-white hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-[#913BFF]/25"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Search Dropdown */}
      <div className={`absolute top-full left-0 right-0 bg-gradient-to-br from-[#050D36]/95 to-[#913BFF]/10 backdrop-blur-md border-b border-[#913BFF]/20 shadow-2xl transition-all duration-300 ease-in-out transform ${
        isSearchOpen 
          ? 'opacity-100 translate-y-0 visible' 
          : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, services..."
                className="w-full px-4 py-3 pl-12 bg-white/10 border border-[#913BFF]/30 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#913BFF]/50 focus:border-[#913BFF]/50 transition-all duration-300 text-sm"
                autoFocus
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-[#913BFF] to-[#913BFF]/80 text-white rounded-full hover:from-[#913BFF]/80 hover:to-[#913BFF] transition-all duration-300 text-sm font-medium"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-black/70 via-[#050D36]/60 to-[#913BFF]/30 backdrop-blur-lg transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
        
        {/* Menu Panel */}
        <div 
          id="mobile-menu"
          className={`absolute top-0 right-0 h-screen w-80 bg-gradient-to-br from-[#050D36] via-[#0A1A4A] to-[#913BFF]/40 backdrop-blur-2xl border-l border-[#913BFF]/50 shadow-2xl transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="navigation"
          aria-labelledby="mobile-menu-title"
        >
          <div className="h-full flex flex-col p-6 relative overflow-y-auto scrollbar-hide">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-30"></div>
            
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8 relative z-10">
              <h2 id="mobile-menu-title" className="text-xl font-bold text-white">Menu</h2>
              <button
                onClick={toggleMobileMenu}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 hover:from-[#913BFF]/30 hover:to-[#913BFF]/20 text-white hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-[#913BFF]/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-3 relative z-10 flex-1">
              <Link 
                href="/" 
                className="block px-4 py-3 text-white hover:text-[#913BFF] hover:bg-gradient-to-r hover:from-white/10 hover:to-[#913BFF]/10 rounded-lg transition-all duration-300 border border-transparent hover:border-[#913BFF]/20"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-3 text-white hover:text-[#913BFF] hover:bg-gradient-to-r hover:from-white/10 hover:to-[#913BFF]/10 rounded-lg transition-all duration-300 border border-transparent hover:border-[#913BFF]/20"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-3 text-white hover:text-[#913BFF] hover:bg-gradient-to-r hover:from-white/10 hover:to-[#913BFF]/10 rounded-lg transition-all duration-300 border border-transparent hover:border-[#913BFF]/20"
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
              <Link 
                href="/projects" 
                className="block px-4 py-3 text-white hover:text-[#913BFF] hover:bg-gradient-to-r hover:from-white/10 hover:to-[#913BFF]/10 rounded-lg transition-all duration-300 border border-transparent hover:border-[#913BFF]/20"
                onClick={toggleMobileMenu}
              >
                Projects
              </Link>
              <Link 
                href="/team" 
                className="block px-4 py-3 text-white hover:text-[#913BFF] hover:bg-gradient-to-r hover:from-white/10 hover:to-[#913BFF]/10 rounded-lg transition-all duration-300 border border-transparent hover:border-[#913BFF]/20"
                onClick={toggleMobileMenu}
              >
                Team
              </Link>
              <Link 
                href="/blog" 
                className="block px-4 py-3 text-white hover:text-[#913BFF] hover:bg-gradient-to-r hover:from-white/10 hover:to-[#913BFF]/10 rounded-lg transition-all duration-300 border border-transparent hover:border-[#913BFF]/20"
                onClick={toggleMobileMenu}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-white hover:text-[#913BFF] hover:bg-gradient-to-r hover:from-white/10 hover:to-[#913BFF]/10 rounded-lg transition-all duration-300 border border-transparent hover:border-[#913BFF]/20"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Search */}
            <div className="mt-6 pt-6 border-t border-gradient-to-r from-transparent via-white/20 to-transparent relative z-10">
              <h3 className="text-sm font-semibold text-white/80 mb-3">Search</h3>
              <form onSubmit={handleSearch} className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles, services..."
                    className="w-full px-3 py-2.5 pl-10 bg-gradient-to-r from-white/10 to-white/5 border border-[#913BFF]/40 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#913BFF]/50 focus:border-[#913BFF]/50 transition-all duration-300 backdrop-blur-sm text-sm"
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-[#913BFF] to-[#913BFF]/80 text-white rounded-lg hover:from-[#913BFF]/80 hover:to-[#913BFF] transition-all duration-300 shadow-lg hover:shadow-[#913BFF]/25 text-sm font-medium"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Language Toggle in Mobile */}
            <div className="mt-6 pt-6 border-t border-gradient-to-r from-transparent via-white/20 to-transparent relative z-10">
              <h3 className="text-sm font-semibold text-white/80 mb-3">Language</h3>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    if (!isEnglish) {
                      setIsEnglish(true);
                    }
                  }}
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                    isEnglish 
                      ? 'text-[#913BFF] bg-[#913BFF]/10 border border-[#913BFF]/30' 
                      : 'text-white hover:text-[#913BFF] hover:bg-white/10 border border-transparent hover:border-[#913BFF]/30'
                  }`}
                >
                  <span className="text-lg">🇺🇸</span>
                  <span className="font-medium">English</span>
                  {isEnglish && (
                    <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => {
                    if (isEnglish) {
                      setIsEnglish(false);
                    }
                  }}
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                    !isEnglish 
                      ? 'text-[#913BFF] bg-[#913BFF]/10 border border-[#913BFF]/30' 
                      : 'text-white hover:text-[#913BFF] hover:bg-white/10 border border-transparent hover:border-[#913BFF]/30'
                  }`}
                >
                  <span className="text-lg">🇸🇦</span>
                  <span className="font-medium">العربية</span>
                  {!isEnglish && (
                    <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Header() {
  const isMounted = useHydration();

  // Static version for SSR - no interactive elements
  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050D36]/80 backdrop-blur-md border-b border-[#913BFF]/20">
        <div className="max-w-7xl mx-auto max-[1280px]:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-left text-white">
              TheDoable
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-[#913BFF] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-[#913BFF] transition-colors">
                About
              </Link>
              <Link href="/services" className="text-white hover:text-[#913BFF] transition-colors">
                Services
              </Link>
              <Link href="/projects" className="text-white hover:text-[#913BFF] transition-colors">
                Projects
              </Link>
              <Link href="/team" className="text-white hover:text-[#913BFF] transition-colors">
                Team
              </Link>
              <Link href="/blog" className="text-white hover:text-[#913BFF] transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-white hover:text-[#913BFF] transition-colors">
                Contact
              </Link>
            </nav>

            {/* Right side icons - Static version for SSR */}
            <div className="flex items-center gap-4">
              {/* Search Icon - Hidden on mobile */}
              <div className="hidden md:flex w-10 h-10 rounded-full bg-gradient-to-br from-white/20 via-[#913BFF]/30 to-[#050D36]/40 items-center justify-center shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Language Toggle - Hidden on mobile */}
              <div className="hidden md:flex w-10 h-10 rounded-full bg-gradient-to-br from-white/20 via-[#913BFF]/30 to-[#050D36]/40 items-center justify-center shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>

              {/* Mobile Menu Button - Only visible on mobile */}
              <div className="md:hidden w-10 h-10 rounded-full bg-gradient-to-br from-white/20 via-[#913BFF]/30 to-[#050D36]/40 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050D36]/80 backdrop-blur-md border-b border-[#913BFF]/20">
      <div className="max-w-7xl mx-auto max-[1280px]:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-left text-white">
            TheDoable
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-[#913BFF] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#913BFF] transition-colors">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-[#913BFF] transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-white hover:text-[#913BFF] transition-colors">
              Projects
            </Link>
            <Link href="/team" className="text-white hover:text-[#913BFF] transition-colors">
              Team
            </Link>
            <Link href="/blog" className="text-white hover:text-[#913BFF] transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-[#913BFF] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Interactive elements only after hydration */}
          {isMounted && <InteractiveHeader />}
        </div>
      </div>
    </header>
  );
}