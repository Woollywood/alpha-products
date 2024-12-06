import React from 'react';
import { Link } from 'react-router';

export const Footer: React.FC = () => {
	return (
		<footer>
			<Link to='/' className='text-4xl font-medium uppercase'>
				Logo
			</Link>
		</footer>
	);
};
