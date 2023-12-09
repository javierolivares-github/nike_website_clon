import '@/styles/globals.css';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Provider } from 'react-redux';
import store from '@/store/store';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Online Store Nike</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  )
}
