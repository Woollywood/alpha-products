import React from 'react';
import { message } from 'antd';
import { MessageContext } from './context';

export const MessageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [messageApi, contextHolder] = message.useMessage();

	return (
		<>
			{contextHolder}
			<MessageContext.Provider value={messageApi}>{children}</MessageContext.Provider>
		</>
	);
};
