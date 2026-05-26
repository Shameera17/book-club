import React from "react";
interface CardWrapperProps {
  children: React.ReactNode;
  isHero?: boolean;
  isPatternBackground?: boolean;
  className?: string;
}
const background = {
  background: `var(--gradient-hero), url('/images/bg-pattern.svg')`,
  backgroundBlendMode: "overlay", // or 'multiply', 'soft-light'
  backgroundSize: "cover",
  backgroundPosition: "center",
};
export const CardWrapper = ({
  children,
  isHero,
  isPatternBackground,
}: CardWrapperProps) => {
  return (
    <div
      style={{
        height: "max-content",
        ...(isPatternBackground && background),
      }}
      className={`px-4 md:px-8 lg:px-33.75 ${isHero ? "pt-6 md:pt-9 pb-20" : ""}`}
    >
      <div className="h-max">{children}</div>
    </div>
  );
};
export const CardWrapper1 = ({
  children,
  isPatternBackground,
  className,
}: Omit<CardWrapperProps, "isHero">) => {
  return (
    <div
      style={{
        height: "max-content",
        ...(isPatternBackground && background),
      }}
      className={`py-16 md:py-20 px-4 lg:px-15 md:px-8 ${className || ""}`}
    >
      <div className="h-max">{children}</div>
    </div>
  );
};
