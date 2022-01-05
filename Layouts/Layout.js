import { createContext, useState } from "react";
import Nav from "../Components/Nav";
import styles from "../styles/Layout.module.css";
import NavController from "../Components/NavController";

export const AppContext = createContext();

export default function Layout({ children }) {
	const [navInvisible, setNavInvisible] = useState(true);

	const context = { navInvisible, setNavInvisible };

	return (
		<AppContext.Provider value={context}>
			<Nav />
			<div className={`${styles.container}`}>
				{ children }
				<NavController />
			</div>
		</AppContext.Provider>
	)
}