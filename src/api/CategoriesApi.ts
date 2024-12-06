import { AxiosInstance } from '@/libs/axios';

export interface Category {
	idCategory: string;
	strCategory: string;
	strCategoryDescription: string;
	strCategoryThumb: string;
}

export interface Categories {
	categories: Category[];
}

export class CategoriesApi {
	static async getAll() {
		const { data } = await AxiosInstance<Categories>({
			method: 'get',
			url: 'categories.php',
		});

		return data;
	}
}
