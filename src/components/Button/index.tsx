
type OnClickType = ()=>void;

type ButtonProps = {
  children: string;
  className?: string;
  cor?: "green" | "blue";
  type?: "button" | "submit";
  onClick ?: OnClickType;
};

export default function Button({
  children,
  className,
  cor = "green",
  type,
  onClick,

}: ButtonProps) {
  const color = cor === "green" ? "bg-primaryGreen" : "bg-primaryBlue";
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`flex w-80 max-w-full items-center justify-center rounded  p-3 text-2xl ${className} ${color}`}
      >
        {children}
      </button>
    </>
  );
}
