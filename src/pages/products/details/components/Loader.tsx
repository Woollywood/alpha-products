import React from 'react';
import Skeleton from '@mui/material/Skeleton';

export const Loader: React.FC = () => {
	return (
		<div className='grid grid-cols-[3fr_1fr] gap-6'>
			<div className='grid grid-cols-[2fr_3fr] gap-x-24 gap-y-12'>
				<Skeleton className='aspect-square' />
				<Skeleton />
				<div className='col-span-2'>
					{new Array(3).fill(null).map((_, index) => (
						<div key={index}>
							<div className='flex items-center gap-4'>
								<Skeleton className='aspect-square !h-10 !w-10 flex-shrink-0 rounded-full' />
								<Skeleton className='h-16 w-full' />
							</div>
							<Skeleton />
						</div>
					))}
				</div>
			</div>
			<Skeleton />
		</div>
	);
};
