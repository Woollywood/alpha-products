import React from 'react';
import { RouterProvider as _RouterProvider } from 'react-router';
import { router } from './router';

export const RouterProvider: React.FC = () => {
	return <_RouterProvider router={router} />;
};
