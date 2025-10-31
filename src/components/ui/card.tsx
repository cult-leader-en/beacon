import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-white/30", className)}>
      {children}
    </div>
  );
}

export function CardContent({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("p-8", className)}>{children}</div>;
}
