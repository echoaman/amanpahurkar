import { createContext, useState, useEffect } from "react";
import Nav from "../Components/Nav";
import styles from "../styles/Layout.module.css";
import NavController from "../Components/NavController";

export const AppContext = createContext();

export default function Layout({ children }) {
    const [navInvisible, setNavInvisible] = useState(true);
    const [hasClipboard, setHasClipBoard] = useState(true);

    useEffect(() => {
        if(navigator.clipboard) {
            setHasClipBoard(true);
        } else {
            setHasClipBoard(false);
        }
    }, []);

    const context = { navInvisible, setNavInvisible, hasClipboard };

    return (
        <AppContext.Provider value={context}>
            <Nav />
            <div className={styles.container}>
                { children }
                <NavController />
            </div>
        </AppContext.Provider>
    )
}