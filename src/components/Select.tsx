import { SelectHTMLAttributes } from "react";

interface ISelect {
  label?: string;
  error?: string;
}

export const Select = ({
  label,
  className,
  error,
  ...props
}: ISelect & SelectHTMLAttributes<any>) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={props.id} className="text-xs font-medium tracking-wide">
          {label}
        </label>
      )}
      <select
        className={`${className} text-gray-800 p-2 outline-none w-full border-2 select-none border-gray-300 bg-gray-50 rounded text-sm focus:border-blue-500`}
        {...props}
      ></select>
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};
