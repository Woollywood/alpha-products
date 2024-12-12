import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import moment from 'moment';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch, useAppSelector } from '@/store';
import { InfoBlock } from './components/InfoBlock';
import { Loader } from './components/Loader';
import { delay } from '@/utils';
import { Product } from '@/api/ProductsApi';
import { useGetProducts } from '@/hooks/products';

export const Component: React.FC = () => {
	useGetProducts();

	const [isLoading, setLoading] = useState(true);
	const [product, setProduct] = useState<Product | null>(null);

	const { isLoading: isLoadingProducts, products } = useAppSelector((state) => state.products);
	const dispatch = useAppDispatch();

	const params = useParams();
	const id = Number(params['id']);

	useEffect(() => {
		const getProduct = async () => {
			await delay(1000);
			const product = products?.find((product) => product.id === id);
			setProduct(product!);
			setLoading(false);
		};

		if (!isLoadingProducts) {
			getProduct();
		}
	}, [dispatch, id, isLoadingProducts]);

	const hasDiscount = product?.discountPercentage;
	const discount = hasDiscount && Number(((product.discountPercentage / 100) * product.price).toFixed(2));
	const price = hasDiscount ? product.price - discount! : product?.price;

	const hasReviews = product?.reviews && product.reviews.length > 0;

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<div className='mb-6 flex justify-end'>
						<Link to='/products'>
							<Button variant='contained'>Back to all products</Button>
						</Link>
					</div>
					<div className='grid grid-cols-[3fr_1fr] gap-6'>
						<div className='grid grid-cols-[2fr_3fr] gap-x-24 gap-y-12'>
							<img src={product?.thumbnail} alt='' className='w-full object-contain' />
							<div>
								<h2 className='text-4xl font-medium'>{product?.title}</h2>
								<p className='mb-4 ml-auto text-sm text-gray-500'>
									{moment(product?.meta.createdAt).format('LL')}
								</p>
								<div className='mb-6 flex items-center gap-2'>
									<Rating value={product?.rating} readOnly />
									{hasReviews && <span>{product?.reviews?.length} reviews</span>}
								</div>
								<div className='flex flex-col items-start gap-4'>
									<InfoBlock>
										<h3 className='text-2xl font-medium'>{product?.brand}</h3>
										<div className='text-gray-400'>Brand | Original</div>
									</InfoBlock>
									<InfoBlock>
										<h3 className='text-lg'>Category: {product?.category}</h3>
									</InfoBlock>
								</div>
							</div>
							<div className='col-span-2'>
								{hasReviews ? (
									<ul className='space-y-6'>
										{product?.reviews?.map(
											({ comment, date, rating, reviewerEmail, reviewerName }, index) => (
												<li key={index} className='flex gap-4'>
													<Avatar>{reviewerName.slice(0, 1)}</Avatar>
													<div className='w-full'>
														<div className='mb-6 flex items-center justify-between gap-6'>
															<div>
																<p className='text-xl font-medium'>{reviewerName}</p>
																<p className='text-sm'>{reviewerEmail}</p>
															</div>
															<div className='flex items-center gap-2'>
																<p className='text-sm text-gray-400'>
																	{moment(date).format('LL')}
																</p>
																<Rating value={rating} readOnly size='small' />
															</div>
														</div>
														<p className='text-base'>{comment}</p>
													</div>
												</li>
											),
										)}
									</ul>
								) : (
									<div>There is not any reviews yet</div>
								)}
							</div>
						</div>
						<div>
							<div className='sticky top-[calc(var(--header-height)+1rem)] rounded-xl bg-slate-50 p-4 shadow-md'>
								<div className='flex items-center gap-4'>
									<p className='text-2xl font-medium text-gray-500'>{price} $</p>
									{hasDiscount && (
										<p className='relative px-2 text-xl text-gray-500 line-through before:absolute before:left-0 before:top-[50%] before:h-[0.0625rem] before:w-full before:bg-gray-500'>
											{product.price} $
										</p>
									)}
								</div>
								{hasDiscount && (
									<p className='mt-1 text-2xl font-medium text-green-500'>becames cheaper</p>
								)}
								<div className='mt-12'>
									<div className='flex items-start gap-2'>
										<div className='flex-grow'>
											<Button variant='contained' className='w-full' size='large'>
												Add to cart
											</Button>
											<p className='mt-2 text-center'>{product?.shippingInformation}</p>
										</div>
										<IconButton aria-label='add to favorites' color='primary' size='large'>
											<FavoriteIcon />
										</IconButton>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
