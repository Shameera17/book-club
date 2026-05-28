import Image from "next/image";
import React from "react";
interface CardWrapperProps {
  children: React.ReactNode;
  isHero?: boolean;
  isPatternBackground?: boolean;
  className1?: string;
  className2?: React.HTMLAttributes<HTMLDivElement>["className"];
  id?: string;
}

const background = {
  background: `url('/images/bg-pattern.svg'), var(--color-neutral-100)`,
  // backgroundBlendMode: "overlay", // or 'multiply', 'soft-light' depending on the desired effect
  backgroundSize: "cover",
  backgroundPosition: "center",
};
export const CardWrapper = ({
  children,
  isHero,
  isPatternBackground,
  className1,
  className2,
  id,
}: CardWrapperProps) => {
  return (
    <div
      id={id}
      style={{
        height: "max-content",
        position: "relative",
        ...(isPatternBackground && background),
      }}
      className={`px-4 min-[768px]:px-8 min-[1440px]:px-33.75 ${isHero ? "pt-6 md:pt-9 pb-20" : ""} ${className1}`}
    >
      <div className={`h-max max-w-293.5 mx-auto relative z-10 ${className2} `}>
        {children}
      </div>
      {isHero && (
        <Image
          src="/images/glow-bg.svg"
          alt="pattern-hero"
          className="absolute right-0 bottom-0 z-0 pointer-events-none"
          width={684}
          height={684}
        />
      )}
    </div>
  );
};
export const CardWrapper1 = ({
  children,
  isPatternBackground,
  className1,
}: Omit<CardWrapperProps, "isHero">) => {
  return (
    <div
      style={{
        height: "max-content",
        ...(isPatternBackground && background),
      }}
      className={`py-16 md:py-20 px-4 lg:px-15 md:px-8 ${className1 || ""}`}
    >
      <div className="h-max">{children}</div>
    </div>
  );
};
