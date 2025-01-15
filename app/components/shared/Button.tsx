import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({children }) => {
  return (
    <button
      className="px-8 py-5 bg-gray-800 rounded border border-gray-800 border-solid max-md:px-5 text-[13px]"
      tabIndex={0}
    >
      {children}
    </button>
  );
};

export default Button;
