import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mantine/core/styles.css';
import ColorSchemeContext from './ColorSchemeContext';
import { MantineProvider } from '@mantine/core';
import { Textarea } from '@mantine/core';
import LightDarkButton from './components/LightDarkButton';
import { useWindowEvent, useLocalStorage } from '@mantine/hooks';


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
        <div className='flex flex-col items-center'>
          <LightDarkButton />
        </div>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  )
}

export default App
