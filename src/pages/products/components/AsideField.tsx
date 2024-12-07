import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Space } from 'antd';

interface Field {
	label: string;
	value: string;
}

interface Props {
	title: string;
	options: Field[];
	selected: string;
	onChange: (value: string) => void;
}

export const AsideField: React.FC<Props> = ({ title, options, selected, onChange }) => {
	const handleChange = (e: RadioChangeEvent) => {
		onChange(e.target.value);
	};

	return (
		<div>
			<div className='mb-4 text-2xl font-medium'>{title}</div>
			<Radio.Group onChange={handleChange} value={selected}>
				<Space direction='vertical'>
					{options.map((option) => (
						<Radio key={option.value} value={option.value}>
							{option.label}
						</Radio>
					))}
				</Space>
			</Radio.Group>
		</div>
	);
};
