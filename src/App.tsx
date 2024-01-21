import { useState } from 'react'
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
]);


function App() {
  const [user, setUser] = useState<unknown>()
  const [farms, setFarms] = useState<unknown>();
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyJ' && (event.ctrlKey || event.metaKey)) {
      setColorScheme((current: any) => (current === 'dark' ? 'light' : 'dark'));
    }
  });


  console.log(farms)

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={{ colorScheme }}>
        {/* <UserDataContext.Provider value={{ user, setUser }}> */}
        <div className='flex flex-col items-center font-sans min-h-screen' >
          <div className='w-screen fixed top-0'>
            <Navbar />
          </div>
          <div className='w-screen mt-[4rem]'>
            <RouterProvider router={router} />
          </div>
        </div>
        {/* </UserDataContext.Provider> */}
      </MantineProvider>
    </ColorSchemeContext.Provider>
  )
}

export default App
