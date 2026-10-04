"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RrRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// Scroll-reveal list item; the content itself stays server-rendered.
export default function RrReveal({ children, delay = 0, className }: RrRevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <li className={className}>{children}</li>;
  return (
    <motion.li
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.li>
  );
}
