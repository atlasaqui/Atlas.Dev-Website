"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function ProfileMotion({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return <motion.div className="profile-motion" initial={false}
    whileInView={reduced ? undefined : { y: [8, 0] }}
    viewport={{ once: true, amount: "some" }} transition={{ duration: 0.4 }}>
    {children}
  </motion.div>;
}
