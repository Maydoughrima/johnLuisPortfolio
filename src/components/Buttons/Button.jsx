import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "sm",
  className = "",
  as = "button",
  ...props
}) {
  const baseStyles =
    "text-bodySm font-medium font-body rounded-md flex items-center justify-center cursor-pointer transition-all duration-300";

  const sizes = {
    sm: "px-[12px] py-[8px]",
    md: "px-[16px] py-[10px]",
    lg: "px-[20px] py-[12px]",
    responsive:
      "px-[12px] py-[8px] md:px-[16px] md:py-[10px] lg:px-[20px] lg:py-[12px]",
  };

  const variants = {
    primary: "bg-accent text-white",
    secondary: "bg-white text-[#0A0A0A]",
    ghost: "bg-transparent text-accent border border-text hover:bg-text",
  };

  const Component = as;

  return (
    <Component
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
