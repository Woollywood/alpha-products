import { HeartRegularIcon, TrashIcon } from '@/components/ui/icons';
import { Button, Card } from 'antd';
import React from 'react';

export const CardLoader: React.FC = () => {
	return (
		<div className='grid grid-cols-4 gap-4'>
			{new Array(16).fill(null).map((_, index) => (
				<Card
					key={index}
					loading
					actions={[
						<Button size='large' icon={<HeartRegularIcon />} />,
						<Button size='large' icon={<TrashIcon />} />,
					]}
					style={{ minWidth: 300 }}></Card>
			))}
		</div>
	);
};
