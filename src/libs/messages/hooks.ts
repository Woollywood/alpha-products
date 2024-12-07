import { useContext } from 'react';
import { MessageContext } from './context';

export const useMessage = () => {
	return useContext(MessageContext);
};
