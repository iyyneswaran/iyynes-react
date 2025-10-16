import React from 'react'
import styles from './Landing.module.css'
import { useNavigate } from 'react-router-dom'

// images 
import img1 from '../assets/SearchFilterAssets/apple.jpg'

// icons 
import { LuToggleLeft } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { LuImages } from "react-icons/lu";
import { TiStarOutline } from "react-icons/ti";

const Landing = () => {

    const navigate = useNavigate();

    const pages = [
        { id: 1, name: 'Toggle Text', route: '/toggletext', image: '', icon: <LuToggleLeft className={styles.icon} /> },
        { id: 2, name: 'Color changer', route: '/color', image: '', icon: <IoColorPaletteOutline className={styles.icon} /> },
        { id: 3, name: 'Insta post UI', route: '/post', image: '', icon: <FaInstagram className={styles.icon} /> },
        { id: 4, name: 'Search filter', route: '/searchfilter', image: '', icon: <IoSearchSharp className={styles.icon} /> },
        { id: 5, name: 'Gallery App', route: '/gallery', image: '', icon: <LuImages className={styles.icon} /> },
        { id: 6, name: 'Star rating', route: '/rating', image: '', icon: <TiStarOutline className={styles.icon} /> },
    ]

    return (
        <div className={styles.container}>
            <h1><span>Hi👋🏻 I'm Iyynes! </span>Welcome to my practise world!</h1>
            <p>Click over it and visit look over my works</p>
            <div className={styles.projectContainer}>
                {pages.map((item, index) => (
                    <div key={index} onClick={() => navigate(item.route)}>
                        {/* <img src={item.image} alt="" /> */}
                        {item.icon}
                        <h3>{item.name}</h3>
                        {/* <p>{item.desc}</p> */}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Landing