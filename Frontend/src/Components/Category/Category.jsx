import React, { useState } from 'react';
import "../Category/Category.css";
import { category } from '../../assets/Api';
import { Link } from 'react-router-dom';

const Category = () => {
    const [categoryData, setCategoryData] = useState(category)
    return (
        <>
            <section className="category-section">
                <div className="container">
                    <div className="row">
                    {categoryData.map((data, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="category-card">
                                <img src={data.image} alt="" />
                                <div className="content">
                                    <h4>{data.title}</h4>
                                    <p>{data.season}</p>
                                </div>
                                <div className="shop-now-hover">
                                    <Link>shop now</Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category
