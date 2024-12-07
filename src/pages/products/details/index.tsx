import React from 'react';
import { useParams } from 'react-router';

export const Component: React.FC = () => {
	const { id } = useParams();

	return <div>{id} Product</div>;
};
