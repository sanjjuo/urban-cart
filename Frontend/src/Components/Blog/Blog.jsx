import React, { useEffect, useState } from 'react';
import "../Blog/Blog.css";
import { IoMdSearch } from "react-icons/io";
import BlogSkeleton from '../Skeleton/BlogSkeleton';
import { motion } from 'framer-motion';
import axios from 'axios';

const Blog = ({ loading, setLoading }) => {
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get("http://localhost:4000/blogs");
                setBlogData(response.data)
                console.log(response.data);

            } catch (error) {
                console.log("Error fetching data", error);

            }
        }
        fetchBlog()

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <section className="blog-section">
                <div className="heading-with-image">
                    <h1>Blog</h1>
                </div>
                <div className="blogs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                {loading && <BlogSkeleton blog={3} />}
                                {blogData.map((data, index) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="blog" key={index}>
                                        <div className="image">
                                            <img src={data.image} alt="" />
                                            <p>{data.date}</p>
                                        </div>
                                        <div className="details">
                                            <motion.h3
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5 }}
                                            >{data.title}</motion.h3>

                                            <motion.p
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5 }}
                                            >{data.description}</motion.p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="col-md-3">
                                <div className="search-bar">
                                    <input type="text" placeholder='Search' /><IoMdSearch size={25} color='#999999' />
                                </div>
                                <div className="categories">
                                    <h1>Categories</h1>
                                    <ul>
                                        <li>Fashion</li>
                                        <li>Beauty</li>
                                        <li>Street Style</li>
                                        <li>Life Style</li>
                                        <li>DIY & Crafts</li>
                                    </ul>
                                </div>
                                <div className="featured-products">
                                    <h1>Featured Products</h1>
                                    <div className="contents">
                                        <div className="image">
                                            <img src="/images/men1.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <h6>light blue shirt</h6>
                                            <p>Rs. 500</p>
                                        </div>
                                    </div>
                                    <div className="contents">
                                        <div className="image">
                                            <img src="/images/girl6.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <h6>Black short modern T-shirt</h6>
                                            <p>Rs. 450</p>
                                        </div>
                                    </div>
                                    <div className="contents">
                                        <div className="image">
                                            <img src="/images/men8.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <h6>light blue Hoodie</h6>
                                            <p>Rs. 799</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tags">
                                    <h1>Tags</h1>
                                    <ul>
                                        <li>Fashion</li>
                                        <li>Lifestyle</li>
                                        <li>Denim</li>
                                        <li>Streetstyle</li>
                                        <li>Crafts</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
