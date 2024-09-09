import React, { useEffect, useState } from 'react';
import "../Products/Products.css";
import { FaFilter } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartFill } from "react-icons/ri";
import { PiArrowsClockwiseFill } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { products } from '../../assets/Api'; // Assuming you have a products array in the API
import ProductModal from './ProductModal';
import { useLocation } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import { PiShirtFoldedFill } from "react-icons/pi";
import { IoIosShirt } from "react-icons/io";
import { GiAmpleDress } from "react-icons/gi";
import { GiBallerinaShoes } from "react-icons/gi";
import { IoWatch } from "react-icons/io5";
import { BsCircleFill } from "react-icons/bs";
import CardSkeleton from '../Skeleton/CardSkeleton';
import { motion } from 'framer-motion';

const Products = ({ loading, setLoading }) => {
    const [productData, setProductData] = useState(products);
    const [modal, setModal] = useState(false);
    const [details, setDetails] = useState({});
    const [link, setLink] = useState("all");
    const [show, setShow] = useState(false);

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const timer = setTimeout(() => {
            setProductData(products);
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [setLoading]);

    const handleDetails = (product) => {
        setModal(true);
        setDetails(product);
    };

    const filterProducts = (category) => {
        setShow(false);
        setLink(category);

        if (category === "all") {
            setProductData(products);
        } else {
            const filteredData = products.filter((product) => product.category === category);
            setProductData(filteredData);
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className="products-section" style={isHomePage ? { paddingTop: "50px" } : { paddingTop: "100px" }}>
                <div className="container">
                    {isHomePage && <h1>Product Overview</h1>}
                    <div className="products-filter-search-part">
                        <div className="products-filter">
                            <ul>
                                <li className={link === "all" ? "active" : ""} onClick={() => filterProducts("all")}>All Products</li>
                                <li className={link === "men's clothing" ? "active" : ""} onClick={() => filterProducts("men's clothing")}>Men</li>
                                <li className={link === "women's clothing" ? "active" : ""} onClick={() => filterProducts("women's clothing")}>Women</li>
                                <li className={link === "shoes" ? "active" : ""} onClick={() => filterProducts("shoes")}>Shoes</li>
                                <li className={link === "watches" ? "active" : ""} onClick={() => filterProducts("watches")}>Watches</li>
                            </ul>
                        </div>
                        <div className="filter-search">
                            <ul>
                                <li><FaFilter />Filter</li>
                                <li><IoMdSearch />Search</li>
                            </ul>
                        </div>
                    </div>

                    {/* mobile-products-filter-search-part */}

                    <div className="mobile-products-filter-search-part">
                        <div className="filter-search">
                            <ul>
                                <li><IoMdSearch size={20} />Search</li>
                                <li onClick={handleShow}><FaFilter size={20} />Filter</li>
                            </ul>
                        </div>
                        <Offcanvas show={show} onHide={handleClose} placement='end'>
                            <Offcanvas.Header closeButton >
                                <Offcanvas.Title>Filter</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className="category-filter">
                                    <h3>Category</h3>
                                    <ul>
                                        <li onClick={() => filterProducts("all")}><PiShirtFoldedFill size={18} />All products</li>
                                        <li onClick={() => filterProducts("men's clothing")}><IoIosShirt size={21} />Men</li>
                                        <li onClick={() => filterProducts("women's clothing")}><GiAmpleDress size={21} />Women</li>
                                        <li onClick={() => filterProducts("shoes")}><GiBallerinaShoes size={21} />Shoes</li>
                                        <li onClick={() => filterProducts("watches")}><IoWatch size={21} />Watches</li>
                                    </ul>
                                </div>
                                <div className="price-filter">
                                    <h3>Price</h3>
                                    <ul>
                                        <li>All</li>
                                        <li>Rs.100 - Rs.500</li>
                                        <li>Rs.500 - Rs.900</li>
                                        <li>Rs.900 - Rs.1200</li>
                                        <li>Rs.1200 - Rs.1500</li>
                                    </ul>
                                </div>
                                <div className="color-filter">
                                    <h3>Color</h3>
                                    <ul>
                                        <li><BsCircleFill size={16} color='black' />Black</li>
                                        <li><BsCircleFill size={16} color='blue' />Blue</li>
                                        <li><BsCircleFill size={16} color='grey' />Grey</li>
                                        <li><BsCircleFill size={16} color='green' />Green</li>
                                        <li><BsCircleFill size={16} color='red' />Red</li>
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>

                    <div className="products-cards">
                        <div className="row">
                            {productData.length > 0 ? (
                                productData.sort(() => Math.random() - 0.5).map((data, index) => (
                                    <div className="col-md-3" key={index}>
                                        {loading && <CardSkeleton cards={20} />}
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }} 
                                            className="card">
                                            <div className="image">
                                                <img src={data.image} alt={data.title} />
                                                <ul className="icons">
                                                    <li><RiShoppingCartFill /></li>
                                                    <li onClick={() => handleDetails(data)}><FaRegEye /></li>
                                                    <li><PiArrowsClockwiseFill /></li>
                                                </ul>
                                            </div>
                                            <div className="title-price-favourite">
                                                <div className="title-price">
                                                    <h5>{data.title}</h5>
                                                    <p>Rs.{data.price}</p>
                                                </div>
                                                <div className="favourite">
                                                    <AiOutlineHeart className="icon" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                ))
                            ) : (
                                <p>No products available for this category.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <ProductModal show={modal} onHide={() => setModal(false)} setModal={setModal} details={details} />
        </>
    );
};

export default Products;
