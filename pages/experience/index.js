import Head from "next/head";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Layouts/Layout";
import updateScrollbar from "../../scripts/scrollbar";
import styles from "../../styles/Experience.module.css";

export default function Experience() {

    const { domain } = useContext(AppContext);

    useEffect(() => {
        updateScrollbar("var(--purple)");
    }, []);

    return (
        <>
            <Head>
                <title>Experience | Aman Pahurkar</title>
                <link rel="canonical" href={`https://${domain}/experience`} />
                <meta name="description" content="You can find all the companies, the tech stacks and type of work I have done on this page." />
            </Head>
            <main>
                <h1 className={styles.heading}>Experience</h1>
                <section className={styles.experiences}>
                    <article className={styles.exp}>
                        <section className={styles.info}>
                            <h2 className={styles.company}>CarTrade Tech</h2>
                            <p className={styles.location}>Mumbai, India</p>
                            <p className={styles.position}>SDE 1</p>
                            <p className={styles.duration}><time dateTime="2022-04">Apr/2022</time> - Present</p>
                        </section>
                        <section className={styles.content}>
                            <p className={styles.team}>CarTrade New Cars team</p>
                            <ul>
                                <li><strong>Developer of the Month, June 2022</strong> - Shared this award with a team mate. <strong>Fixed the bad Largest Contentful Paint (LCP) scores</strong> of Model AMP and few Make AMP pages which were reported in April. The source of the problem was unknown. We <strong>researched various techniques</strong> to improve LCP scores. We <strong>documented the implemented solutions and their sources</strong> and <strong>shared them with another team</strong>. June&apos;s <strong>average traffic was approximately 70.78% higher</strong> than May&apos;s and has been steadily increasing</li>
                                <li>CarTrade&apos;s organic <strong>traffic</strong> has increased to <strong>1.47 million sessions per month (approximate 126.15% increase)</strong> post revamp</li>
                                <li><strong>Mentored a new hire</strong> about web development and the practices followed in the company</li>
                                <li>Web pages have <strong>better ranking</strong> as they are <strong>more SEO friendly</strong> and have <strong>improved core web vitals</strong></li>
                            </ul>
                            <p className={styles.tech_stack}><strong>Tech Stack - .NET, HTML/SCSS/JS</strong></p>
                        </section>
                    </article>
                    <article className={styles.exp}>
                        <section className={styles.info}>
                            <h2 className={styles.company}>CarTrade Tech</h2>
                            <p className={styles.location}>Mumbai, India</p>
                            <p className={styles.position}>Associate SDE</p>
                            <p className={styles.duration}><time dateTime="2021-07">Jul/2021</time> - <time dateTime="2022-03">Mar/2022</time></p>
                        </section>
                        <section className={styles.content}>
                            <p className={styles.team}>CarTrade New Cars team</p>
                            <ul>
                                <li><strong>Delivered and revamped multiple core web pages</strong>: Home page, Colours page, Images page, Content Listing page, News Details page, User Reviews page, Mileage page, Compare landing and details page, New Cars landing page, Dealer landing and listing pages, Blog listing and content page, etc.</li>
                                <li>Worked on <strong>desktop, mobile and AMP</strong> views</li>
                            </ul>
                            <p className={styles.tech_stack}><strong>Tech Stack - .NET, HTML/SCSS/JS</strong></p>
                        </section>
                    </article>
                    <article className={styles.exp}>
                        <section className={styles.info}>
                            <h2 className={styles.company}>CarTrade Tech</h2>
                            <p className={styles.location}>Mumbai, India</p>
                            <p className={styles.position}>Intern</p>
                            <p className={styles.duration}><time dateTime="2021-01">Jan/2021</time> - <time dateTime="2021-06">Jun/2021</time></p>
                        </section>
                        <section className={styles.content}>
                            <p className={styles.team}>CarTrade New Cars team</p>
                            <ul>
                                <li>Migrated codebase from PHP to <strong>.NET</strong></li>
                                <li>Developed a <strong>consumer for RabbitMQ to sync user reviews</strong> between old PHP system and current .NET system</li>
                            </ul>
                            <p className={styles.team}>Hacktivate 3.0 Synthesis</p>
                            <ul>
                                <li>A hackathon exclusively for CarWale employees. My team&apos;s topic was <strong>TRAI SMS template system</strong></li>
                                <li>Created a <strong>paginated dashboard</strong> and <strong>developed a new RPC</strong> in Templates microservice which fetches metadata of the existing templates</li>
                            </ul>
                            <p className={styles.team}>CarWale Prices team</p>
                            <ul>
                                <li>Integrated BikeWale related operations into <strong>5</strong> CarWale operation panels. Each panel serves an <strong>unique</strong> purpose</li>
                                <li>Involved in bug fixing, creating new RPC endpoints or refactoring existing ones in Prices microservice to support BikeWale related operations</li>
                            </ul>
                            <p className={styles.tech_stack}><strong>Tech Stack - .NET, gRPC, MySQL, HTML/CSS/JS</strong></p>
                        </section>
                    </article>
                </section>
                <a href="/AmanPahurkar.pdf" target="_blank" rel="noopener noreferrer" title="Resume">
                    <button className={styles.resume}>Resume <svg className={styles.resume_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--purple)"><path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path><path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path></svg></button>
                </a>
            </main>
        </>
    )
}