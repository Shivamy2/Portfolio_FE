import { FC, memo } from "react";

type ButtonType = "primary" | "secondary";
type ButtonShape = "outlined" | "filled";

interface Props {
  label: string;
  className?: string;
  type?: ButtonType;
  shape?: ButtonShape;
}

const Button: FC<Props> = ({ label, className, type, shape }) => {
  const buttonClass =
    shape === "filled"
      ? type === "primary"
        ? "bg-primary-dark text-on-primary"
        : "bg-secondary-dark text-white"
      : type === "primary"
        ? "border-primary-dark bg-primary-light text-black"
        : "border-secondary-dark bg-secondary-light text-black";
  return (
    <div
      className={`bg-primary-dark border max-w-min px-8 py-3 shadow-lg tracking-widest font-bold text-lg rounded-lg uppercase ${buttonClass} ${className}`}
    >
      {label}
    </div>
  );
};

Button.defaultProps = {
  type: "primary",
  shape: "filled",
};

export default memo(Button);
