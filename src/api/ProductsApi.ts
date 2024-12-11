import { AxiosInstance } from '@/libs/axios';
import { PaginationParams, ResponseMeta, SearchParams } from './types';

export interface Review {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
}

export interface ProductMeta {
	createdAt: string;
	updatedAt: string;
	barcode: string;
	qrCode: string;
}

export interface Product {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	sku: string;
	weight: number;
	dimensions: Record<string, number>;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: Review[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: ProductMeta;
	images: string[];
	thumbnail: string;
}

export interface ProductsResponse extends ResponseMeta {
	products: Product[];
}

export class ProductsApi {
	static async getProducts(params: Partial<PaginationParams> = {}) {
		const { data } = await AxiosInstance<ProductsResponse>({ method: 'get', params });

		return data;
	}

	static async getProductById({ id }: Pick<Product, 'id'>) {
		const { data } = await AxiosInstance<Product>({ method: 'get', url: id.toString() });

		return data;
	}

	static async searchProducts(params: Partial<PaginationParams> & Partial<SearchParams> = {}) {
		const { data } = await AxiosInstance<ProductsResponse>({ method: 'get', url: 'search', params });

		return data;
	}
}
