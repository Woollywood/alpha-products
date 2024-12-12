import React from 'react';

export const Aside: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<aside>
			<div className='border-primary sticky top-[calc(var(--header-height)+1rem)] rounded-2xl border px-6 py-8 text-black shadow-lg'>
				{children}
			</div>
		</aside>
	);
};
