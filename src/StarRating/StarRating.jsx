import React, { useState } from 'react'
import styles from './StarRating.module.css'
import { useNavigate } from "react-router-dom";


// icons 
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline, TiArrowBack } from "react-icons/ti";


const StarRating = () => {

    const [rating, setRating] = useState(0);
    const navigate = useNavigate();


    return (
        <div className={styles.container}>

            <div onClick={() => navigate('/')} className={styles.backArrow}>
                <TiArrowBack className={styles.backArrowIcon} />
            </div>

            <div className={styles.rating}>
                <h1>Give your ratings</h1>
                <div>
                    {rating >= 1 ? <TiStarFullOutline className={styles.star} onClick={() => setRating(1)} /> : rating >= 0.5 ? <TiStarHalfOutline className={styles.star} onClick={() => setRating(1)} /> : <TiStarOutline className={styles.star} onClick={() => setRating(1)} />}
                    {rating >= 2 ? <TiStarFullOutline className={styles.star} onClick={() => setRating(2)} /> : rating >= 1.5 ? <TiStarHalfOutline className={styles.star} onClick={() => setRating(2)} /> : <TiStarOutline className={styles.star} onClick={() => setRating(2)} />}
                    {rating >= 3 ? <TiStarFullOutline className={styles.star} onClick={() => setRating(3)} /> : rating >= 2.5 ? <TiStarHalfOutline className={styles.star} onClick={() => setRating(3)} /> : <TiStarOutline className={styles.star} onClick={() => setRating(3)} />}
                    {rating >= 4 ? <TiStarFullOutline className={styles.star} onClick={() => setRating(4)} /> : rating >= 3.5 ? <TiStarHalfOutline className={styles.star} onClick={() => setRating(4)} /> : <TiStarOutline className={styles.star} onClick={() => setRating(4)} />}
                    {rating >= 5 ? <TiStarFullOutline className={styles.star} onClick={() => setRating(5)} /> : rating >= 4.5 ? <TiStarHalfOutline className={styles.star} onClick={() => setRating(5)} /> : <TiStarOutline className={styles.star} onClick={() => setRating(5)} />}
                </div>
                <p>Rating: <span>{rating}</span>/5</p>
            </div>
        </div>
    )
}

export default StarRating;