import { useState, useRef, useContext } from "react";
import { AppContext } from "../Layouts/Layout";
import styles from "../styles/Codeblock.module.css";

export default function Codeblock({code, blockName}) {

    const [copied, setCopied] = useState(false);
    const preRef = useRef();
    const { hasClipboard } = useContext(AppContext);
    
    function copyCode() {
        navigator.clipboard.writeText(preRef.current.textContent);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    }

    return (
        <div className={styles.container}>
            {
                hasClipboard || blockName 
                ?
                <div className={styles.name_wrapper}>
                    { blockName ? <p className={styles.block_name}>{blockName}</p> : "" }
                    { hasClipboard ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={`${styles.copy_btn} ${copied ? styles.active : ""}`} onClick={() => copyCode()}><title>Copy code</title><path d="M384 96L384 0h-112c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48V128h-95.1C398.4 128 384 113.6 384 96zM416 0v96h96L416 0zM192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352z"/></svg> : "" }
                </div>
                : 
                ""
            }
            <code className={styles.codeblock}>
                <pre ref={preRef} dangerouslySetInnerHTML={{ __html : code }} />
            </code>
        </div>
    )
}