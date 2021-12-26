import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../Layouts/Layout";
import styles from "../styles/Nav.module.css";

export default function Nav() {

	const {navInvisible, setNavInvisible} = useContext(AppContext);

	return(
		<div className={`${styles.container} ${navInvisible ? styles.hide : ""}`}>
			<nav className={`${styles.nav}`}>
				<a href="https://linkedin.com/in/amanpahurkar/" target="_blank" rel="noopener noreferrer">
					<button className={`${styles.button} ${styles.linkedin}`} onClick={() => setNavInvisible(true)}>
						<svg className={`${styles.icon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle fill="var(--blue)" cx="4.983" cy="5.009" r="2.188"></circle><path fill="var(--blue)" d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
						<span className={`${styles.text}`}>LinkedIn</span>
					</button>
				</a>
				<a href="mailto:aman.pahurkar@spit.ac.in" target="_blank" rel="noopener noreferrer">
					<button className={`${styles.button} ${styles.mail}`} onClick={() => setNavInvisible(true)}>
						<svg className={`${styles.icon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="var(--red)" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
						<span className={`${styles.text}`}>Mail</span>
					</button>
				</a>
				<a href="https://github.com/echoaman" target="_blank" rel="noopener noreferrer">
					<button className={`${styles.button} ${styles.github}`} onClick={() => setNavInvisible(true)}>
						<svg className={`${styles.icon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="var(--white)" fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
						<span className={`${styles.text}`}>Github</span>
					</button>
				</a>
				<Link href="/experience">
					<a>
						<button className={`${styles.button} ${styles.experience}`} onClick={() => setNavInvisible(true)}>
							<svg className={`${styles.icon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="var(--purple)" d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path></svg>
							<span className={`${styles.text}`}>Experience</span>
						</button>
					</a>
				</Link>
			</nav>
		</div>
	)
}