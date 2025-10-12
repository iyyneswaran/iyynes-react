import React, { useState } from 'react';
import styles from './Color.module.css';
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";


const ColorBox = () => {

    const colors = ["green", "red", "orange", "black"];

    const [color, setColor] = useState('white');

    const navigate = useNavigate();


    return (
        <div className={styles.container}>

            <div onClick={() => navigate('/')} className={styles.backArrow}>
                <TiArrowBack className={styles.backArrowIcon} />
            </div>


            <div className={styles.colorContainer}>
                <h1 className={styles.header}>🎨 Color Changer</h1>

                <div className={styles.colorBox} style={{ backgroundColor: color }}>
                    <p style={{ color: 'white' }}>{color}</p>
                </div>

                <p>Choose Color:</p>

                <div className={styles.btnContainer}>
                    {colors.map((color) => (
                        <button key={color} className={styles[color]} onClick={() => setColor(color)}>
                            {color}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ColorBox;