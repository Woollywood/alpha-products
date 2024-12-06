import React from 'react';

export const Aside: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<aside>
			<div className='ring-primary sticky top-12 rounded-2xl px-8 py-4 ring-1'>{children}</div>
		</aside>
	);
};
