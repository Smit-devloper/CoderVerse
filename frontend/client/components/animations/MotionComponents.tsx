import { motion } from "framer-motion";
import { ReactNode } from "react";

// Fade in animation variants
export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Stagger children animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Card hover animation variants
export const cardHoverVariants = {
  idle: { 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  hover: { 
    scale: 1.05,
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Glow animation variants
export const glowVariants = {
  idle: {
    filter: "drop-shadow(0 0 0px currentColor)",
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  },
  glow: {
    filter: [
      "drop-shadow(0 0 10px currentColor)",
      "drop-shadow(0 0 20px currentColor)",
      "drop-shadow(0 0 10px currentColor)"
    ],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

// Floating animation variants
export const floatVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

// Animated wrapper components
interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInWrapper = ({ children, className = "", delay = 0 }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    animate="visible"
    variants={fadeInVariants}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

export const StaggerWrapper = ({ children, className = "" }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
  >
    {children}
  </motion.div>
);

export const HoverCard = ({ children, className = "" }: MotionWrapperProps) => (
  <motion.div
    className={className}
    variants={cardHoverVariants}
    initial="idle"
    whileHover="hover"
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.div>
);

export const GlowingElement = ({ children, className = "" }: MotionWrapperProps) => (
  <motion.div
    className={className}
    variants={glowVariants}
    initial="idle"
    animate="glow"
  >
    {children}
  </motion.div>
);

export const FloatingElement = ({ children, className = "" }: MotionWrapperProps) => (
  <motion.div
    className={className}
    variants={floatVariants}
    animate="float"
  >
    {children}
  </motion.div>
);

// Button animation variants
export const buttonVariants = {
  idle: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: { scale: 0.95 }
};

export const AnimatedButton = ({ children, className = "", onClick }: MotionWrapperProps & { onClick?: () => void }) => (
  <motion.button
    className={className}
    variants={buttonVariants}
    initial="idle"
    whileHover="hover"
    whileTap="tap"
    onClick={onClick}
  >
    {children}
  </motion.button>
);
