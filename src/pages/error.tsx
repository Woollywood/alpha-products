import React from 'react';
import { ErrorResponse, useRouteError } from 'react-router';

export const ErrorPage: React.FC = () => {
	const error = useRouteError() as ErrorResponse;

	return (
		<div className='flex h-full w-full flex-col items-center justify-center gap-4'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText}</i>
			</p>
		</div>
	);
};
