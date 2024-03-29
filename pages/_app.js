import Head from 'next/head';
import Layout from '../Layouts/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="Aman Pahurkar" />
                <meta name="google-site-verification" content="Z5ESajq8T3JxcQ45GBL8XR9FTDVRS-DTRYygaZbxBhI" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;
