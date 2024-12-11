import { RouteObject } from 'react-router';
import { ErrorPage } from '@/pages/error';
import { DefaultLayout } from '@/layouts/DefaultLayout';

export const routes: RouteObject[] = [
	{
		element: <DefaultLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				lazy: () => import('@/pages'),
				HydrateFallback: () => null,
			},
			{
				path: '/products',
				lazy: () => import('@/pages/products'),
				HydrateFallback: () => null,
			},
			{
				path: '/products/:id',
				lazy: () => import('@/pages/products/details'),
				HydrateFallback: () => null,
			},
			{
				path: '/create-product',
				lazy: () => import('@/pages/create-product'),
				HydrateFallback: () => null,
			},
			{
				path: '*',
				lazy: () => import('@/pages/404'),
				HydrateFallback: () => null,
			},
		],
	},
];
