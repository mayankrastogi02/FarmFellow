import { useEffect, useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import ColorSchemeContext from './ColorSchemeContext';
import { MantineProvider } from '@mantine/core';
import { useWindowEvent, useLocalStorage } from '@mantine/hooks';
import Navbar from './components/Navbar';
import ErrorPage from "./components/ErrorPage.tsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './components/Landing.tsx';
import HomePage from './pages/HomePage.tsx';
import Cart from './pages/Cart.tsx';
import Login from './pages/Login.tsx';
import Profile from './pages/Profile.tsx';
import Chat from './pages/Chat.tsx';
import Orders from './pages/Orders.tsx';
import { CartContext } from './utils/globalData.tsx';
import { CartProvider } from './components/CartProvider.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/test",
    element: <div>Test</div>,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/chat",
    element: <Chat />,
  }
]);


function App() {
  const [cart, setCart] = useState();
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyJ' && (event.ctrlKey || event.metaKey)) {
      setColorScheme((current: any) => (current === 'dark' ? 'light' : 'dark'));
    }
  });

  useEffect(() => {
    async function fetchUsers() {
    }

    fetchUsers();
  }, []);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={{ colorScheme }}>
        <CartProvider>
          <div className='w-full overflow-hidden'>
            <div className='flex flex-col items-center font-sans' >
              <Navbar />
            </div>
            <div className='w-full'>
              <RouterProvider router={router} />
            </div>
          </div>
        </CartProvider>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  )
}

export default App
