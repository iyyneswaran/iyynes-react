import React, { useState } from 'react'
import styles from './ToggleText.module.css'
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export default function ToggleText() {

    const navigate = useNavigate();


    const [show, setShow] = useState(false);

    return (
        <div className={styles.container}>
            
            <div onClick={() => navigate('/')} className={styles.backArrow}>
                <TiArrowBack className={styles.backArrowIcon} />
            </div>

            {show && <p className={styles.desc}>Hello bro! You are such a idiot</p>}
            <button className={styles.btn} onClick={() => setShow(!show)}>
                {show ? 'Hide Text' : 'Show Text'}
            </button>
        </div>
    )
};