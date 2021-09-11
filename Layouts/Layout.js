import { useState } from "react";
import styles from "../styles/Layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {

    const [navVisible, setNavVisible] = useState(false);

    function updateHamburger() {
        const hamburger = document.getElementById("hamburger");
        const nav = document.getElementById("nav");
        const overlay = document.getElementById("overlay");
        let intervalId = null;
 
        if(navVisible) {
            overlay.style.animation = "overlay-hide 0.3s linear forwards";
            nav.style.animation = "nav-hide 0.3s linear forwards";
        } else {
            overlay.style.animation = "overlay-show 0.3s linear forwards";
            nav.style.animation = "nav-show 0.3s linear forwards";
        }

        intervalId = setInterval(animate, 25);

        function animate() {
            if(navVisible) {
                if (hamburger.textContent === "><"){
                    hamburger.textContent = "|";
                } else if (hamburger.textContent === "|") {
                    hamburger.textContent = "<>";
                } else if (hamburger.textContent === "<>") {
                    hamburger.textContent = "<A>";
                } else if (hamburger.textContent === "<A>") {
                    hamburger.textContent = "<Am>";
                } else if (hamburger.textContent === "<Am>") {
                    hamburger.textContent = "<Ama>";
                } else if (hamburger.textContent === "<Ama>") {
                    hamburger.textContent = "<Aman>";
                } else if (hamburger.textContent === "<Aman>") {
                    hamburger.textContent = "<Aman >";
                } else if (hamburger.textContent === "<Aman >"){
                    hamburger.textContent = "<Aman />";
                } else if (hamburger.textContent === "<Aman />"){
                    clearInterval(intervalId);
                    setNavVisible(false);
                }
            } else {
                if (hamburger.textContent === "<Aman />"){
                    hamburger.textContent = "<Aman >";
                } else if (hamburger.textContent === "<Aman >") {
                    hamburger.textContent = "<Aman>";
                } else if (hamburger.textContent === "<Aman>") {
                    hamburger.textContent = "<Ama>";
                } else if (hamburger.textContent === "<Ama>") {
                    hamburger.textContent = "<Am>";
                } else if (hamburger.textContent === "<Am>") {
                    hamburger.textContent = "<A>";
                } else if (hamburger.textContent === "<A>") {
                    hamburger.textContent = "<>";
                } else if (hamburger.textContent === "<>") {
                    hamburger.textContent = "|";
                } else if (hamburger.textContent === "|"){
                    hamburger.textContent = "><";
                } else if (hamburger.textContent === "><") {
                    clearInterval(intervalId);
                    setNavVisible(true);
                }
            }
        }
    }

    return (
        <>
            <span id="hamburger" className={styles.hamburger} onClick={() => updateHamburger()}>&lt;Aman /&gt;</span>
            <div id="overlay" className={styles.overlay} onClick={() => updateHamburger()}></div>
            <nav id="nav" className={styles.nav}>
            <button className={styles.btn} onClick={() => updateHamburger()} title="Home">
                <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.home}><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg>
                </Link>
            </button>
                <div className={styles.container}>
                    <button className={styles.btn} onClick={() => updateHamburger()}>
                        <a href="mailto:amanpahurkar13@gmail.com">
                            Mail <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mail</title><path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                        </a>
                    </button>
                    <button className={styles.btn} onClick={() => updateHamburger()}>
                        <a href="https://linkedin.com/in/amanpahurkar" target="_blank" rel="noopener noreferrer">
                            LinkedIn <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                    </button>
                    <button className={styles.btn} onClick={() => updateHamburger()}>
                        <a href="https://github.com/echoaman" target="_blank" rel="noopener noreferrer">
                            GitHub <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="#000" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        </a>
                    </button>
                    <button className={styles.btn} onClick={() => updateHamburger()}>
                        <a href="/AmanPahurkar.pdf" target="_blank" rel="noopener noreferrer">
                            Resume <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" preserveAspectRatio="xMinYMin"><title>Resume</title><path fill="#000" d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm8 2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H3zm8-10a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z"></path></svg>
                        </a>
                    </button>
                    <button className={styles.btn} onClick={() => updateHamburger()}>
                        <Link href="/skills">
                            <a>Skills <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" preserveAspectRatio="xMinYMin"><path fill="#000" d="M2 13v1h3V2H2v9h1v2H2zM1 0h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm9 3h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v6h8V5h-8zm2 9h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z"></path></svg></a>
                        </Link>
                    </button>
                </div>
            </nav>
            { children }
        </>
    )
}