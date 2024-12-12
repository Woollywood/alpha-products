import React from 'react';
import Skeleton from '@mui/material/Skeleton';

export const AsideLoader: React.FC = () => {
	return (
		<aside>
			<Skeleton />
			<Skeleton animation='wave' />
			<Skeleton animation={false} />
		</aside>
	);
};
