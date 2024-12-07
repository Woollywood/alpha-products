import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { MessageProvider } from './libs/messages';
import './assets/tailwind.css';
import './assets/common.css';
import { App } from './App.tsx';
import { store } from '@/store/store.ts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<MessageProvider>
				<App />
			</MessageProvider>
		</Provider>
	</StrictMode>,
);
