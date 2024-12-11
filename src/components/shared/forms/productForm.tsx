import React, { createContext, useCallback, useState } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { DefaultValues, useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Form as FormWrapper, FormControl, FormField, FormItem, FormMessage } from '@/components/shared/form';
import { useProductFormContext } from './hooks';
import { cn } from '@/utils';
import { Product, ProductMeta } from '@/api/ProductsApi';
import { useAppSelector } from '@/store';
import moment from 'moment';

const schema = z.object({
	title: z.string().min(1, { message: 'Required' }).max(300),
	description: z.string().min(1, { message: 'Required' }).max(300),
	category: z.string().min(1, { message: 'Required' }).max(300),
	price: z.number({ invalid_type_error: 'Expected number, received string' }),
	discountPercentage: z.number({ invalid_type_error: 'Expected number, received string' }),
	rating: z.number({ invalid_type_error: 'Expected number, received string' }),
	brand: z.string().min(1, { message: 'Required' }).max(300),
	shippingInformation: z.string().min(1, { message: 'Required' }).max(300),
	meta: z.custom<ProductMeta>(),
	thumbnail: z.string().min(1, { message: 'Required' }).max(300),
});

const categoriesOptions: string[] = ['beauty', 'kitchen-accessories', 'motorcycle'];
type FormType = Omit<Product, 'id' | 'reviews'>;

export const FormContext = createContext<UseFormReturn<FormType>>({} as UseFormReturn<FormType>);

interface ProviderProps extends React.PropsWithChildren {
	initialValues?: DefaultValues<FormType>;
}

export const Provider: React.FC<ProviderProps> = ({ children, initialValues }) => {
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: initialValues || {
			title: '',
			description: '',
			category: categoriesOptions[0],
			brand: '',
			discountPercentage: 0,
			price: 0,
			rating: 0,
			shippingInformation: '',
			meta: {
				createdAt: '',
			},
			thumbnail: '',
		},
	});

	return <FormContext.Provider value={{ ...form }}>{children}</FormContext.Provider>;
};

interface FormProps {
	onSubmit: () => Promise<void>;
	type?: 'create' | 'edit';
}

export const Form: React.FC<FormProps & React.HTMLAttributes<HTMLFormElement>> = ({
	className,
	onSubmit,
	type = 'create',
	...props
}) => {
	const { isCreating } = useAppSelector((state) => state.products);
	const form = useProductFormContext();

	const [thumbnailPath, setThumbnailPath] = useState(type === 'edit' ? form.getValues().thumbnail : '');
	const hasThumbnailPath = thumbnailPath.length > 0;

	const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
		const [file] = acceptedFiles;
		const filepath = URL.createObjectURL(file);
		setThumbnailPath(filepath);
		form.setValue('thumbnail', filepath);
		form.setValue('meta.createdAt', moment().format());
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<FormWrapper {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={cn('max-w-[32rem] space-y-4 [&>div>*]:w-full', className)}
				{...props}>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<TextField label='Title' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<TextField label='Description' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='category'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<TextField select label='Category' {...field}>
									{categoriesOptions.map((category) => (
										<MenuItem key={category} value={category}>
											{category}
										</MenuItem>
									))}
								</TextField>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='price'
					render={() => (
						<FormItem>
							<FormControl>
								<TextField
									type='number'
									label='Size'
									{...form.register('price', { valueAsNumber: true })}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='discountPercentage'
					render={() => (
						<FormItem>
							<FormControl>
								<TextField
									type='number'
									label='Discount percentage'
									{...form.register('discountPercentage', { valueAsNumber: true })}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='rating'
					render={() => (
						<FormItem>
							<FormControl>
								<TextField
									type='number'
									label='Rating'
									{...form.register('rating', { valueAsNumber: true })}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='brand'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<TextField label='brand' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='shippingInformation'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<TextField label='Shipping information' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='thumbnail'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<div
									{...getRootProps()}
									className='relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-gray-200 p-12 text-center text-xl font-medium'>
									<input
										{...getInputProps()}
										className='absolute left-0 top-0 z-10 !h-full !w-full'
									/>
									<input aria-hidden className='hidden' {...field} />
									<div className='pointer-events-none'>
										{hasThumbnailPath ? (
											<img
												src={thumbnailPath}
												alt=''
												className='absolute left-0 top-0 h-full w-full object-cover'
											/>
										) : isDragActive ? (
											<p>Drop the files here ...</p>
										) : (
											<p>Drag 'n' drop some files here, or click to select files</p>
										)}
									</div>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					className='flex w-full items-center justify-center'
					type='submit'
					size='small'
					disabled={isCreating}>
					{type === 'create' ? 'Create' : 'Edit'}
				</Button>
			</form>
		</FormWrapper>
	);
};
