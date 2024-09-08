import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import "../Navbar/Navbar.css";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingCartFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { FaBloggerB } from "react-icons/fa";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { PiPhoneCallFill } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';

const MyNavbar = () => {
    const [navlink, setNavLink] = useState("home")
    const [offcanvas, setOffCanvas] = useState(false)
    const navigate = useNavigate()

    const offCanvasOpen = () => {
        setOffCanvas(true)
    }

    const offCanvasClose = () => {
        setOffCanvas(false)
    }

    // to automatically close offcanvas when clicks on links
    const handlLinkOffcanvas = (path) =>{
        navigate(path)
        setOffCanvas(false)
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
                        <Link to='/' style={{color:"inherit", textDecoration:"none"}}><h3>URBAN<span>CART</span></h3></Link>
                    </div>
                    <div className="icons">
                        <ul>
                            <li><IoMdSearch /></li>
                            <li><RiShoppingCartFill /></li>
                            <li><AiOutlineHeart /></li>
                            <li onClick={offCanvasOpen}>{!offcanvas ? <GiHamburgerMenu /> : <FaXmark />}</li>
                        </ul>
                    </div>
                </div>
                <Offcanvas show={offcanvas} onHide={offCanvasClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul>
                            <li onClick={()=>handlLinkOffcanvas("/")}><FaHome/>Home</li>
                            <li onClick={()=>handlLinkOffcanvas("/shop")}><SiShopify/>Shop</li>
                            <li onClick={()=>handlLinkOffcanvas("/blog")}><FaBloggerB/>Blog</li>
                            <li onClick={()=>handlLinkOffcanvas("/about")}><BiSolidMessageRoundedError/>About</li>
                            <li onClick={()=>handlLinkOffcanvas("/contact")}><PiPhoneCallFill/>Contact</li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </section >
        </>

    )
}

export default MyNavbar
