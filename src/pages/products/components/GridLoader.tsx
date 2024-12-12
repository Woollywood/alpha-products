import React from 'react';
import Skeleton from '@mui/material/Skeleton';

export const GridLoader: React.FC = () => {
	return new Array(12).fill(null).map((_, index) => <Skeleton key={index} variant='rectangular' height={360} />);
};
