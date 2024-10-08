import React from "react";
import clsx from "clsx";

export interface ButtonProps {
  label: string;
  action: string;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  appearance?: "filled" | "outlined" | "ghost";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  label,
  action,
  variant = "primary",
  appearance = "filled",
  size = "medium",
  disabled = false,
  className = "",
  style,
}) => {
  const handleClick = () => {
    console.log(`Running action: ${action}`);
  };

  return (
    <button
      onClick={handleClick}
      style={style}
      className={clsx("button", variant, appearance, size, className, {
        disabled: disabled,
      })}
    >
      {label}
    </button>
  );
};

export default Button;
