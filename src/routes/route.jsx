import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../MainLayout/MainLayout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/flight-history/flight-details',
        element: <MainLayout />,
      },
    ],
  },
]);

export default routes;
