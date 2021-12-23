import Head from "next/head";
import styles from "../../styles/Experience.module.css";

export default function Experience() {
	return (
		<>
			<Head>
				<title>Aman Pahurkar | Experience</title>
				<link rel="canonical" href="https://amanpahurkar.vercel.app/experience" />
				<meta name="description" content="You can find all the companies, the tech stacks and type of work I have done on this page." />
				<meta name="keywords" content="Experience, tech stack" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.heading}>Experience</h1>
				<section className={styles.experiences}>
					<article className={styles.exp}>
						<div className={styles.info}>
							<h2 className={styles.company}>CarWale</h2>
							<p className={styles.location}>Mumbai, India</p>
							<p className={styles.position}>Associate SDE</p>
							<p className={styles.duration}><time dateTime="2021-07">Jul/2021</time> - present</p>
						</div>
						<p className={styles.team}>CarTrade New Cars team</p>
						<ul>
							<li>Migrated pages from PHP codebase to <strong>.NET</strong></li>
							<li>Delivered multiple core New Cars pages: <strong>Home page, Colours page, Images page, Content Listing page, News Details page, User Reviews page, Mileage page, Compare landing and details page, New Cars page, etc.</strong></li>
							<li>Worked on <strong>desktop, mobile and AMP</strong> views</li>
							<li>Constantly worked on <strong>improving the core web vitals and SEO</strong> of the migrated pages</li>
						</ul>
						<p className={styles.tech_stack}><strong>Tech Stack - .NET, gRPC, MySQL, HTML/SCSS/JS</strong></p>
					</article>
					<article className={styles.exp}>
						<div className={styles.info}>
							<h2 className={styles.company}>CarWale</h2>
							<p className={styles.location}>Mumbai, India</p>
							<p className={styles.position}>Intern</p>
							<p className={styles.duration}><time dateTime="2021-01">Jan/2021</time> - <time dateTime="2021-06">Jun/2021</time></p>
						</div>
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
					</article>
				</section>
				<button className={styles.resume}>Resume <svg className={styles.resume_icon} xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" fill="var(--purple)"><path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm2 13h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm6-12a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 6h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-3h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm.5-6h2A1.5 1.5 0 0 1 9 4.5v2A1.5 1.5 0 0 1 7.5 8h-2A1.5 1.5 0 0 1 4 6.5v-2A1.5 1.5 0 0 1 5.5 3z"></path></svg></button>
			</main>
		</>
	)
}