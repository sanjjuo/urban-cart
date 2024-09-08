import React, { useEffect, useState } from 'react';
import "../Blog/Blog.css";
import { blogs } from '../../assets/Api';
import { IoMdSearch } from "react-icons/io";
import BlogSkeleton from '../Skeleton/BlogSkeleton';

const Blog = ({loading, setLoading}) => {
    const [blogData, setBlogData] = useState(blogs)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
    
        // Cleanup function to clear the timer if the component unmounts
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
                                {loading && <BlogSkeleton blog={3}/>}
                                {blogData.map((data, index) => (
                                    <div className="blog" key={index}>
                                        <div className="image">
                                            <img src={data.image} alt="" />
                                            <p>{data.date}</p>
                                        </div>
                                        <div className="details">
                                            <h3>{data.title}</h3>
                                            <p>{data.description}</p>
                                        </div>
                                    </div>
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
