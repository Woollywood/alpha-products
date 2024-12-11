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
}

export interface Product {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	brand: string;
	shippingInformation: string;
	reviews: Review[] | null;
	meta: ProductMeta;
	thumbnail: string;
}

export interface ProductsResponse extends ResponseMeta {
	products: Product[];
}

export class ProductsApi {
	static async getProducts() {
		const params: PaginationParams = {
			limit: 0,
			skip: 0,
		};
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

	static async addProduct(product: Omit<Product, 'id' | 'reviews'>) {
		const { data } = await AxiosInstance<Product>({ method: 'post', url: 'add', data: product });
		data.meta = {
			createdAt: product.meta.createdAt,
		};

		return data;
	}

	static async updateProduct(product: Product) {
		const { data } = await AxiosInstance<
			Pick<
				Product,
				| 'id'
				| 'title'
				| 'price'
				| 'discountPercentage'
				| 'rating'
				| 'thumbnail'
				| 'description'
				| 'brand'
				| 'category'
			>
		>({ method: 'put', url: product.id.toString(), data: product });

		return data;
	}

	static async deleteProduct({ id }: Pick<Product, 'id'>) {
		const { data } = await AxiosInstance<Product>({ method: 'delete', url: id.toString() });

		return data;
	}
}
