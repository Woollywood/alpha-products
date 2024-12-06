import { MealPreview, Meals } from '@/api/MealsApi';
import { LoadingParam } from '@/api/types';

export type Store = Meals<MealPreview> & LoadingParam;
