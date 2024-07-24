import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DashboardPage from '../pages/dashboard';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'dashboard',
				element: <DashboardPage />,
			},
		],
	},
]);
