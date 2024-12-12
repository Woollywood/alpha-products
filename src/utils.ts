import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const delay = async (timeout: number) => {
	return await new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve();
		}, timeout);
	});
};
