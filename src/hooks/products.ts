import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { getProducts } from '@/store/products';

export const useGetProducts = () => {
	const dispatch = useAppDispatch();
	const { products } = useAppSelector((state) => state.products);

	useEffect(() => {
		if (!products) {
			dispatch(getProducts());
		}
	}, [dispatch, products]);
};
