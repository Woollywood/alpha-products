import { AxiosInstance } from '@/libs/axios';

export interface Meal {
	dateModified: string | null;
	idMeal: string;
	strArea: string | null;
	strCategory: string | null;
	strCreativeCommonsConfirmed: string | null;
	strDrinkAlternate: string | null;
	strImageSource: string | null;
	strIngredient1: string | null;
	strIngredient2: string | null;
	strIngredient3: string | null;
	strIngredient4: string | null;
	strIngredient5: string | null;
	strIngredient6: string | null;
	strIngredient7: string | null;
	strIngredient8: string | null;
	strIngredient9: string | null;
	strIngredient10: string | null;
	strIngredient11: string | null;
	strIngredient12: string | null;
	strIngredient13: string | null;
	strIngredient14: string | null;
	strIngredient15: string | null;
	strIngredient16: string | null;
	strIngredient17: string | null;
	strIngredient18: string | null;
	strIngredient19: string | null;
	strIngredient20: string | null;
	strInstructions: string | null;
	strMeal: string;
	strMealThumb: string | null;
	strMeasure1: string | null;
	strMeasure2: string | null;
	strMeasure3: string | null;
	strMeasure4: string | null;
	strMeasure5: string | null;
	strMeasure6: string | null;
	strMeasure7: string | null;
	strMeasure8: string | null;
	strMeasure9: string | null;
	strMeasure10: string | null;
	strMeasure11: string | null;
	strMeasure12: string | null;
	strMeasure13: string | null;
	strMeasure14: string | null;
	strMeasure15: string | null;
	strMeasure16: string | null;
	strMeasure17: string | null;
	strMeasure18: string | null;
	strMeasure19: string | null;
	strMeasure20: string | null;
	strSource: string | null;
	strTags: string | null;
	strYoutube: string | null;
}

export interface MealPreview {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
}

export interface Meals<T> {
	meals: T[];
}

export class MealsApi {
	static async getAll({ searchParam }: { searchParam: string }) {
		const { data } = await AxiosInstance<Meals<Meal>>({
			method: 'get',
			url: 'search.php',
			params: {
				s: searchParam,
			},
		});

		return data;
	}

	static async getByCategory({ categoryParam }: { categoryParam: string }) {
		const { data } = await AxiosInstance<Meals<MealPreview>>({
			method: 'get',
			url: 'filter.php',
			params: {
				c: categoryParam,
			},
		});

		return data;
	}

	static async getMealById({ idMeal }: Pick<Meal, 'idMeal'>) {
		const {
			data: { meals },
		} = await AxiosInstance<Meals<Meal>>({
			method: 'get',
			url: 'lookup.php',
			params: {
				i: idMeal,
			},
		});

		return meals[0];
	}
}
