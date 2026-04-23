"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface IProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  textClass?: string;
}

const CardClassic = ({
  icon,
  title,
  description,
  className,
  textClass,
}: IProps) => {
  return (
    <div
      className={cn("p-8 border rounded-sm hover-lift", className)}
    >
      <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center mb-5">
        {icon && icon}
      </div>
      <h3
        className={cn(
          "font-heading text-2xl font-bold  mb-4",
          textClass ?? "text-[var(--navy)]",
        )}
      >
        {title}
      </h3>
      <p
        className={cn("leading-relaxed", textClass ?? "text-[var(--navy)]/60 ")}
      >
        {description}
      </p>
    </div>
  );
};

export default CardClassic;
