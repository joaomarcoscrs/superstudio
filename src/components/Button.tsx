import React from "react";

export interface ButtonProps {
  label: string;
  action: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ label, action, style }) => {
  const handleClick = () => {
    console.log(`Running action: ${action}`);
    // Here you would typically trigger the action
  };

  return (
    <button onClick={handleClick} style={style} className="rounded bg-gray-300">
      {label}
    </button>
  );
};

export default Button;
