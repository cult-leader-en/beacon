import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all shadow-md",
        "bg-sky-500 hover:bg-sky-600 text-white hover:shadow-lg active:scale-[0.98]",
        className
      )}
      {...props}
    />
  );
}
