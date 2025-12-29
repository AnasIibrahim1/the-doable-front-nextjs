'use client';

import { motion, MotionProps } from 'framer-motion';
import Link from 'next/link';
import { ButtonProps } from '@/types';

/**
 * A reusable button component with multiple variants and animations
 * @param children - Button content
 * @param href - Optional link URL
 * @param variant - Button style variant
 * @param size - Button size
 * @param className - Additional CSS classes
 * @param onClick - Click handler
 * @param disabled - Disabled state
 * @param animate - Enable animations
 * @param icon - Optional icon emoji
 * @param floating - Enable floating animation
 */

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  animate = true,
  icon = '',
  floating = false,
}: ButtonProps): React.JSX.Element {
  // Size classes
  const sizeClasses = {
    sm: 'py-2 px-6 text-sm',
    md: 'py-3 px-8 text-base',
    lg: 'py-4 px-10 text-lg',
  };

  // Enhanced variant classes with new effects
  const variantClasses = {
    primary: `
      group relative bg-gradient-to-r from-[#913BFF] to-[#104CBA] text-white 
      shadow-2xl shadow-[#913BFF]/50 border border-[#913BFF]/30 
      rounded-full font-semibold overflow-hidden
    `,
    secondary: `
      group relative bg-transparent border-2 border-[#913BFF] text-white 
      rounded-full font-semibold hover:bg-[#913BFF]/10 transition-all duration-300 
      overflow-hidden
    `,
    outline: `
      border-2 border-[#913BFF] text-[#913BFF] hover:bg-[#913BFF] 
      hover:text-white rounded-full
    `,
    ghost: `
      text-white hover:bg-white/10 rounded-full
    `,
    custom : `
    bg-[#050d36]
    `
  };

  // Base classes
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-[#913BFF] focus:ring-offset-2
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  // Enhanced motion props
  const motionProps: MotionProps = animate
    ? {
        whileHover: { 
          scale: 1.05,
          y: -8,
          boxShadow: variant === 'primary' 
            ? "0 25px 50px rgba(145, 59, 255, 0.7)"
            : "0 15px 30px rgba(16, 76, 186, 0.4)"
        },
        whileTap: { scale: 0.95 },
        animate: floating ? {
          y: [0, -5, 0],
        } : {},
        transition: floating ? {
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        } : {}
      }
    : {};

  const buttonContent = (
    <>
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#104CBA] to-[#913BFF] opacity-0 group-hover:opacity-100"
          initial={false}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      )}
      {variant === 'secondary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#913BFF]/20 to-[#104CBA]/20"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span>{icon}</span>}
        {children}
      </span>
    </>
  );

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href}>
        <motion.div {...motionProps} className={baseClasses}>
          {buttonContent}
        </motion.div>
      </Link>
    );
  }

  // If onClick is provided, render as button
  if (onClick) {
    return (
      <motion.button
        {...motionProps}
        onClick={onClick}
        disabled={disabled}
        className={baseClasses}
      >
        {buttonContent}
      </motion.button>
    );
  }

  // Default render as div
  return (
    <motion.div {...motionProps} className={baseClasses}>
      {buttonContent}
    </motion.div>
  );
}
