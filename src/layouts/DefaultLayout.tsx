import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';

export const DefaultLayout: React.FC = () => {
	return (
		<div className='grid min-h-screen grid-rows-[auto_1fr_auto] gap-12'>
			<Header />
			<main className='container pt-[var(--header-height)]'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
