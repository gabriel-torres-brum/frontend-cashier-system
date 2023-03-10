import { ButtonHTMLAttributes } from "react";

interface IButton {}

export const Button = ({ ...props }: IButton & ButtonHTMLAttributes<any>) => {
  return (
    <>
      <button
        className={`${props.className} bg-gray-800 text-white p-2 rounded`}
        {...props}
      >
        {props.children}
      </button>
      <small className="text-xs">{}</small>
    </>
  );
};
