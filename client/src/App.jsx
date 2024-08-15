import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import HomePage from './pages/HomePage/HomePage';
import CardsPage from './pages/CardsPage/CardsPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import axiosInstance, { setAccessToken } from './axiosInstance';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    setIsLoading(true);
    axiosInstance.get(`/tokens/refresh`).then((res) => {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
      setIsLoading(false);
    });
  }, []);
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
        {
          path: '/signup',
          element: <SignUpPage setUser={setUser} />,
        },
        {
          path: '/signin',
          element: <SignInPage setUser={setUser} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
