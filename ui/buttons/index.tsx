'use client";';
import Image from "next/image";
import { useState } from "react";

interface ButtonProps {
  label: string;
  iconPath?: string;
  onClick?: () => void;
  className?: string;
  bgColor?: string;
  bgHoverColor?: string;
  borderColor?: string;
  textColor?: string;
}
const Button = ({
  label,
  iconPath,
  onClick,
  className,
  bgColor,
  bgHoverColor,
  borderColor,
  textColor,
}: ButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  // Check if bgColor/bgHoverColor are CSS classes or inline style values
  const isBgColorClass =
    bgColor?.startsWith("bg-") || bgColor?.includes("gradient");
  const isBgHoverColorClass =
    bgHoverColor?.startsWith("bg-") || bgHoverColor?.includes("gradient");

  const inlineStyle =
    (bgColor && !isBgColorClass) || (bgHoverColor && !isBgHoverColorClass)
      ? {
          background: isHover
            ? bgHoverColor && !isBgHoverColorClass
              ? bgHoverColor
              : bgColor || ""
            : bgColor && !isBgColorClass
              ? bgColor
              : "",
        }
      : undefined;

  const bgClasses = isHover && bgHoverColor ? bgHoverColor : bgColor;

  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={inlineStyle}
      onClick={onClick}
      className={`flex  items-center gap-4 w-fit border-2 
        ${borderColor || "border-neutral-900"}
         px-6 py-3 rounded-lg 
         ${bgClasses}
         ${className} 
         cursor-pointer transition-all duration-300`}
    >
      <p
        className={`text-preset-6  ${textColor || "text-neutral-900"} mx-auto`}
      >
        {" "}
        {label}
      </p>

      {iconPath && (
        <Image
          src={iconPath}
          alt={`${label} icon`}
          width={24}
          height={24}
          className="w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
