import React, { useEffect, useState } from 'react'
import "../Products/Products.css"
import { CiFilter } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartFill } from "react-icons/ri";
import { PiArrowsClockwiseFill } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
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
import CardSkeleton from '../Skeleton/CardSkeleton';

const Products = ({loading, setLoading}) => {
    const [productData, setProductData] = useState(products);
    const [modal, setModal] = useState(false);
    const [details, setDetails] = useState({});
    const [link, setLink] = useState("all");
    const [show, setShow] = useState(false);

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        setTimeout(() => {
            setProductData(products)
            setLoading(false)
        }, 2000)
    }, [])

    const handleDetails = (product) => {
        setModal(true);
        setDetails(product);
    };

    // Function to filter products based on category
    const filterProducts = (category) => {
        setShow(false)
        setLink(category); // Set active link

        if (category === "all") {
            setProductData(products); // Show all products
        } else {
            const filteredData = products.filter((product) => product.category === category);
            setProductData(filteredData); // Show filtered products
        }
    };

    // offcanvas

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
                                <li><CiFilter />Filter</li>
                                <li><IoMdSearch />Search</li>
                            </ul>
                        </div>
                    </div>

                    {/* mobile responsive products-filter-search-part */}

                    <div className="mobile-products-filter-search-part">
                        <div className="menu-icon" onClick={handleShow}>
                            <IoMdMenu />
                        </div>
                        <div className="filter-search">
                            <ul>
                                <li><CiFilter />Filter</li>
                                <li><IoMdSearch />Search</li>
                            </ul>
                        </div>
                        <Offcanvas show={show} onHide={handleClose} placement='end'>
                            <Offcanvas.Header closeButton />
                            <Offcanvas.Body>
                                <ul className="category-items">
                                    <li onClick={() => filterProducts("all")}><PiShirtFoldedFill size={20} />All products</li>
                                    <li onClick={() => filterProducts("men's clothing")}><IoIosShirt size={25} />Men</li>
                                    <li onClick={() => filterProducts("women's clothing")}><GiAmpleDress size={25} />Women</li>
                                    <li onClick={() => filterProducts("shoes")}><GiBallerinaShoes size={25} />Shoes</li>
                                    <li onClick={() => filterProducts("watches")}><IoWatch size={25} />Watches</li>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>

                    <div className="products-cards">
                        <div className="row">
                                {productData.length > 0 ? (
                                    productData.sort(() => Math.random() - 0.5).map((data, index) => (
                                        <div className="col-md-3" key={index}>
                                            {loading && <CardSkeleton cards={20}/>}
                                            <div className="card">
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
                                            </div>
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
