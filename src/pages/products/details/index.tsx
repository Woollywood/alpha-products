import { useGetMelById } from '@/hooks/meals';
import React from 'react';
import { useParams } from 'react-router';

export const Component: React.FC = () => {
	const { id: idMeal = '' } = useParams();
	useGetMelById({ idMeal });

	return <div>{idMeal} Product</div>;
};
