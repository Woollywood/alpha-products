import React from 'react';
import { useAppSelector } from '@/store';
import { Card } from './Card';

export const CardList: React.FC = () => {
	const { selectedDisplay } = useAppSelector((state) => state.filter);
	const { meals } = useAppSelector((state) => state.meal);
	const { favorites } = useAppSelector((state) => state.favorite);

	return (
		<div className='grid grid-cols-4 gap-4'>
			{selectedDisplay === 'all' && meals.map((meal) => <Card key={meal.idMeal} meal={meal} />)}
			{selectedDisplay === 'favorites' && favorites.map((meal) => <Card key={meal.idMeal} meal={meal} />)}
		</div>
	);
};
