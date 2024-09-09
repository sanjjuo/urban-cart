import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
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

const MyNavbar = () => {
    const [navlink, setNavLink] = useState("home")
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
                                    <li><RiShoppingCartFill /></li>
                                    <li><AiOutlineHeart /></li>
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>

            <section className="mobile-navbar-section">
                <div className="contents">
                    <div className="brand">
                        <Link to='/' style={{ color: "inherit", textDecoration: "none" }}><h3>URBAN<span>CART</span></h3></Link>
                    </div>
                    <div className="icons">
                        <ul>
                            <li><IoMdSearch /></li>
                            <li><RiShoppingCartFill /></li>
                            <li><AiOutlineHeart /></li>
                        </ul>
                    </div>
                </div>
            </section >
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
        </>

    )
}

export default MyNavbar
