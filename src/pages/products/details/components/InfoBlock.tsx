import React from 'react';

export const InfoBlock: React.FC<React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>> = ({
	children,
	className,
	...props
}) => {
	return (
		<div className={['inline-block rounded-xl bg-slate-300/30 px-4 py-2', className].join(' ')} {...props}>
			{children}
		</div>
	);
};
