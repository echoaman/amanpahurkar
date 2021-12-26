import { useContext, useEffect } from "react";
import { AppContext } from "../Layouts/Layout";
import styles from "../styles/Hamburger.module.css";

export default function Hamburger() {

	const { navInvisible, setNavInvisible } = useContext(AppContext);
	
	function toggle() {
		const hamburger = document.getElementById("hamburger");
		hamburger.disabled = true;
		requestAnimationFrame(animate);

		function animate() {
			if(navInvisible) {
				// >< to <Aman />
				switch (hamburger.textContent) {
					case "><":
						hamburger.textContent = "|";
						requestAnimationFrame(animate);
						break;
					case "|":
						hamburger.textContent = "<>";
						requestAnimationFrame(animate);
						break;
					case "<>":
						hamburger.textContent = "<A>";
						requestAnimationFrame(animate);
						break;
					case "<A>":
						hamburger.textContent = "<Am>";
						requestAnimationFrame(animate);
						break;
					case "<Am>":
						hamburger.textContent = "<Ama>";
						requestAnimationFrame(animate);
						break;
					case "<Ama>":
						hamburger.textContent = "<Aman>";
						requestAnimationFrame(animate);
						break;
					case "<Aman>":
						hamburger.textContent = "<Aman >";
						requestAnimationFrame(animate);
						break;
					case "<Aman >":
						hamburger.textContent = "<Aman />";
						hamburger.disabled = false;
						break;
					default:
						hamburger.disabled = false;
						break;
				}
			} else {
				// <Aman /> to ><
				switch (hamburger.textContent) {
					case "<Aman />":
						hamburger.textContent = "<Aman >";
						requestAnimationFrame(animate);
						break;
					case "<Aman >":
						hamburger.textContent = "<Aman>";
						requestAnimationFrame(animate);
						break;
					case "<Aman>":
						hamburger.textContent = "<Ama>";
						requestAnimationFrame(animate);
						break;
					case "<Ama>":
						hamburger.textContent = "<Am>";
						requestAnimationFrame(animate);
						break;
					case "<Am>":
						hamburger.textContent = "<A>";
						requestAnimationFrame(animate);
						break;
					case "<A>":
						hamburger.textContent = "<>";
						requestAnimationFrame(animate);
						break;
					case "<>":
						hamburger.textContent = "|";
						requestAnimationFrame(animate);
						break;
					case "|":
						hamburger.textContent = "><";
						hamburger.disabled = false;
						break;
					default:
						hamburger.disabled = false;
						break;
				}
			}
		}
	}

	useEffect(() => {
		toggle();
	}, [navInvisible]);

	return(
		<button id="hamburger" className={`${styles.hamburger}`} onClick={() => setNavInvisible(!navInvisible)}>&lt;Aman /&gt;</button>
	)
}