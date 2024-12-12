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

export const getExistingSearchParams = (searchParams: URLSearchParams) => {
	const keys = [...searchParams.keys()];
	return keys.reduce((acc, key) => ({ ...acc, [key]: searchParams.get(key) }), {});
};

export const convertSearchParamsToStr = (searchParams: Record<string, string>, exclude?: string[]) => {
	return Object.entries(searchParams)
		.filter(([key]) => !(exclude && exclude.includes(key)))
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
		.join('&');
};
