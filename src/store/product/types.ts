import { Product } from '@/api/ProductsApi';
import { LoadingParams } from '../types';

export interface InitialState extends LoadingParams {
	product: Product | null;
}
