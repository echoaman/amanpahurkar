import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import updateScrollbar from "../../scripts/scrollbar";
import styles from "../../styles/BlogPost.module.css";

export default function BlogPost({ data }) {

	useEffect(() => {
		updateScrollbar("var(--orange)");
	}, []);

	const router = useRouter();
	const { slug } = router.query;

	function getKey() {
		return new Date().getTime() / 1000;
	}

	function getPara(val) {
		return <p dangerouslySetInnerHTML={{ __html: val}} key={getKey()} />
	}

	function getContent(jsonData) {
		for (const key in jsonData) {
			const val = jsonData[key];

			if(key === "p") {
				return getPara(val);
			}
		}
	}

	return (
		<>
			<Head>
				<title>{data.heading} | Aman Pahurkar</title>
				<link rel="canonical" href={`https://amanpahurkar.vercel.app/blog/${slug}`} />
				<meta name="description" content={data.desc} />
				<meta name="keywords" content="blog, blog post" />
			</Head>
			<main className={`${styles.main}`}>
				<h1 className={`${styles.heading}`}>{data.heading}</h1>
				<p className={`${styles.publishedOn}`}>Published On : <time dateTime={data.publishedOn.dateTime}>{data.publishedOn.date}</time></p>
				<article className={`${styles.post}`}>
					{ data.postContent.map(content => getContent(content)) }
				</article>
			</main>
		</>
	)
}

export async function getStaticProps({ params }) {
	const res = await fetch(`${process.env.DATA_SERVER}/api/${params.slug}.json`);
	const data = await res.json();
	return {
	  	props: { data },
		revalidate: 1200000
	}
}

export async function getStaticPaths() {
	const res = await fetch(`${process.env.DATA_SERVER}/api/blogSlugs.json`);
	const data = await res.json();

	const paths = data.map(path => {
		return { params: { slug: path } }
	});

	return {
		paths,
		fallback: "blocking"
	}
}