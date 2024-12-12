import React, { useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router';
import { PaginationParams } from '@/api/types';
import { GridLoader } from './components/GridLoader';
import { AsideLoader } from './components/AsideLoader';
import { useAppDispatch, useAppSelector } from '@/store';
import { ProductPreview } from '@/components/ui/products/ProductPreview';
import { getProducts } from '@/store/products';
import { Aside } from '@/components/ui/Aside';
import { InfiniteList } from '@/components/shared/InfiniteList';
import { Filters } from './components/Filters';

export const Component: React.FC = () => {
	const dispatch = useAppDispatch();
	const { isLoading, products, favorites } = useAppSelector((state) => state.products);

	const [searchParams] = useSearchParams();
	const display = searchParams.get('display');

	const params = useMemo((): PaginationParams => ({ limit: 0, skip: 0 }), []);
	useEffect(() => {
		if (!products) {
			dispatch(getProducts());
		}
	}, [dispatch, params, products]);

	return (
		<div className='grid grid-cols-[280px_1fr] gap-6'>
			{isLoading ? (
				<AsideLoader />
			) : (
				<Aside>
					<Filters />
				</Aside>
			)}
			<div>
				{isLoading ? (
					<div className='products-grid'>
						<GridLoader />
					</div>
				) : (
					<InfiniteList
						key={display}
						items={display === 'all' ? products! : favorites}
						limit={32}
						className='products-grid'
						render={(product) => (
							<Link key={product.id} to={`/products/${product.id}`}>
								<ProductPreview {...product} />
							</Link>
						)}
					/>
				)}
			</div>
		</div>
	);
};
