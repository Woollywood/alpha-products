import { useSearchParams } from 'react-router';

export const useGetFilters = () => {
	const [searchParams] = useSearchParams();
	const display = searchParams.get('display');
	const search = searchParams.get('s') || '';

	return { display, search };
};
