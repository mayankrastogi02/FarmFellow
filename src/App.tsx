import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import ColorSchemeContext from './ColorSchemeContext';
import { MantineProvider } from '@mantine/core';
import LightDarkButton from './components/LightDarkButton';
import { useWindowEvent, useLocalStorage } from '@mantine/hooks';
import Logo from './components/Logo';
import Navbar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0);
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyJ' && (event.ctrlKey || event.metaKey)) {
      setColorScheme((current: any) => (current === 'dark' ? 'light' : 'dark'));
    }
  });

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={{ colorScheme }}>
        <div className='flex flex-col items-center font-sans min-h-screen' >
          <div className='w-screen fixed top-0'>
          <Navbar />
          </div>
        </div>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  )
}

export default App
