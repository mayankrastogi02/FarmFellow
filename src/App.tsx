import { useEffect, useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import ColorSchemeContext from './ColorSchemeContext';
import { MantineProvider } from '@mantine/core';
import LightDarkButton from './components/LightDarkButton';
import { useWindowEvent, useLocalStorage } from '@mantine/hooks';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import { getUsers } from './utils/dbFunctions';
import ErrorPage from "./components/ErrorPage.tsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.tsx';
import Profile from './pages/Profile.tsx';
import Chat from './pages/Chat.tsx';
import Landing from './components/Landing.tsx';
import Maps from './pages/Maps.tsx';
import ChatHistory from './pages/ChatHistory.tsx';

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
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/maps",
    element: <Maps />,
  },
  {
    path: "/history",
    element: <ChatHistory />,
  },
  {
    path: "/test",
    element: <div>Test</div>,
  },
]);

function App() {
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
      let response = await getUsers();
      console.log(response);
    }

    fetchUsers();
  }, []);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={{ colorScheme }}>
        <div className='flex flex-col items-center font-sans min-h-screen' >
          <div className='w-screen fixed top-0'>
            <Navbar />
          </div>
          <div className='mt-[4rem]'>

            <RouterProvider router={router} />
          </div>
        </div>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  )
}

export default App
