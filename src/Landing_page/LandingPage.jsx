import React from 'react'
import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';
// import landingAnimation from '../assets/LandingPageAssests/Card.webm'


const LandingPage = () => {
    return (
        <div className={styles.LandingPage}>
            <div>
                {/* <video
                    src={landingAnimation}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.heroAnimation}
                /> */}
                <h1>Things I have done</h1>
                <ul>
                    <li className={styles.links}><Link className={styles.links} to='/counter'>Counter App</Link></li>
                    <li className={styles.links}><Link className={styles.links} to='/toggletext'>Toggle Text component</Link></li>
                    <li className={styles.links}><Link className={styles.links} to='/color'>Color changer component</Link></li>
                    <li className={styles.links}><Link className={styles.links} to='/post'>Insta post UI</Link></li>
                    <li className={styles.links}><Link className={styles.links} to='/searchfilter'>Search filter</Link></li>
                    <li className={styles.links}><Link className={styles.links} to='/gallery'>Gallery App</Link></li>
                    <li className={styles.links}><Link className={styles.links} to='/rating'>Star rating</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default LandingPage;