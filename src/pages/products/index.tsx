import React from 'react';
import { Link, useSearchParams } from 'react-router';
import { GridLoader } from './components/GridLoader';
import { AsideLoader } from './components/AsideLoader';
import { useAppSelector } from '@/store';
import { ProductPreview } from '@/components/ui/products/ProductPreview';
import { Aside } from '@/components/ui/Aside';
import { InfiniteList } from '@/components/shared/InfiniteList';
import { Filters } from './components/Filters';
import { Product } from '@/api/ProductsApi';
import { useGetProducts } from '@/hooks/products';

export const Component: React.FC = () => {
	const { isLoading, products, favorites } = useAppSelector((state) => state.products);

	const [searchParams] = useSearchParams();
	const display = searchParams.get('display');
	const search = searchParams.get('s') || '';

	const filter = (product: Product) => product.title.toLowerCase().includes(search?.toLowerCase());
	const filteredProducts = (display === 'all' ? products?.filter(filter) : favorites.filter(filter)) || [];

	useGetProducts();

	return (
		<div className='grid grid-cols-[17.5rem_1fr] gap-6'>
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
						items={filteredProducts}
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
