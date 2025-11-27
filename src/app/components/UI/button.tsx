// components/UI/Button.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props // <-- THIS allows "type", "onClick", etc.
}) => {
  const baseClasses =
    "px-6 py-3 rounded-full font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl",
    secondary:
      "bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-200 hover:bg-dark-200 dark:hover:bg-dark-700",
    outline:
      "border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props} // <-- Spread props AFTER className to allow "type"
    >
      {children}
    </motion.button>
  );
};

export default Button;
