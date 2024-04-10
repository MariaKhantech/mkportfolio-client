import * as React from 'react';
import Script from 'next/script';
import Layout from '../components/Layout/Layout';
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

const theme = createTheme({
  palette: {
    text: {
      secondary: '#000',
    },
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <JoyCssVarsProvider>
          <ThemeProvider theme={theme}>
            <AppCacheProvider {...pageProps}>
              <ChatProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ChatProvider>
            </AppCacheProvider>
          </ThemeProvider>
        </JoyCssVarsProvider>
      </MaterialCssVarsProvider>
    </>
  );
}
