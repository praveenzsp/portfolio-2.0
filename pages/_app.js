import '@/styles/globals.css'
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const darkTheme=createTheme({
    type:'dark'
  })
  
  return (
    <NextUIProvider theme={darkTheme}>
      <ToastContainer/>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
