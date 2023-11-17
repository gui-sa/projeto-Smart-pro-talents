"use client";

type InputProps = {
  type?: "text" | "email" | "password" | "date" | "number";
  label?: string;
  required?: boolean;
  placeholder?: string;
  WidthHalf?: boolean;
  className?: string;
  value?: any;
  setValue?: (value: any) => void;
  input?: "input" | "textarea";
};

export default function Input({
  type = "text",
  label,
  required,
  placeholder,
  className = "",
  value,
  input = "input",
  setValue,
}: InputProps) {
  return (
    <>
      <div className={` flex flex-col ${className}`}>
        <label className="mb-4" htmlFor={label}>
          <p className="text-xl">
            {label}
            <span className="ml-2 text-xl text-primaryGrayLight">
              {required && "*"}
            </span>
          </p>
        </label>

        {input === "input" && (
          <input
            autoComplete="off"
            id={label}
            type={type}
            value={value}
            onChange={(e) => setValue?.(e.target.value)}
            className={`h-[71px] w-full bg-primaryDark py-6 pl-5 `}
            placeholder={placeholder}
            required={required}
          />
        )}
        {input === "textarea" && (
          <textarea
            autoComplete="off"
            id={label}
            value={value}
            onChange={(e) => setValue?.(e.target.value)}
            className={`h-[71px] w-full  bg-primaryDark pl-5 pt-4  `}
            placeholder={placeholder}
            required={required}
          />
        )}
      </div>
    </>
  );
}
