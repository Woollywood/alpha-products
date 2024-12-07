import React from 'react';
import { HeartRegularIcon, HeartSolidIcon, TrashIcon } from '@/components/ui/icons';
import { useAppDispatch, useAppSelector } from '@/store';
import { add, remove as removeFavorite } from '@/store/favorites';
import { remove as removeMeal } from '@/store/meals';
import { Button, Card as UCard } from 'antd';
import { MealPreview } from '@/api/MealsApi';
import { Link } from 'react-router';
import { useMessage } from '@/libs/messages';

interface Props {
	meal: MealPreview;
}

export const Card: React.FC<Props> = ({ meal }) => {
	const messageApi = useMessage();

	const dispatch = useAppDispatch();
	const { favorites } = useAppSelector((state) => state.favorite);

	const handleLike = (event: React.MouseEvent<HTMLElement, MouseEvent>, meal: MealPreview) => {
		event.preventDefault();
		dispatch(add(meal));

		messageApi.open({
			type: 'success',
			content: 'Added to favorites',
		});
	};

	const handleRemove = (event: React.MouseEvent<HTMLElement, MouseEvent>, meal: MealPreview) => {
		event.preventDefault();
		dispatch(removeMeal({ idMeal: meal.idMeal }));

		messageApi.open({
			type: 'success',
			content: 'Removed product',
		});
	};

	return (
		<Link to={`/products/${meal.idMeal}`}>
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
						<Button
							size='large'
							icon={<HeartRegularIcon />}
							onClick={(event) => handleLike(event, meal)}></Button>
					),
					<Button size='large' icon={<TrashIcon />} onClick={(event) => handleRemove(event, meal)} />,
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
		</Link>
	);
};
