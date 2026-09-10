import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

const variants = {
  primary: "bg-accent text-accent-foreground hover:bg-accent-strong",
  secondary: "border border-border bg-surface text-foreground hover:border-border-strong hover:bg-surface-raised",
  ghost: "text-foreground hover:bg-surface-raised",
};

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
