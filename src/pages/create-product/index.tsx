import React from 'react';
import { useProductFormContext } from '@/components/shared/forms/hooks';
import { Form as FormWrapper, Provider } from '@/components/shared/forms/productForm';
import { useAppDispatch, useAppSelector } from '@/store';
import { getProducts, addProduct } from '@/store/products';
import { useNavigate } from 'react-router';

const Form: React.FC = () => {
	const { products } = useAppSelector((state) => state.products);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { getValues } = useProductFormContext();

	const onSubmit = async () => {
		if (!products) {
			await dispatch(getProducts());
		}

		await dispatch(addProduct(getValues()));
		navigate('/products');
	};

	return <FormWrapper className='w-full' onSubmit={onSubmit} />;
};

export const Component: React.FC = () => {
	return (
		<div className='container flex justify-center'>
			<Provider>
				<Form />
			</Provider>
		</div>
	);
};
