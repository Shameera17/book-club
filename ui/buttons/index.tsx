import Image from "next/image";

interface ButtonProps {
  label: string;
  iconPath?: string;
  onClick?: () => void;
  className?: string;
  bgColor?: string;
}
const Button = ({
  label,
  iconPath,
  onClick,
  className,
  bgColor,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4  border-2 border-neutral-900 px-6 py-3 rounded-lg ${className} ${bgColor || "bg-transparent"}`}
    >
      <p className="text-preset-6  text-neutral-900 mx-auto"> {label}</p>

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
