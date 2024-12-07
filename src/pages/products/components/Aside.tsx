import React, { useLayoutEffect } from 'react';
import { AsideField } from './AsideField';
import { setCategory, setDisplay } from '@/store/filter';
import { Aside as UAside } from '@/components/ui/Aside';
import { useAppDispatch, useAppSelector } from '@/store';
import { useGetCategories } from '@/hooks/categories';

export const Aside: React.FC = () => {
	const dispatch = useAppDispatch();

	const { selectedCategory, selectedDisplay } = useAppSelector((state) => state.filter);
	const { categories } = useAppSelector((state) => state.category);
	useGetCategories();

	const { isLoading } = useAppSelector((state) => state.category);
	useLayoutEffect(() => {
		if (categories.length > 0) {
			dispatch(setCategory(categories[0].strCategory));
		}
	}, [categories, dispatch]);

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<UAside>
			<div className='space-y-12'>
				<AsideField
					title='Category'
					options={categories.map((category) => ({
						value: category.strCategory,
						label: category.strCategory,
					}))}
					selected={selectedCategory}
					onChange={(value) => dispatch(setCategory(value))}
				/>
				<AsideField
					title='Display'
					options={[
						{ label: 'All', value: 'all' },
						{ label: 'Favorites', value: 'favorites' },
					]}
					selected={selectedDisplay}
					onChange={(value) => dispatch(setDisplay(value))}
				/>
			</div>
		</UAside>
	);
};
