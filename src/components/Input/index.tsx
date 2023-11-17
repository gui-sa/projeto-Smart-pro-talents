"use client";
import { useState } from "react";

type InputProps = {
  type?: "text" | "email" | "password" | "date";
  label?: string;
  required?: boolean;
  placeholder?: string;
  WidthHalf?: boolean;

  value?: any;
  setValue?: (value: any) => void;
};

export default function Input({
  type = "text",
  label,
  required,
  placeholder,
  WidthHalf = false,
  value,
  setValue,
}: InputProps) {
  const typeWidthHalf = WidthHalf ? "w-1/2" : "w-full";
  return (
    <>
      <div className={` flex w-full  flex-col ${typeWidthHalf}`}>
        <label className="mb-4" htmlFor={label}>
          <p className="text-xl">
            {label}
            <span className="text-primaryGrayLight ml-2 text-xl">
              {required && "*"}
            </span>
          </p>
        </label>

        <input
          autoComplete="off"
          id={type}
          type={type}
          value={value}
          onChange={(e) => setValue?.(e.target.value)}
          className={`h-[71px] w-full bg-primaryDark py-6 pl-5 `}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
