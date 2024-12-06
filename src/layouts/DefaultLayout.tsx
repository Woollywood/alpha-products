import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';

export const DefaultLayout: React.FC = () => {
	return (
		<div className='container grid min-h-screen grid-rows-[auto_1fr_auto]'>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
