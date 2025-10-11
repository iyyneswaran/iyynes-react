import React, { useState } from 'react'
import styles from './ToggleText.module.css'

export default function ToggleText() {

    const [show, setShow] = useState(false);

    return (
        <div className={styles.container}>
            {show && <p className={styles.desc}>Hello bro! You are such a idiot</p>}
            <button className={styles.btn} onClick={() => setShow(!show)}>
                {show ? 'Hide Text' : 'Show Text'}
            </button>
        </div>
    )
};