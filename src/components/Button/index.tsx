type ButtonProps = {
  children: string;
  className?: string;
  cor?: "green" | "blue";
  type?: "button" | "submit";
};

export default function Button({
  children,
  className,
  cor = "green",
  type,
}: ButtonProps) {
  const color = cor === "green" ? "bg-primaryGreen" : "bg-primaryBlue";
  return (
    <>
      <button
        type={type}
        className={`flex w-80 max-w-full items-center justify-center rounded  p-3 text-2xl ${className} ${color}`}
      >
        {children}
      </button>
    </>
  );
}
