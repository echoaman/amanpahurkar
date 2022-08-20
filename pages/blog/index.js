import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Layouts/Layout";
import updateScrollbar from "../../scripts/scrollbar";
import styles from "../../styles/Blog.module.css";

export default function Blog() {

    const { domain } = useContext(AppContext);

    useEffect(() => {
        updateScrollbar("var(--orange)");
    }, []);

    return (
        <>
            <Head>
                <title>Blog | Aman Pahurkar</title>
                <link rel="canonical" href={`https://${domain}/blog`} />
                <meta name="description" content="Welcome to my blog! I have jot down my experiences and learnings in different blog posts which you can find here." />
            </Head>
            <main>
                <h1 className={styles.heading}>Blog</h1>
                <div className={styles.container}>
                    <Link href="/blog/how-my-team-improved-the-performance-of-cartrades-migrated-pages">
                        <a className={styles.blog_post_wrapper} title="How my team improved the performance of Cartrade's migrated pages">
                            <section className={styles.blog_post}>
                                <h2 className={styles.blog_title}>How My Team Improved The Performance Of CarTrade&apos;s Migrated Pages</h2>
                                <p className={styles.publish_date}>Published on : <time dateTime="2022-04-04">April 4, 2022</time></p>
                                <p className={styles.summary}>By following modern web development strategies, my team was able to significantly improve the traffic and performance of the CarTrade&apos;s migrated pages. Here&apos;s how we did it.</p>
                            </section>
                        </a>
                    </Link>
                    <Link href="/blog/one-year-as-a-software-engineer">
                        <a className={styles.blog_post_wrapper} title="One year as a software engineer">
                            <section className={styles.blog_post}>
                                <h2 className={styles.blog_title}>One Year As A Software Engineer</h2>
                                <p className={styles.publish_date}>Published on : <time dateTime="2022-01-05">January 5, 2022</time></p>
                                <p className={styles.summary}>On 4th January, 2022 I completed one year as a software engineer. In this article, I have summarised some of my experiences and learnings.</p>
                            </section>
                        </a>
                    </Link>
                </div>
            </main>
        </>
    )
}