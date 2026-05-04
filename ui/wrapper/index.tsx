import React from "react";
interface CardWrapperProps {
  children: React.ReactNode;
  isHero?: boolean;
}
const CardWrapper = ({ children, isHero }: CardWrapperProps) => {
  return (
    <div
      style={{
        background: `var(--gradient-hero), url('/images/bg-pattern.svg')`,
        backgroundBlendMode: "overlay", // or 'multiply', 'soft-light'
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`px-4 md:px-8 lg:px-33.75 ${isHero ? "pt-6 md:pt-9 pb-20" : ""}`}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
