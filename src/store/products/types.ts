import { Product } from '@/api/ProductsApi';
import { LoadingParams, PaginationParams } from '../types';
import { ResponseMeta } from '@/api/types';

interface CreatingParams {
	isCreating: boolean;
}

export type InitialState = LoadingParams &
	PaginationParams &
	Partial<ResponseMeta> &
	CreatingParams & {
		products: Product[] | null;
		renderedProducts: Product[] | null;
	};
