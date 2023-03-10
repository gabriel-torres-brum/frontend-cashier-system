import { InputHTMLAttributes } from "react";

interface IInput {
  label?: string;
  error?: string;
}

export const Input = ({
  label,
  className,
  error,
  ...props
}: IInput & InputHTMLAttributes<any>) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={props.id} className="text-xs font-medium tracking-wide">
          {label}
        </label>
      )}
      <input
        className={`${className} text-gray-800 p-2 outline-none w-full border-2 border-gray-300 bg-gray-50 rounded text-sm focus:border-blue-500`}
        {...props}
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};
