import React from 'react';
import moment from 'moment';
import { Product } from '@/api/ProductsApi';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { HeartRegularIcon, HeartSolidIcon, TrashIcon } from '../icons';
import { useAppDispatch, useAppSelector } from '@/store';
import { addFavorite, removeFavorite, removeProduct } from '@/store/products';

export const ProductPreview: React.FC<Product> = (product) => {
	const { id } = product;

	const dispatch = useAppDispatch();
	const { favorites } = useAppSelector((state) => state.products);
	const isInFavorites = Boolean(favorites.find((p) => p.id === product.id));

	const toggleFavorite = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		if (!isInFavorites) {
			handleAddFavorite();
		} else {
			handleRemoveFavorite();
		}
	};

	const handleAddFavorite = () => {
		dispatch(addFavorite(product));
	};

	const handleRemoveFavorite = () => {
		dispatch(removeFavorite({ id }));
	};

	const handleRemove = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		dispatch(removeProduct({ id }));
	};

	return (
		<Card sx={{ maxWidth: 345 }} className='grid h-full'>
			<CardHeader title={product.title} subheader={moment(product.meta.createdAt).format('LL')} />
			<CardMedia component='img' height='194' image={product.thumbnail} />
			<CardContent>
				<Typography variant='body2' sx={{ color: 'text.secondary' }} className='line-clamp-3'>
					{product.description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing className='justify-end'>
				<IconButton aria-label='add to favorites' onClick={toggleFavorite}>
					{isInFavorites ? <HeartSolidIcon /> : <HeartRegularIcon />}
				</IconButton>
				<IconButton aria-label='delete' onClick={handleRemove}>
					<TrashIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};
