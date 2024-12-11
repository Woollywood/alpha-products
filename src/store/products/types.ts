import { ProductsResponse } from '@/api/ProductsApi';
import { LoadingParams } from '../types';

export interface InitialState extends LoadingParams {
	products: ProductsResponse | null;
}
