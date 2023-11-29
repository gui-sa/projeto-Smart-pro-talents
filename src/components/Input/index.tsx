/* eslint-disable react/display-name */
"use client";
import {InputHTMLAttributes,forwardRef} from "react";


type InputProp = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  requiredInput?: boolean;
  WidthHalf?: boolean;
  className?: string;
  input?: "input" | "textarea";
  errors?: string | undefined;
};


const Input = forwardRef<HTMLInputElement, InputProp>(({
type = "text",
label,
className = "",
errors: erro,
requiredInput,
WidthHalf,
input,...props} ,  ref) => {
  return (
    <>
      <div className={` flex flex-col ${className}`}>
        <label className="mb-4" htmlFor={label}>
          <p className="text-xl">
            {label}
            <span className="ml-2 text-xl text-primaryGrayLight ">
              {requiredInput && "*"}
            </span>
          </p>
        </label>

        {input === "input" && (
          <input
            ref={ref}
            {...props}
            id={label}
            className={`h-[71px] w-full bg-primaryDark py-6 transition-all pl-5 outline-none focus:bg-zinc-950`}
          />
        )}
        {input === "textarea" && (
          <input
            ref={ref}
            id={label}
            {...props}
            className={`h-[71px] w-full  bg-primaryDark pl-5 pt-4  `}
          />
        )}
        <p className="text-red-500">{erro}</p>
      </div>
    </>
  );

}) 
export default Input
/*
export default function Input({
  type = "text",
  label,
  placeholder,
  className = "",
  errors: erro,
  requiredInput,
  WidthHalf,
  input,...props
}: InputProps) {


  const {register, formState: {errors} } = useFormContext<formTypeCandidato>()

  return (
    <>
      <div className={` flex flex-col ${className}`}>
        <label className="mb-4" htmlFor={label}>
          <p className="text-xl">
            {label}
            <span className="ml-2 text-xl text-primaryGrayLight">
              {requiredInput && "*"}
            </span>
          </p>
        </label>

        {input === "input" && (
          <input
          {...props}
            className={`h-[71px] w-full bg-primaryDark py-6 pl-5 `}
            placeholder={placeholder}
           />
        )}
        {input === "textarea" && (
          <textarea
          {...props}
            className={`h-[71px] w-full  bg-primaryDark pl-5 pt-4  `}
            placeholder={placeholder}
        
          />
        )}
        <p className="text-red-500">{erro}</p>
      </div>
    </>
  );
}
*/