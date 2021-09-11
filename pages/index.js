import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    function approxExp() {
        let startDate = new Date('January 4, 2021');
        let today = new Date();

        let diff = (today.getTime() - startDate.getTime()) / 1000;
        diff /= 60 * 60 * 24 * 7 * 4;
        diff = Math.abs(Math.round(diff));

        return diff;
    }

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <Head>
                    <title>Aman Pahurkar | Software Engineer</title>
                    <link rel="canonical" href="https://amanpahurkar.vercel.app" />
                    <meta name="description" content="I am Aman Pahurkar and welcome to my personal website! I work at CarWale as an Associate Software Development Engineer. Feel free to reach out to me!" />
                    <meta name="keywords" content="Aman Pahurkar, personal website, software engineer, computer engineer, SDE" />
                </Head>
                <h1 className={styles.name}>Aman Pahurkar</h1>
                <main id={styles.about}>Hello! I am a Software Engineer with about <time>{approxExp()} months</time> of experience. Currently I am working at <strong><a href="https://carwale.com" target="_blank" rel="noopener noreferrer">CarWale</a></strong> as an Associate Software Development Engineer. Prior to this, I was an intern at CarWale. Reach out to me via LinkedIn or mail.</main>
            </div>
        </div>
    );
}
