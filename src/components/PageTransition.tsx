import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const transition = {
  duration: 0.8,
  ease: [0.83, 0, 0.17, 1]
};

const variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    filter: 'blur(8px)'
  },
  enter: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    filter: 'blur(8px)',
    transition: {
      ...transition,
      duration: 0.6
    }
  }
};

const overlayVariants = {
  initial: {
    scaleX: 1
  },
  enter: {
    scaleX: 0,
    transition: {
      ...transition,
      duration: 0.6
    }
  },
  exit: {
    scaleX: 1,
    transition: {
      ...transition,
      duration: 0.6
    }
  }
};

function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="relative">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
      
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={overlayVariants}
        className="fixed inset-0 bg-black origin-left z-50 pointer-events-none"
      />
    </div>
  );
}

export default PageTransition;