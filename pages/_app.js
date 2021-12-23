import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../Layouts/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Aman Pahurkar" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="google-site-verification" content="Z5ESajq8T3JxcQ45GBL8XR9FTDVRS-DTRYygaZbxBhI" />
			</Head>
		  <Component {...pageProps} />
		</Layout>
	)
}

export default MyApp;
