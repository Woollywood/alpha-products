import { useAppDispatch } from '@/store';
import { getMealsByCategory, reset } from '@/store/meals';
import { useEffect } from 'react';

export const useGetMeals = (category: string) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (category.length > 0) {
			dispatch(getMealsByCategory({ categoryParam: category }));
		}

		return () => {
			dispatch(reset());
		};
	}, [category, dispatch]);
};
