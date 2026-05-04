interface ButtonProps {
  label: string;
  iconPath?: string;
}
const Button = ({ label, iconPath }: ButtonProps) => {
  return (
    <button className="flex gap-4 text-preset-6 border-2 border-neutral-900 text-neutral-900 px-6 py-3 rounded-lg">
      {label}
      {iconPath && (
        <img src={iconPath} alt={`${label} icon`} className="ml-2" />
      )}
    </button>
  );
};

export default Button;
