import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router';
import { useInView } from 'react-intersection-observer';
import { PaginationParams } from '@/api/types';
import { ProductsLoader } from './components/ProductsLoader';
import { useAppDispatch, useAppSelector } from '@/store';
import { ProductPreview } from '@/components/ui/products/ProductPreview';
import { getProducts, nextProducts } from '@/store/products';
import { Spinner } from '@/components/ui/Spinner';

export const Component: React.FC = () => {
	const dispatch = useAppDispatch();
	const { isLoading, hasNextPage, products, renderedProducts } = useAppSelector((state) => state.products);

	const params = useMemo((): PaginationParams => ({ limit: 0, skip: 0 }), []);
	useEffect(() => {
		if (!products) {
			dispatch(getProducts());
		}
	}, [dispatch, params, products]);

	const { ref, inView } = useInView({
		threshold: 0,
	});

	useEffect(() => {
		if (inView) {
			dispatch(nextProducts());
		}
	}, [inView]);

	return isLoading ? (
		<div className='grid grid-cols-4 gap-8'>
			<ProductsLoader />
		</div>
	) : (
		<>
			<div className='grid grid-cols-4 gap-8'>
				{renderedProducts?.map((product) => (
					<Link key={product.id} to={`/products/${product.id}`}>
						<ProductPreview {...product} />
					</Link>
				))}
			</div>
			{hasNextPage && (
				<div className='my-12 flex items-center justify-center' ref={ref}>
					<Spinner />
				</div>
			)}
		</>
	);
};
