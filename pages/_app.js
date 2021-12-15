import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../Layouts/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content="Aman Pahurkar" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="google-site-verification" content="Z5ESajq8T3JxcQ45GBL8XR9FTDVRS-DTRYygaZbxBhI" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins&display=swap" rel="stylesheet" />
            </Head>
          <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;
