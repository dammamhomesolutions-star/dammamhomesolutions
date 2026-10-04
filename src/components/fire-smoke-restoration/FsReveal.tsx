"use client";

import { motion, useReducedMotion } from "framer-motion";

interface FsRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}

// Small scroll-reveal wrapper so section content stays server-rendered.
export default function FsReveal({ children, delay = 0, className, as = "div" }: FsRevealProps) {
  const reduce = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
