'use client'; 

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-all";
  const variants = {
    primary: "w-40 border border-primary-purple bg-background text-primary-purple hover:bg-primary-purple hover:text-background ",
    secondary: "bg-gray-700 text-white hover:bg-gray-800",
    outline: "border border-gray-500 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;