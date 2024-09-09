import React from 'react'
import "../Footer/Footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquarePinterest } from "react-icons/fa6";
import { RiInputField } from 'react-icons/ri';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-parts">
                                <h5>categories</h5>
                                <ul>
                                    <li>Men</li>
                                    <li>Women</li>
                                    <li>Shoes</li>
                                    <li>Watches</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-parts">
                                <h5>Help</h5>
                                <ul>
                                    <li>Track Order</li>
                                    <li>Return</li>
                                    <li>Shipping</li>
                                    <li>FAQs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-parts">
                                <h5>get in touch</h5>
                                <ul>
                                    <li><p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York,
                                        NY 10018 or call us on (+1) 96 716 6879</p></li>
                                    <ul className='social-media-icons'>
                                        <li><FaFacebookSquare /></li>
                                        <li><PiInstagramLogoFill /></li>
                                        <li><FaSquarePinterest /></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-parts">
                                <h5>newsletter</h5>
                                <ul>
                                    <li><input type='email' placeholder='email@example.com' /></li>
                                    <li><Button>subscribe</Button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-last-part">
                        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with ❤️ by Mohamed Sanjeed</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Footer
