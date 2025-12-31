'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

// Variantes para el contenedor principal (hover effect)
const containerVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeOut' as const },
  },
};

// Variantes para el texto "Iteralab" (brillo al hover)
const textVariants = {
  initial: { filter: 'brightness(1)' },
  hover: { filter: 'brightness(1.2)' },
};

// Animación del punto "Vivo" (Respiración constante)
const dotAnimation = {
  scale: [1, 1.25, 1],
  opacity: [1, 0.7, 1],
};

const dotTransition = {
  duration: 2.5,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

export function Logo({ className = '' }: LogoProps) {
  return (
    <motion.div
      className={`font-display font-extrabold text-2xl tracking-tight flex items-baseline cursor-pointer select-none ${className}`}
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
    >
      {/* Texto Principal */}
      <motion.span
        className="text-zinc-900 dark:text-white transition-colors"
        variants={textVariants}
      >
        Iteralab
      </motion.span>

      {/* El Punto Vivo */}
      <motion.span
        className="text-emerald-500 ml-0.5 inline-block origin-center"
        animate={dotAnimation}
        transition={dotTransition}
      >
        .
      </motion.span>
    </motion.div>
  );
}
