import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { PaginationParams } from '@/api/types';
import { GridLoader } from './components/GridLoader';
import { AsideLoader } from './components/AsideLoader';
import { useAppDispatch, useAppSelector } from '@/store';
import { ProductPreview } from '@/components/ui/products/ProductPreview';
import { getProducts } from '@/store/products';
import { Aside } from '@/components/ui/Aside';
import { InfiniteList } from '@/components/shared/InfiniteList';

const displayOptions: { label: string; value: string }[] = [
	{ label: 'All', value: 'all' },
	{ label: 'Favorites', value: 'favorites' },
];

export const Component: React.FC = () => {
	const dispatch = useAppDispatch();
	const { isLoading, products } = useAppSelector((state) => state.products);

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
					<TextField select label='Display' defaultValue='all' helperText='Please select your display type'>
						{displayOptions.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				</Aside>
			)}
			<div>
				{isLoading ? (
					<div className='products-grid'>
						<GridLoader />
					</div>
				) : (
					<InfiniteList
						items={products!}
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
