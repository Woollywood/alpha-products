import { Product } from '@/api/ProductsApi';
import { LoadingParams } from '../types';

interface CreatingParams {
	isCreating: boolean;
}

export type InitialState = LoadingParams &
	CreatingParams & {
		products: Product[] | null;
	};
