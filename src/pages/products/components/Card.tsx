import React from 'react';
import { HeartRegularIcon, HeartSolidIcon, TrashIcon } from '@/components/ui/icons';
import { useAppDispatch, useAppSelector } from '@/store';
import { add, remove as removeFavorite } from '@/store/favorites';
import { remove as removeMeal } from '@/store/meals';
import { Button, Card as UCard } from 'antd';
import { MealPreview } from '@/api/MealsApi';

interface Props {
	meal: MealPreview;
}

export const Card: React.FC<Props> = ({ meal }) => {
	const dispatch = useAppDispatch();
	const { favorites } = useAppSelector((state) => state.favorite);

	return (
		<UCard
			key={meal.idMeal}
			hoverable
			cover={<img alt='' src={meal.strMealThumb} />}
			actions={[
				favorites.find((favorite) => favorite.idMeal === meal.idMeal) ? (
					<Button
						size='large'
						icon={<HeartSolidIcon />}
						onClick={() => dispatch(removeFavorite({ idMeal: meal.idMeal }))}></Button>
				) : (
					<Button size='large' icon={<HeartRegularIcon />} onClick={() => dispatch(add(meal))}></Button>
				),
				<Button
					size='large'
					icon={<TrashIcon />}
					onClick={() => dispatch(removeMeal({ idMeal: meal.idMeal }))}
				/>,
			]}>
			<UCard.Meta
				title={meal.strMeal}
				description={
					<p className='line-clamp-3'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos aut in debitis ipsam
						voluptate iure deleniti recusandae libero sequi?
					</p>
				}
			/>
		</UCard>
	);
};
