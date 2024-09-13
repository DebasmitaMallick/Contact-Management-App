import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classes?: string
}

const defaultClasses = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"

const Button: React.FC<ButtonProps> = ({ classes=defaultClasses, children, ...props }) => {
  return (
    <button
      {...props}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
