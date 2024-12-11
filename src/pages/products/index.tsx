import React, { useMemo } from 'react';
import { useGetProducts } from '@/hooks/products';
import { PaginationParams } from '@/api/types';

export const Component: React.FC = () => {
	const params = useMemo((): PaginationParams => ({ limit: 20, skip: 0 }), []);
	useGetProducts(params);

	return <div>products</div>;
};
