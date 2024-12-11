import { Product } from '@/api/ProductsApi';
import { LoadingParams, PaginationParams } from '../types';
import { ResponseMeta } from '@/api/types';

export type InitialState = LoadingParams &
	PaginationParams &
	Partial<ResponseMeta> & {
		products: Product[] | null;
		renderedProducts: Product[] | null;
	};
