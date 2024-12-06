import React from 'react';
import { Link } from 'react-router';

interface Link {
	label: string;
	to: string;
}

const links: Link[] = [
	{
		label: 'Products',
		to: '/products',
	},
];

export const Header: React.FC = () => {
	return (
		<header className='flex items-center justify-between gap-12 py-3'>
			<Link to='/' className='text-6xl font-medium uppercase'>
				Logo
			</Link>
			<nav>
				<ul className='flex items-center gap-2'>
					{links.map(({ to, label }) => (
						<li key={to}>
							<Link
								to={to}
								className='rounded-2xl px-4 py-2 font-medium transition-colors hover:bg-slate-300'>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
