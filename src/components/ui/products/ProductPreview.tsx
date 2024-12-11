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
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const ProductPreview: React.FC<Product> = (product) => {
	return (
		<Card sx={{ maxWidth: 345 }} className='grid'>
			<CardHeader
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title={product.title}
				subheader={moment(product.meta.createdAt).format('LL')}
			/>
			<CardMedia component='img' height='194' image={product.thumbnail} />
			<CardContent>
				<Typography variant='body2' sx={{ color: 'text.secondary' }} className='line-clamp-3'>
					{product.description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label='delete'>
					<DeleteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};
