import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn: typeof clsx = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};
