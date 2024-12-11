import { useContext } from 'react';
import { FormContext as ProductCreateContext } from './productForm';

export const useProductFormContext = () => {
	return useContext(ProductCreateContext);
};
