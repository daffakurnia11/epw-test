const Button: React.FC<{
  size: "small" | "medium" | "large";
  type: "primary" | "secondary" | "text";
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}> = ({ size, type, leftIcon, rightIcon, label }) => {
  return (
    <button className="bg-secondary-50 py-3 px-12 rounded-full">Button</button>
  );
};

export default Button;
