import React, { useState } from 'react'
import styles from './SearchFilter.module.css'
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

// images
import apple from '../assets/SearchFilterAssets/apple.jpg';
import carrot from '../assets/SearchFilterAssets/carrot.jpg';
import cheese from '../assets/SearchFilterAssets/cheese.jpg';
import chicken from '../assets/SearchFilterAssets/chicken.jpg';
import fish from '../assets/SearchFilterAssets/fish.webp';
import milk from '../assets/SearchFilterAssets/milk.jpg';
import banana from '../assets/SearchFilterAssets/pngtree-one-banana-png-image_19716948.png';
import tomato from '../assets/SearchFilterAssets/tomato.jpg';

const SearchFilter = () => {

    const navigate = useNavigate();

    const items = [
        { name: "Apple", category: "Fruit", image: apple },
        { name: "Banana", category: "Fruit", image: banana },
        { name: "Carrot", category: "Vegetable", image: carrot },
        { name: "Tomato", category: "Vegetable", image: tomato },
        { name: "Milk", category: "Dairy", image: milk },
        { name: "Cheese", category: "Dairy", image: cheese },
        { name: "Chicken", category: "Meat", image: chicken },
        { name: "Fish", category: "Meat", image: fish },
    ];

    const categories = ["Fruit", "Vegetable", "Dairy", "Meat"];

    const [query, setQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    function handleCategoryChange(category) {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const filteredItems = items.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
        return matchesSearch && matchesCategory;
    });

    const clearSelection = () => {
        setQuery('');
        setSelectedCategories([]);
    };

    return (
        <div className={styles.container}>

            <div onClick={() => navigate('/')} className={styles.backArrow}>
                <TiArrowBack className={styles.backArrowIcon} />
            </div>

            <h1>Search Filter</h1>
            <input onChange={(e) => setQuery(e.target.value)} value={query} type="text" placeholder="Search items..." className={styles.searchBar} />

            <div className={styles.filters}>
                {categories.map((category) => (
                    <label className={styles.filterLabel}>
                        <input type="checkbox" onChange={() => handleCategoryChange(category)} checked={selectedCategories.includes(category)} />
                        {category}
                    </label>
                ))}

                <button className={styles.clearBtn} onClick={clearSelection}>
                    {selectedCategories.length > 1 ? 'Clear selections' : 'Clear selection'}
                </button>
            </div>

            <div className={styles.listContainer}>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <div key={index} className={styles.itemCard}>
                            <img src={item.image} alt={item.name} />
                            <h4>{item.name}</h4>
                            <p>{item.category}</p>
                        </div>
                    ))
                ) : (
                    <p className={styles.noResults}>❌ No items found</p>
                )}
            </div>
        </div>
    );
};

export default SearchFilter;