'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/data/articles';
import AnimatedGradients from '@/components/ui/animatedGradients';
import FloatingCircles from '@/components/ui/floatingCircles';
import FloatingStars from '@/components/ui/floatingStars';
import FloatingWord from '@/components/ui/floatingWord';
import ScrollIndicator from '@/components/ui/scrollIndicator';
import Button from '@/components/ui/button';
import dynamic from 'next/dynamic';

const ServicesCTA = dynamic(() => import('@/components/services/servicesCTA'), {
  loading: () => <div className="h-64 animate-pulse bg-[#050D36]/50" />
});

/**
 * Generate URL-friendly slug from text
 * @param text - Text to convert to slug
 * @returns URL-friendly slug
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

/**
 * Find article by slug
 * @param slug - Article slug
 * @returns Article object or null
 */
function findArticleBySlug(slug: string) {
  return articles.find(article => slugify(article.title) === slug) || null;
}

/**
 * Blog article details page component
 * Features:
 * - Hero section with breadcrumbs
 * - Article content with rich formatting
 * - Author information
 * - Related articles
 * - Social sharing
 * - Reading progress indicator
 * 
 * @param params - Route parameters containing slug
 * @returns {React.JSX.Element} The blog details page component
 */
export default function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }): React.JSX.Element {
  const { slug } = use(params);
  const article = findArticleBySlug(slug);
  const [imageError, setImageError] = useState(false);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050D36] to-[#0A1A4A]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-[#9AA0B5] mb-8">The article you're looking for doesn't exist.</p>
          <Button href="/blog" variant="primary" size="lg">
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  // Get related articles (excluding current article)
  const relatedArticles = useMemo(() => 
    articles
      .filter(a => a.title !== article.title)
      .slice(0, 3),
    [article.title]
  );

  // Mock article content - in a real app, this would come from a CMS
  const articleContent = {
    paragraphs: [
      "In today's rapidly evolving digital landscape, staying ahead of the curve is more important than ever. This comprehensive guide explores the latest trends and technologies that are shaping the future of web development, from AI integration to progressive web apps.",
      
      "The web development industry has undergone significant transformation over the past few years. With the introduction of new frameworks, tools, and methodologies, developers now have unprecedented opportunities to create more efficient, scalable, and user-friendly applications.",
      
      "One of the most exciting developments in recent years has been the integration of artificial intelligence into web applications. From chatbots and recommendation systems to automated testing and code generation, AI is revolutionizing how we build and interact with web applications.",
      
      "Progressive Web Apps (PWAs) represent another major shift in web development. These applications combine the best of web and mobile experiences, offering offline functionality, push notifications, and app-like performance while remaining accessible through web browsers.",
      
      "The rise of serverless architecture has also changed the way we think about web development. By abstracting away server management, developers can focus on building features rather than managing infrastructure, leading to faster development cycles and reduced operational overhead.",
      
      "Looking ahead, we can expect to see continued innovation in areas such as WebAssembly, which enables near-native performance in browsers, and Web Components, which promote better code reusability and maintainability across different frameworks and libraries."
    ],
    keyPoints: [
      "AI integration is transforming web development workflows",
      "Progressive Web Apps offer native app-like experiences",
      "Serverless architecture reduces operational complexity",
      "WebAssembly enables near-native browser performance",
      "Web Components promote better code reusability"
    ]
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050D36] via-[#0A1A4A] to-[#1A0B4E]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#913BFF]/10 via-transparent to-[#104CBA]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#913BFF]/20 via-transparent to-transparent" />
        {/* Animated Backgrounds */}
        <AnimatedGradients />
        <FloatingCircles />
        <FloatingStars />
        <FloatingWord word="Articles" />
        
        <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
          {/* Breadcrumbs */}
          <motion.div 
            className="flex items-center justify-center gap-3 text-sm mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            <Link 
              href="/" 
              className="text-[#777C90] hover:text-[#913BFF] transition-all duration-300 hover:scale-110 relative"
            >
              <span className="relative z-10">HOME</span>
              <motion.div
                className="absolute inset-0 bg-[#913BFF]/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <motion.span 
              className="text-[#913BFF] text-lg"
              animate={{ rotate: [0, 180, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              •
            </motion.span>
            <Link 
              href="/blog" 
              className="text-[#777C90] hover:text-[#913BFF] transition-all duration-300 hover:scale-110 relative"
            >
              <span className="relative z-10">BLOG</span>
              <motion.div
                className="absolute inset-0 bg-[#913BFF]/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <motion.span 
              className="text-[#913BFF] text-lg"
              animate={{ rotate: [0, 180, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              •
            </motion.span>
            <motion.span 
              className="text-white font-semibold px-3 py-1 bg-[#913BFF]/20 rounded-full border border-[#913BFF]/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 150 }}
            >
              ARTICLE
            </motion.span>
          </motion.div>

          {/* Title */}
          <motion.div className="relative mb-8">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 relative z-10 text-center"
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.5, type: 'spring', stiffness: 100, damping: 12 }}
            >
              <span className="bg-gradient-to-r from-white via-[#913BFF] to-[#104CBA] bg-clip-text text-transparent bg-300% animate-gradient-x">
                {article.title}
              </span>
            </motion.h1>
            {/* Floating text shadow */}
            <motion.div
              className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-bold text-[#913BFF]/10 blur-sm"
              animate={{ y: [0, -5, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {article.title}
            </motion.div>
          </motion.div>

          {/* Meta Information */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-[#9AA0B5] text-lg">
              By <span className="text-[#913BFF] font-semibold">{article.author}</span> • {article.date}
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="text-[#9AA0B5] text-sm">
                {article.comments} comments
              </span>
              <span className="text-[#9AA0B5] text-sm">•</span>
              <span className="text-[#9AA0B5] text-sm">5 min read</span>
            </div>
          </motion.div>
        </div>

        <ScrollIndicator />

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050D36] to-transparent" />
      </section>

      {/* Article Content */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto max-[1280px]:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <motion.div 
                className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {!imageError ? (
                  <Image
                    src={article.backgroundImage}
                    alt={`${article.title} - Featured image`}
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#913BFF]/20 via-[#104CBA]/20 to-[#913BFF]/30 flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <div className="text-4xl mb-2">📝</div>
                      <div className="text-sm font-medium">Article Image</div>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Article Description */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-xl text-[#9AA0B5] leading-relaxed">
                  {article.description}
                </p>
              </motion.div>

              {/* Article Content */}
              <motion.div 
                className="prose prose-lg prose-invert max-w-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {articleContent.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-[#9AA0B5] leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}

                {/* Key Points */}
                <div className="bg-gradient-to-r from-[#913BFF]/10 to-[#104CBA]/10 rounded-2xl p-8 my-8 border border-[#913BFF]/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Key Takeaways</h3>
                  <ul className="space-y-3">
                    {articleContent.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#913BFF] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#9AA0B5]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Card */}
              <motion.div 
                className="bg-gradient-to-br from-[#050D36] to-[#0A1A4A] rounded-2xl p-6 border border-[#913BFF]/20 mb-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">About the Author</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#913BFF] to-[#104CBA] rounded-full flex items-center justify-center text-white font-bold">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{article.author}</h4>
                    <p className="text-[#9AA0B5] text-sm">Senior Developer</p>
                  </div>
                </div>
                <p className="text-[#9AA0B5] text-sm">
                  Passionate about web development and creating amazing user experiences.
                </p>
              </motion.div>

              {/* Related Articles */}
              <motion.div 
                className="bg-gradient-to-br from-[#050D36] to-[#0A1A4A] rounded-2xl p-6 border border-[#913BFF]/20"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map((relatedArticle) => (
                    <Link 
                      key={relatedArticle.title}
                      href={`/blog/${slugify(relatedArticle.title)}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#913BFF]/20 to-[#104CBA]/20 rounded-lg flex-shrink-0 overflow-hidden">
                          <Image
                            src={relatedArticle.backgroundImage}
                            alt={relatedArticle.title}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white text-sm font-semibold group-hover:text-[#913BFF] transition-colors line-clamp-2">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-[#9AA0B5] text-xs mt-1">
                            {relatedArticle.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ServicesCTA />
    </>
  );
}
