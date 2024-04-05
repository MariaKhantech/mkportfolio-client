import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { ChatProvider } from '../context/ChatContext';
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@/styles/globals.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const materialTheme = materialExtendTheme();

// for reasons I have not figured out yet, this is needed in order to use MUI styling methods.
const theme = createTheme({
  palette: {
    text: {
      secondary: '#000',
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <JoyCssVarsProvider>
          <ThemeProvider theme={theme}>
            <AppCacheProvider {...pageProps}>
              <Navbar />
              <ChatProvider>
                <Component {...pageProps} />
              </ChatProvider>
            </AppCacheProvider>
          </ThemeProvider>
        </JoyCssVarsProvider>
      </MaterialCssVarsProvider>
    </>
  );
}
