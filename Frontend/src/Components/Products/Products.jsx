import React, { useEffect, useState } from 'react';
import "../Products/Products.css";
import { FaFilter } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
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
import axios from 'axios';


const Products = ({ loading, setLoading, addToCart }) => {

    const URL = import.meta.env.VITE_API_URL;
    const [productData, setProductData] = useState([]);
    const [filter, setFilter] = useState(productData)
    const [modal, setModal] = useState(false);
    const [details, setDetails] = useState({});
    const [link, setLink] = useState("all");
    const [show, setShow] = useState(false);
    const [heart, setHeart] = useState(false)
    const [shuffledProducts, setShuffledProducts] = useState([]);

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${URL}/products`);
                setProductData(response.data);
                setFilter(response.data);
                console.log(response.data);

                // Shuffle products once and set state
                const shuffled = response.data.sort(() => Math.random() - 0.5);
                setShuffledProducts(shuffled);

            } catch (error) {
                console.log("Error fetching in data", error);

            }
        }
        fetchProducts();

        const timer = setTimeout(() => {
            setLoading(false); //stops after 2 sec
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    //modal handle

    const handleDetails = (product) => {
        setModal(true);
        setDetails(product);
    };

    // filter category

    const filterProducts = (category) => {
        setShow(false);
        setLink(category);

        const filteredData = productData.filter((product) => product.category === category);
        setFilter(filteredData);
    };

    // offcanvas handle

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // heart icon handle

    const handleFavourite = (dataFav) => {
        setHeart(dataFav,true)
        console.log(dataFav);
        
    }

    return (
        <>
            <section className="products-section" style={isHomePage ? { paddingTop: "50px" } : { paddingTop: "100px" }}>
                <div className="container">
                    {isHomePage && <h1>Product Overview</h1>}
                    <div className="products-filter-search-part">
                        <div className="products-filter">
                            <ul>
                                <li className={link === "all" ? "active" : ""} onClick={() => setFilter(productData)}>All Products</li>
                                <li className={link === "men's clothing" ? "active" : ""} onClick={() => filterProducts("men's clothing")}>Men</li>
                                <li className={link === "women's clothing" ? "active" : ""} onClick={() => filterProducts("women's clothing")}>Women</li>
                                <li className={link === "shoes" ? "active" : ""} onClick={() => filterProducts("shoes")}>Shoes</li>
                                <li className={link === "watches" ? "active" : ""} onClick={() => filterProducts("watches")}>Watches</li>
                            </ul>
                        </div>
                        <div className="filter-search">
                            <ul>
                                <li><FaFilter size={16} />Filter</li>
                                <li><IoMdSearch size={20} />Search</li>
                            </ul>
                        </div>
                    </div>

                    {/* mobile-products-filter-search-part */}

                    <div className="mobile-products-filter-search-part">
                        <div className="filter-search">
                            <ul>
                                <li onClick={handleShow}><FaFilter size={15} />Filter</li>
                                <li><IoMdSearch size={20} />Search</li>
                            </ul>
                        </div>
                        <Offcanvas show={show} onHide={handleClose} placement='end'>
                            <Offcanvas.Header closeButton >
                                <Offcanvas.Title>FILTER</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className="category-filter">
                                    <h3>Category</h3>
                                    <ul>
                                        <li onClick={() => setFilter(productData)}><PiShirtFoldedFill size={18} />All products</li>
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
                            {shuffledProducts.length > 0 ? (
                                filter.map((data, index) => (
                                    <div className="col-md-3" key={index}>
                                        {loading && <CardSkeleton cards={20} />}
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            className="card">
                                            <div className="image">
                                                <img src={data.image} alt={data.title} />
                                                <ul className="icons">
                                                    <li onClick={() => addToCart(data)}><RiShoppingCartFill /></li>
                                                    <li onClick={() => handleDetails(data)}><FaRegEye /></li>
                                                </ul>
                                            </div>
                                            <div className="title-price-favourite">
                                                <div className="title-price">
                                                    <h5>{data.title}</h5>
                                                    <p>Rs.{data.price}</p>
                                                </div>
                                                <div className="favourite" onClick={()=>handleFavourite(data)}>
                                                    {!heart ? <GoHeart className="icon" /> :
                                                        <GoHeartFill className="icon" />}
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
