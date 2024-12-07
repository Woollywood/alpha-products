import { Meal } from '@/api/MealsApi';

export interface Store {
	isLoading: boolean;
	meal: Meal | null;
}
