type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const color = variant === "light" ? "text-white" : "text-kalam-700";
  return (
    <span
      className={`font-[family-name:var(--font-display)] leading-none tracking-tight ${color} ${className}`}
      aria-label="Kalam"
    >
      Kalam
    </span>
  );
}
