import React, { useEffect, useState } from 'react';
import "../Category/Category.css";
// import { category } from '../../assets/Api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import CategorySkeleton from '../Skeleton/CategorySkeleton';

const Category = ({ loading, setLoading }) => {
    const URL = import.meta.env.VITE_API_URL;
    const [categoryData, setCategoryData] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`${URL}/category`);
                setCategoryData(response.data)
                setLoading(false)
                console.log(response.data);
            } catch (error) {
                console.log("Error fetching in data", error);
                setError(true)
            }
        }
        fetchCategory()
    }, [])

    return (
        <>
            <section className="category-section">
                <div className="container">
                    <div className="row">
                        {loading || error ? (
                            Array.from({ length: 3 }).map((_, index) => (
                                <div className="col-md-4" key={index}>
                                    <CategorySkeleton />
                                </div>
                            ))
                        ) : (
                            categoryData.map((data, index) => (
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
                            ))
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Category
