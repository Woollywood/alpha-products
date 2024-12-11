export interface ResponseMeta {
	limit: number;
	skip: number;
	total: number;
}

export interface SearchParams {
	q: string;
}

export interface PaginationParams {
	limit: number;
	skip: number;
}
