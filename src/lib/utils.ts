import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function alphabeticalSort(a: any, b: any) {
  if (a.data.title < b.data.title) {
    return -1;
  }
  if (a.data.title > b.data.title) {
    return 1;
  }
  return 0;
}
