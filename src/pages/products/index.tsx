import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { Aside } from './components/Aside';
import { CardLoader } from './components/CardLoader';
import { CardList } from './components/CardList';
import { useGetCategories } from '@/hooks/categories';
import { useGetMeals } from '@/hooks/meals';
import { reset } from '@/store/favorites';

export const Component: React.FC = () => {
	const dispatch = useAppDispatch();
	const { selectedCategory } = useAppSelector((state) => state.filter);
	const { isLoading } = useAppSelector((state) => state.meal);

	const hasSelectedCategory = selectedCategory.length > 0;

	useGetCategories();
	useGetMeals(selectedCategory);

	useEffect(() => {
		return () => {
			dispatch(reset());
		};
	}, []);

	return (
		<div className='grid grid-cols-[auto_1fr] gap-12'>
			<Aside />
			{hasSelectedCategory && isLoading ? <CardLoader /> : <CardList />}
		</div>
	);
};
