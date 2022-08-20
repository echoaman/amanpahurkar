import Head from "next/head";
import { useContext, useEffect } from "react";
import { AppContext } from "../Layouts/Layout";
import updateScrollbar from "../scripts/scrollbar";
import styles from "../styles/Home.module.css";

export default function Home() {

    const { domain } = useContext(AppContext);

    const desc = "I am Aman Pahurkar and welcome to my personal website! I work at CarWale (CarTrade Tech) as a software development engineer 1. Feel free to reach out to me!"

    function approxExp() {
        let startDate = new Date('January 4, 2021');
        let today = new Date();

        let diff = (today.getTime() - startDate.getTime()) / 1050;
        diff /= 60 * 60 * 24 * 7 * 4;
        diff = Math.abs(Math.round(diff));

        return diff;
    }

    useEffect(() => {
        updateScrollbar("var(--white)");
    }, []);

    function getJsonLd() {
        return `{
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "Aman Pahurkar",
            "url": "https://${domain}",
            "image": "${process.env.NEXT_PUBLIC_CDN}/1x1-profile.webp",
            "sameAs": [
                "https://github.com/echoaman",
                "https://linkedin.com/in/amanpahurkar"
            ],
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai, Maharashtra, India"
            },
            "jobTitle": "SDE 1",
            "worksFor": {
                "@type": "Organization",
                "name": "CarWale (CarTrade Tech)"
            }
        }`;
    }

    return (
        <>
            <Head>
                <title>Aman Pahurkar</title>
                <link rel="canonical" href={`https://${domain}`} />
                <meta name="description" content={desc} />

                <meta property="og:title" content="Aman Pahurkar" />
                <meta property="og:url" content={`https://${domain}`} />
                <meta property="og:description" content={desc} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_CDN}/1x1-profile.webp`} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content={domain} />
                <meta property="twitter:url" content={`https://${domain}`} />
                <meta name="twitter:title" content="Aman Pahurkar" />
                <meta name="twitter:description" content={desc} />
                <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_CDN}/1x1-profile.webp`} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: getJsonLd()}} />
            </Head>
            <main>
                <h1 className={styles.heading}>Aman Pahurkar</h1>
                <div className={styles.container}>
                    <img src={`${process.env.NEXT_PUBLIC_CDN}/1x1-profile.webp?tr=w-360,ar-1-1,q-75`} width={360} height={360} decoding="async" alt="Image of Aman Pahurkar" />
                    <p className={styles.about}>Hello! I am a software engineer with about {approxExp()} months of experience. Currently I am working at <strong><a title="CarWale (CarTrade Tech)" href="https://carwale.com" target="_blank" rel="noopener noreferrer">CarWale (CarTrade Tech)</a></strong> as a SDE 1. Prior to this, I was an intern at CarWale. Feel free to reach out to me!</p>
                </div>
            </main>
        </>
    )
}
