import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  as?: "button" | "a";
  href?: string;
};

export function Button({
  variant = "primary",
  className,
  as = "button",
  href,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "btn",
    {
      primary: "bg-[var(--brand-blue)] text-white border-transparent",
      secondary: "bg-white text-[var(--brand-blue)] border border-[var(--brand-blue)]",
      ghost: "bg-transparent text-[var(--brand-blue)] border border-[var(--brand-blue)]/20",
    }[variant],
    className
  );

  if (as === "a" && href) {
    return (
      <a className={classes} href={href} {...(props as any)}>
        {props.children}
      </a>
    );
  }

  return <button className={classes} {...props} />;
}
