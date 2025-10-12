import React, { useState } from 'react';
import styles from './Counter.module.css';
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Counter = () => {

    const [count, setCount] = useState(0);

    const navigate = useNavigate();


    return (
        <div className={styles.container}>

            <div onClick={() => navigate('/')} className={styles.backArrow}>
                <TiArrowBack className={styles.backArrowIcon} />
            </div>

            <div className={styles.counterContainer}>
                <button onClick={() => setCount(count + 1)} className={`${styles.btn} ${styles.plus}`}>+</button>
                <p className={styles.desc}> <span>Count:</span> {count} </p>
                <button onClick={() => setCount(count - 1)} className={`${styles.btn} ${styles.minus}`}>-</button>
            </div>
        </div>
    );
};

export default Counter;