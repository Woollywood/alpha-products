import { RouteObject } from 'react-router';
import { ErrorPage } from '@/pages/ErrorPage';
import { DefaultLayout } from '@/layouts/DefaultLayout';

export const routes: RouteObject[] = [
	{
		element: <DefaultLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				lazy: () => import('@/pages/HomePage'),
				HydrateFallback: () => null,
			},
			{
				path: '/products',
				lazy: () => import('@/pages/ProductsPage'),
				HydrateFallback: () => null,
			},
			{
				path: '*',
				lazy: () => import('@/pages/NotFound'),
				HydrateFallback: () => null,
			},
		],
	},
];
