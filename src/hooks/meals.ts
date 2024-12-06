import { useAppDispatch } from '@/store';
import { getMealsByCategory } from '@/store/meals';
import { useEffect } from 'react';

export const useGetMeals = (category: string) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (category.length > 0) {
			dispatch(getMealsByCategory({ categoryParam: category }));
		}
	}, [category, dispatch]);
};
