import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router';
import { PaginationParams } from '@/api/types';
import { ProductsLoader } from './components/ProductsLoader';
import { useAppDispatch, useAppSelector } from '@/store';
import { ProductPreview } from '@/components/ui/products/ProductPreview';
import { getProducts } from '@/store/products';

export const Component: React.FC = () => {
	const dispatch = useAppDispatch();
	const { isLoading, products } = useAppSelector((state) => state.products);

	const params = useMemo((): PaginationParams => ({ limit: 20, skip: 0 }), []);
	useEffect(() => {
		if (!products) {
			dispatch(getProducts(params));
		}
	}, [dispatch, params, products]);

	return (
		<div className='grid grid-cols-4 gap-8'>
			{isLoading ? (
				<ProductsLoader />
			) : (
				products?.products.map((product) => (
					<Link key={product.id} to={`/products/${product.id}`}>
						<ProductPreview {...product} />
					</Link>
				))
			)}
		</div>
	);
};
