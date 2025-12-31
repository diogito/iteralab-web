'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <motion.div
      className={`font-display font-bold text-xl tracking-tight flex items-center ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <span className="text-zinc-900 dark:text-white">
        Iteralab
      </span>
      <motion.span
        className="text-emerald-500 ml-0.5"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        .
      </motion.span>
    </motion.div>
  );
}
