import React, { useState } from 'react';
import styles from './GalleryApp.module.css';

// icon 
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

// images
import img1 from '../assets/GalleryAppAssests/gallery1.jpg';
import img2 from '../assets/GalleryAppAssests/gallery2.jpg';
import img3 from '../assets/GalleryAppAssests/gallery3.webp';
import img4 from '../assets/GalleryAppAssests/gallery4.png';
import img5 from '../assets/GalleryAppAssests/gallery5.jpg';

const GalleryApp = () => {

    const galleryDetails = [
        { image: img1, year: 2025, title: 'Jujutsu Kaisen', desc: 'Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami.' },
        { image: img2, year: 2025, title: 'Jujutsu Kaisen', desc: 'Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami.' },
        { image: img3, year: 2023, title: 'Love Anime', desc: 'Love anime is a Japanese manga and its popular for love and romance.' },
        { image: img4, year: 2022, title: 'The fragnant flower blooms with dignity', desc: 'Its a love and romance anime which beautifully expressed feelings thourgh the characters.' },
        { image: img5, year: 2024, title: 'One piece', desc: 'One piece is a Japanese manga well known by Luffy and Zoro.' },
    ];

    const years = ['2025', '2024', '2023', '2022', '2021'];

    const [selectedYears, setselectedYears] = useState([]);
    const [showModal, setshowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [backArrowDisplay, setbackArrowDisplay] = useState(true);
    const [nextArrowDisplay, setnextkArrowDisplay] = useState(true);

    function handleCategoryChange(year) {
        if (selectedYears.includes(year)) {
            setselectedYears(selectedYears.filter((c) => c !== year));
        } else {
            setselectedYears([...selectedYears, year]);
        }
    };

    const filteredItems = galleryDetails.filter((item) => {
        const matchesCategory = selectedYears.length === 0 || selectedYears.includes(item.year.toString());
        return matchesCategory;
    });

    const clearSelection = () => {
        setselectedYears([]);
    };

    return (
        <div className={styles.GalleryAppContainer}>
            <h1>Gallery App</h1>
            <div className={styles.filers}>
                {years.map((year) => (
                    <label className={styles.filterLabel}>
                        <input type="checkbox" onChange={() => handleCategoryChange(year)} checked={selectedYears.includes(year)} />
                        {year}
                    </label>
                ))}

                <button className={styles.clearBtn} onClick={clearSelection}>
                    {selectedYears.length > 1 ? 'Clear selections' : 'Clear selection'}
                </button>
            </div>

            <div className={styles.gallery}>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <div onClick={() => setshowModal(true)} key={index} className={styles.galleryCard}>
                            <img className={styles.galleryImg} src={item.image} alt="" />
                            <div>
                                <h3>{item.title}</h3>
                                <p><span>Year: </span> {item.year}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className={styles.noResults}>❌ No items found</p>
                )}
            </div>

            {showModal && <div className={styles.modal}>
                <div className={styles.imageContainer}>
                    <img src={galleryDetails[currentIndex].image} alt="" className={styles.modalImg} />
                </div>
                <div className={styles.textContainer}>
                    <h3><span>Title: </span>{galleryDetails[currentIndex].title}</h3>
                    <p><span>Description: </span>{galleryDetails[currentIndex].desc}</p>
                    <p><span>Year: </span>{galleryDetails[currentIndex].year}</p>
                    <div>
                        {galleryDetails[currentIndex] === 0 ? null : <IoMdArrowDropleft className={`${styles.leftArrow} ${styles.arrowIcon}`} onClick={() => setCurrentIndex(currentIndex - 1)} />}
                        <IoMdArrowDropright className={`${styles.rightArrow} ${styles.arrowIcon}`} onClick={() => { setCurrentIndex(currentIndex + 1) }} />
                    </div>
                    <span onClick={() => setshowModal(!showModal)} className={styles.crossIcon}>✕</span>
                </div>
            </div>
            }

        </div>
    );
};

export default GalleryApp;