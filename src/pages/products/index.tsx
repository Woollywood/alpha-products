import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router';
import { useInView } from 'react-intersection-observer';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { PaginationParams } from '@/api/types';
import { GridLoader } from './components/GridLoader';
import { AsideLoader } from './components/AsideLoader';
import { useAppDispatch, useAppSelector } from '@/store';
import { ProductPreview } from '@/components/ui/products/ProductPreview';
import { getProducts, nextProducts } from '@/store/products';
import { Spinner } from '@/components/ui/Spinner';
import { Aside } from '@/components/ui/Aside';

const displayOptions: { label: string; value: string }[] = [
	{ label: 'All', value: 'all' },
	{ label: 'Favorites', value: 'favorites' },
];

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
			<div className='grid grid-cols-4 gap-8'>
				{isLoading ? (
					<GridLoader />
				) : (
					renderedProducts?.map((product) => (
						<Link key={product.id} to={`/products/${product.id}`}>
							<ProductPreview {...product} />
						</Link>
					))
				)}
			</div>
			{!isLoading && hasNextPage && (
				<div className='col-start-2 my-12 flex items-center justify-center' ref={ref}>
					<Spinner />
				</div>
			)}
		</div>
	);
};
