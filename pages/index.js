import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import ImageProvider from "../Components/ImageProvider";
import updateScrollbar from "../scripts/scrollbar";
import styles from "../styles/Home.module.css";

export default function Home() {
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
	}, [])

	return (
		<>
			<Head>
				<title>Aman Pahurkar | Software Engineer</title>
				<link rel="canonical" href="https://amanpahurkar.vercel.app" />
				<meta name="description" content="I am Aman Pahurkar and welcome to my personal website! I work at CarWale as an Associate Software Development Engineer. Feel free to reach out to me!" />
				<meta name="keywords" content="Aman Pahurkar, software engineer, personal website" />
			</Head>
			<main className={`${styles.main}`}>
				<h1 className={`${styles.heading}`}>Aman Pahurkar</h1>
				<div className={`${styles.container}`}>
					<ImageProvider imgName="profilepic.webp" width={300} height={300} alt="Image of Aman Pahurkar" />
					<p className={`${styles.about}`}>Hello! I am a software engineer with about {approxExp()} months of experience. Currently I am working at <strong><a title="CarWale" href="https://carwale.com" target="_blank" rel="noopener noreferrer">CarWale</a></strong> as an associate software development engineer. Prior to this, I was an intern at CarWale. Reach out to me via LinkedIn or mail.</p>
				</div>
			</main>
		</>
	)
}
