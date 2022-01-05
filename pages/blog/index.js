import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import updateScrollbar from "../../scripts/scrollbar";
import styles from "../../styles/Blog.module.css";

export default function Blog() {

	useEffect(() => {
		updateScrollbar("var(--orange)");
	}, []);

	return (
		<>
			<Head>
				<title>Blog | Aman Pahurkar</title>
				<link rel="canonical" href="https://amanpahurkar.vercel.app/blog" />
				<meta name="description" content="Welcome to my blog! I will jot down my experiences and learnings in different blog posts which you can find here." />
				<meta name="keywords" content="blog" />
			</Head>
			<main className={`${styles.main}`}>
				<h1 className={`${styles.heading}`}>Blog</h1>
				<div className={`${styles.container}`}>
					<Link href="/blog/one-year-as-a-software-engineer">
						<a>
						<section className={`${styles.blog_post}`}>
							<h2 className={`${styles.blog_title}`}>One Year As A Software Engineer</h2>
							<p className={`${styles.publish_date}`}>Published on : <time dateTime="2022-01-05">5th January, 2022</time></p>
							<p className={`${styles.summary}`}>On 4th January, 2022 I completed one year as a software engineer. In this article, I have summarised some of my experiences and learnings.</p>
						</section>
						</a>
					</Link>
				</div>
			</main>
		</>
	)
}