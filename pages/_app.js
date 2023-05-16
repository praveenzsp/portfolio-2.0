import '@/styles/globals.css'
import { NextUIProvider, createTheme } from '@nextui-org/react';

export default function App({ Component, pageProps }) {
  const darkTheme=createTheme({
    type:'dark'
  })
  
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
