import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useSearchParams } from 'react-router';

const displayOptions: { label: string; value: string }[] = [
	{ label: 'All', value: 'all' },
	{ label: 'Favorites', value: 'favorites' },
];

export const Filters: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const display = searchParams.get('display') || '';

	useEffect(() => {
		if (display.length === 0) {
			setSearchParams({ display: 'all' });
		}
	}, []);

	return (
		<TextField
			select
			label='Display'
			helperText='Please select your display type'
			value={display}
			onChange={(e) => setSearchParams({ display: e.target.value })}>
			{displayOptions.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</TextField>
	);
};
