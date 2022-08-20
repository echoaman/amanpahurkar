import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useId } from "react";
import Codeblock from "../../Components/Codeblock";
import { AppContext } from "../../Layouts/Layout";
import updateScrollbar from "../../scripts/scrollbar";
import styles from "../../styles/BlogPost.module.css";

export default function BlogPost({ data }) {

    const { domain } = useContext(AppContext);

    useEffect(() => {
        updateScrollbar("var(--orange)");
    }, []);

    const router = useRouter();
    const { slug } = router.query;
    const id = useId();
    let idx = 0;

    function getPara(val) {
        return <p key={`${id}-${idx++}`} dangerouslySetInnerHTML={{ __html: val}} />
    }

    function getH2(val) {
        return <h2 key={`${id}-${idx++}`} dangerouslySetInnerHTML={{ __html: val}} />
    }

    function getH3(val) {
        return <h3 key={`${id}-${idx++}`} dangerouslySetInnerHTML={{ __html: val}} />
    }

    function getUl(items) {
        return <ul key={`${id}-${idx++}`}> { items.map(item => <li key={`${id}-${idx++}`} dangerouslySetInnerHTML={{ __html: item}} />) } </ul>
    }

    function getCodeblock(val) {
        return <Codeblock code={val.code} blockName={val.file} key={`${id}-${idx++}`} />
    }

    function getContent(jsonData) {
        for (const key in jsonData) {
            const val = jsonData[key];

            if(key === "p") {
                return getPara(val);
            }

            if(key === "h2") {
                return getH2(val);
            }

            if(key === "h3") {
                return getH3(val);
            }

            if(key === "ul") {
                return getUl(val);
            }

            if(key === "codeblock") {
                return getCodeblock(val);
            }

            return getPara("-- Parsing error 🤖--");
        }
    }

    function getJsonLd(heading = "", description = "", publishDate = "", coverImgPath = "") {
        return `{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://${domain}/blog/${slug}"
            },
            "headline": "${heading}",
            "image": "${process.env.NEXT_PUBLIC_CDN}${coverImgPath}",
            "description": "${description}",
            "author": {
                "@type": "Person",
                "name": "Aman Pahurkar",
                "url": "https://${domain}"
            },
            "datePublished": "${publishDate}"
        }`;
    }

    return (
        <>
            <Head>
                <title>{`${data.heading} | Aman Pahurkar`}</title>
                <link rel="canonical" href={`https://${domain}/blog/${slug}`} />
                <meta name="description" content={data.desc} />

                <meta property="og:title" content={`${data.heading} | Aman Pahurkar`} />
                <meta property="og:url" content={`https://${domain}/blog/${slug}`} />
                <meta property="og:description" content={data.desc} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_CDN}${data.coverImgPath || ""}`} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${data.heading} | Aman Pahurkar`} />
                <meta property="twitter:url" content={`https://${domain}/blog/${slug}`} />
                <meta name="twitter:description" content={data.desc} />
                <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_CDN}${data.coverImgPath || ""}`} />
                <meta property="twitter:domain" content={domain} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: getJsonLd(data.heading, data.desc, data.publishedOn.dateTime, data.coverImgPath)}} />
            </Head>
            <main>
                <h1 className={styles.heading}>{data.heading}</h1>
                <p className={styles.publishedOn}>Published on : <time dateTime={data.publishedOn.dateTime}>{data.publishedOn.date}</time></p>
                <article className={styles.post}>
                    { data.postContent.map(content => getContent(content)) }
                    <strong className={styles.thank_you}>Thank you for reading! 👋</strong>
                </article>
                { data.prevBlog || data.nextBlog 
                    ? 
                    <div className={styles.article_link_wrapper}>
                        { data.prevBlog ? <Link href={`/blog/${data.prevBlog.slug}`}><a className={`${styles.article_link} ${styles.prev_article}`} title={data.prevBlog.title}>{data.prevBlog.title}</a></Link> : ""}
                        { data.nextBlog ? <Link href={`/blog/${data.nextBlog.slug}`}><a className={`${styles.article_link} ${styles.next_article}`} title={data.nextBlog.title}>{data.nextBlog.title}</a></Link> : "" }
                    </div>
                    : ""
                }
            </main>
        </>
    )
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch(`${process.env.DATA_SERVER}/api/${params.slug}.json`);
        const data = await res.json();
        return {
            props: { data },
            revalidate: 90000
        }
    } catch (error) {
        console.error(error);
        return {
            props: {},
            revalidate: 60
        }
    }
}

export async function getStaticPaths() {
    try {
        const res = await fetch(`${process.env.DATA_SERVER}/api/blogSlugs.json`);
        const data = await res.json();
    
        const paths = data.map(path => {
            return { params: { slug: path } }
        });
    
        return {
            paths,
            fallback: "blocking"
        }
    } catch (error) {
        console.error(error);
        return {
            paths: {},
            fallback: "blocking"
        }
    }
}