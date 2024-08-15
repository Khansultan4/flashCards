import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import HomePage from './pages/HomePage/HomePage';
import CardsPage from './pages/CardsPage/CardsPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/tasks',
          element: <CardsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
