import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Spinner } from '../ui/Spinner';

interface Props<T> {
	items: T[];
	limit: number;
	render: (item: T) => React.ReactElement;
}

export const InfiniteList = <T extends { id: number }>({
	items,
	limit,
	className,
	render,
	...props
}: React.HTMLAttributes<HTMLDivElement> & Props<T>) => {
	const [renderedItems, setRenderedItems] = useState<T[]>([]);
	const [skip, setSkip] = useState(0);
	const total = items.length;
	const hasNextPage = skip !== total;

	const { ref, inView } = useInView({
		threshold: 0,
	});

	useEffect(() => {
		const nextRender = async () => {
			if (skip < total) {
				const offset = total - skip > limit ? limit : total - skip;
				const lastIndex = skip + offset;
				const nextItems = items.slice(skip, lastIndex);
				setRenderedItems([...renderedItems, ...nextItems]);
				setSkip(lastIndex);
			}
		};

		if (inView) {
			nextRender();
		}
	}, [inView]);

	return (
		<>
			<div className={className} {...props}>
				{renderedItems.map((item) => render(item))}
			</div>
			{hasNextPage && (
				<div className='my-12 flex items-center justify-center' ref={ref}>
					<Spinner />
				</div>
			)}
		</>
	);
};
