import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider ,createTheme} from '@mantine/core';

import './index.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import '@mantine/tiptap/styles.css';

const theme = createTheme({
  primaryColor: 'blue', // Customize primary color
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme='dark' theme={theme} >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
