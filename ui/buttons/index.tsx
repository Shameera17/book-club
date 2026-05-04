import Image from "next/image";

interface ButtonProps {
  label: string;
  iconPath?: string;
}
const Button = ({ label, iconPath }: ButtonProps) => {
  return (
    <button className="flex items-center gap-4 text-preset-6 border-2 border-neutral-900 text-neutral-900 px-6 py-3 rounded-lg">
      {label}
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
