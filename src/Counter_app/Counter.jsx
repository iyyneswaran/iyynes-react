import React, { useState } from 'react';
import styles from './Counter.module.css';

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div className={styles.counterContainer}>
            <button onClick={() => setCount(count + 1)} className={`${styles.btn} ${styles.plus}`}>+</button>
            <p className={styles.desc}> <span>Count:</span> {count} </p>
            <button onClick={() => setCount(count - 1)} className={`${styles.btn} ${styles.minus}`}>-</button>
        </div>
    );
};

export default Counter;