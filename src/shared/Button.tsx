/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, memo } from "react";

type ButtonType = "primary" | "secondary";
type ButtonShape = "outlined" | "filled";

interface Props {
  label: string;
  className?: string;
  type?: ButtonType;
  shape?: ButtonShape;
  onClick?: any;
}

const Button: FC<Props> = ({ label, className, type, shape, onClick }) => {
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
      onClick={onClick}
      className={`bg-primary-dark border px-8 py-3 shadow-lg tracking-widest font-bold text-lg rounded-lg uppercase cursor-pointer ${buttonClass} ${className}`}
    >
      {label}
    </div>
  );
};

Button.defaultProps = {
  type: "primary",
  shape: "filled",
  onClick: () => {},
};

export default memo(Button);
