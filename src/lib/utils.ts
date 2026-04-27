import { clsx, type ClassValue } from "clsx"
import { AirVent, Cable, Code2, EthernetPort, Headset, Network, Sun, TrendingUp, Truck } from "lucide-react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const iconMap: Record<string, React.ElementType> = {
  Network,
  Sun,
  Code2,
  TrendingUp,
  Truck,
  Cable,
  AirVent,
  Headset,
  EthernetPort,
};