import { useEffect } from 'react';
import { PaginationParams } from '@/api/types';
import { useAppDispatch } from '@/store';
import { getProducts } from '@/store/products/actions';

export const useGetProducts = (params: PaginationParams) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getProducts(params));
	}, [params]);
};
