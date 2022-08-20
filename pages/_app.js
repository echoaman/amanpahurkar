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
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
                <meta httpEquiv="Strict-Transport-Security" content="max-age=63072000; includeSubDomains; preload" />
                <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
                <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
                <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta httpEquiv="Referrer-Policy" content="origin-when-cross-origin" />
                <meta httpEquiv="Content-Security-Policy" content="default-src 'self' ; script-src 'self' 'unsafe-eval' 'unsafe-inline' ; style-src * 'unsafe-inline' ; font-src * ; img-src * data:" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;
