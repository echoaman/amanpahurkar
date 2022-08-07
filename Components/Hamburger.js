import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../Layouts/Layout";
import styles from "../styles/Hamburger.module.css";

export default function Hamburger() {

    const hamburgerRef = useRef();
    const { navInvisible, setNavInvisible } = useContext(AppContext);
    
    function toggle() {
        hamburgerRef.current.disabled = true;
        requestAnimationFrame(animate);

        function animate() {
            if(navInvisible) {
                // >< to <Aman />
                switch (hamburgerRef.current.textContent) {
                    case "><":
                        hamburgerRef.current.textContent = "|";
                        requestAnimationFrame(animate);
                        break;
                    case "|":
                        hamburgerRef.current.textContent = "<>";
                        requestAnimationFrame(animate);
                        break;
                    case "<>":
                        hamburgerRef.current.textContent = "<A>";
                        requestAnimationFrame(animate);
                        break;
                    case "<A>":
                        hamburgerRef.current.textContent = "<Am>";
                        requestAnimationFrame(animate);
                        break;
                    case "<Am>":
                        hamburgerRef.current.textContent = "<Ama>";
                        requestAnimationFrame(animate);
                        break;
                    case "<Ama>":
                        hamburgerRef.current.textContent = "<Aman>";
                        requestAnimationFrame(animate);
                        break;
                    case "<Aman>":
                        hamburgerRef.current.textContent = "<Aman >";
                        requestAnimationFrame(animate);
                        break;
                    case "<Aman >":
                        hamburgerRef.current.textContent = "<Aman />";
                        hamburgerRef.current.disabled = false;
                        break;
                    default:
                        hamburgerRef.current.disabled = false;
                        break;
                }
            } else {
                // <Aman /> to ><
                switch (hamburgerRef.current.textContent) {
                    case "<Aman />":
                        hamburgerRef.current.textContent = "<Aman >";
                        requestAnimationFrame(animate);
                        break;
                    case "<Aman >":
                        hamburgerRef.current.textContent = "<Aman>";
                        requestAnimationFrame(animate);
                        break;
                    case "<Aman>":
                        hamburgerRef.current.textContent = "<Ama>";
                        requestAnimationFrame(animate);
                        break;
                    case "<Ama>":
                        hamburgerRef.current.textContent = "<Am>";
                        requestAnimationFrame(animate);
                        break;
                    case "<Am>":
                        hamburgerRef.current.textContent = "<A>";
                        requestAnimationFrame(animate);
                        break;
                    case "<A>":
                        hamburgerRef.current.textContent = "<>";
                        requestAnimationFrame(animate);
                        break;
                    case "<>":
                        hamburgerRef.current.textContent = "|";
                        requestAnimationFrame(animate);
                        break;
                    case "|":
                        hamburgerRef.current.textContent = "><";
                        hamburgerRef.current.disabled = false;
                        break;
                    default:
                        hamburgerRef.current.disabled = false;
                        break;
                }
            }
        }
    }

    useEffect(() => {
        toggle();
    }, [navInvisible]);

    return(
        <button id="hamburger" ref={hamburgerRef} className={styles.hamburger} onClick={() => setNavInvisible(!navInvisible)}>&lt;Aman /&gt;</button>
    )
}