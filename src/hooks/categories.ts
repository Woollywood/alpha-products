import { useEffect } from 'react';
import { useAppDispatch } from '@/store';
import { getAllCategories } from '@/store/categories';

export const useGetCategories = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllCategories());
	}, [dispatch]);
};
