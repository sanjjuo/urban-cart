import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import "../Navbar/Navbar.css";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingCartFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { FaBloggerB } from "react-icons/fa";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { PiPhoneCallFill } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import { HiMiniXMark } from "react-icons/hi2";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { HiOutlineMinusCircle } from "react-icons/hi2";
import { RiDeleteBin5Fill } from "react-icons/ri";

const MyNavbar = ({ size, favSize, cart, handleRemove, handleDecrease, handleIncrease, totalPrice }) => {
    const [navlink, setNavLink] = useState("home")
    const [cartOffCanvas, setCartOffCanvas] = useState(false)
    const navigate = useNavigate()

    const handleLink = (path, link) => {
        navigate(path)
        setNavLink(link)
    }

    return (
        <>
            <section className='navbar-section'>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/"><span>URBAN</span>CART</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link as={Link} to="/" className={navlink === "home" ? "active" : ""} onClick={() => setNavLink("home")}>Home</Nav.Link>
                                <Nav.Link as={Link} to="/shop" className={navlink === "shop" ? "active" : ""} onClick={() => setNavLink("shop")}>Shop</Nav.Link>
                                <Nav.Link as={Link} to="/blog" className={navlink === "blog" ? "active" : ""} onClick={() => setNavLink("blog")}>Blog</Nav.Link>
                                <Nav.Link as={Link} to="/about" className={navlink === "about" ? "active" : ""} onClick={() => setNavLink("about")}>About</Nav.Link>
                                <Nav.Link as={Link} to="/contact" className={navlink === "contact" ? "active" : ""} onClick={() => setNavLink("contact")}>Contact</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto nav2">
                                <ul>
                                    <li><IoMdSearch /></li>
                                    <li onClick={() => setCartOffCanvas(true)}><RiShoppingCartFill /><span>{size}</span></li>
                                    <Link to="/favourite"><li><AiOutlineHeart /><span>{favSize}</span></li></Link>
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>

            {/* mobile-navbar-section */}

            <section className="mobile-navbar-section">
                <div className="contents">
                    <div className="brand">
                        <Link to='/' style={{ color: "inherit", textDecoration: "none" }}><h3>URBAN<span>CART</span></h3></Link>
                    </div>
                    <div className="icons">
                        <ul>
                            <li><IoMdSearch /></li>
                            <li onClick={() => setCartOffCanvas(true)}><RiShoppingCartFill /><span>{size}</span></li>
                            <Link to="/favourite" style={{color:"inherit"}}><li><AiOutlineHeart /><span>{favSize}</span></li></Link>
                        </ul>
                    </div>
                </div>
            </section >

            {/* bottom-mobile-navbar-menu */}

            <section className="bottom-mobile-navbar-menu">
                <ul>
                    <li onClick={() => handleLink("/", "home")} className={navlink === "home" ? "active" : ""}>
                        <FaHome size={23} />Home</li>
                    <li onClick={() => handleLink("/shop", "shop")} className={navlink === "shop" ? "active" : ""}>
                        <SiShopify size={23} />Shop</li>
                    <li onClick={() => handleLink("/blog", "blog")} className={navlink === "blog" ? "active" : ""}>
                        <FaBloggerB size={23} />Blog</li>
                    <li onClick={() => handleLink("/about", "about")} className={navlink === "about" ? "active" : ""}>
                        <BiSolidMessageRoundedError size={23} />About</li>
                    <li onClick={() => handleLink("/contact", "contact")} className={navlink === "contact" ? "active" : ""}>
                        <PiPhoneCallFill size={23} />Contact</li>
                </ul>
            </section>

            <Offcanvas show={cartOffCanvas} onHide={() => setCartOffCanvas(false)} scroll={true}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>YOUR CART</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cart.length > 0 ? (
                        cart.map((product, index) => (
                            <div className="added-items" key={index}>
                                <div className="image">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="details">
                                    <h4>{product.title}</h4>
                                    <ul>
                                        <li onClick={() => handleDecrease(product.id)}><HiOutlineMinusCircle /></li>
                                        <li>{product.quantity}</li>
                                        <li onClick={() => handleIncrease(product.id)}><HiOutlinePlusCircle /></li>
                                    </ul>
                                    <p>{product.quantity}<HiMiniXMark />₹{product.price} = ₹{product.quantity * product.price}</p>
                                </div>
                                <div className="remove-icon" onClick={() => handleRemove(product)}>
                                    <RiDeleteBin5Fill size={18} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='empty-cart'>
                            <img src="/images/sad.png" alt="" />Cart is empty!
                        </div>
                    )}
                </Offcanvas.Body>
                <div className="total-btns">
                    <div className="total"><h3>Total: <strong>Rs.{totalPrice}</strong></h3></div>
                    <div className="buttons">
                        <Button>VIEW CART</Button>
                        <Button>CHECKOUT</Button>
                    </div>
                </div>
            </Offcanvas>
        </>

    )
}

export default MyNavbar
