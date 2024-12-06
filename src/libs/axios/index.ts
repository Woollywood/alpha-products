import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

export const AxiosInstance = axios.create({
	baseURL,
	timeout: 1000,
});
