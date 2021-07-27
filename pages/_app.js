import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="author" content="Aman Pahurkar" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          </Head>
          <Component {...pageProps} />
        </>
    )
}

export default MyApp
