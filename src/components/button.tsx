import { ButtonHTMLAttributes, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

const Button = (
  props: {
    variant: "primary"|"secondary"|"text"|"icon-only";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { variant, className, children, iconAfter, ...rest } = props;
  return (
    <button
      className={twMerge(
        "h-11 px-6 rounded-xl border-red-orange-500 uppercase  items-center border inline-flex gap-2",
        variant === "primary" && "bg-red-orange-500 text-white",
        variant === "secondary" && "",
        variant === "text" && "h-auto px-0 border-transparent",
        variant === "icon-only" && "border-zinc-300",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
