import React, { useEffect, useState } from 'react';
import "../Category/Category.css";
// import { category } from '../../assets/Api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const Category = () => {
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get("http://localhost:4000/category");
                setCategoryData(response.data)
                console.log(response.data);
            } catch (error) {
                console.log("Error fetching in data", error);
                
            }
        }
        fetchCategory()
    }, [])

    return (
        <>
            <section className="category-section">
                <div className="container">
                    <div className="row">
                        {categoryData.map((data, index) => (
                            <div className="col-md-4" key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="category-card">

                                    <img src={data.image} alt="" />
                                    <div className="content">
                                        <motion.h4
                                            initial={{ opacity: 0, y: -150 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                        >{data.title}</motion.h4>

                                        <motion.p
                                            initial={{ opacity: 0, y: 150 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                        >{data.season}</motion.p>
                                    </div>
                                    <div className="shop-now-hover">
                                        <Link>shop now</Link>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category
