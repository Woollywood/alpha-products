import { useEffect } from 'react';
import { useAppDispatch } from '@/store';
import { getAllCategories, reset } from '@/store/categories';

export const useGetCategories = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllCategories());

		return () => {
			dispatch(reset());
		};
	}, [dispatch]);
};
