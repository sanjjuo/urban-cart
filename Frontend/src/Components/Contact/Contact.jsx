import React from 'react'
import "../Contact/Contact.css"
import { Button } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <>
            <section className="contact-section">
                <div className="heading-with-image">
                    <h1>Contact</h1>
                </div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut"
                        }}
                        className="contact-form-address">
                        <div className="contact-form">
                            <h1>Send us a message!</h1>
                            <form action="">
                                <input type="email" placeholder='Your Email Address' />
                                <textarea name="textarea" id="" placeholder='How Can We Help?' rows={8}></textarea>
                                <Button>Submit</Button>
                            </form>
                        </div>
                        <div className="address-section">
                            <ul>
                                <li>
                                    <div className="icon">
                                        <IoLocationOutline />
                                    </div>
                                    <div className="details">
                                        <h3>Address</h3>
                                        <p>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <BsTelephone />
                                    </div>
                                    <div className="details">
                                        <h3>Lets's Talk</h3>
                                        <p style={{ color: "#717fe0" }}>+1 800 1236879</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <BsEnvelope />
                                    </div>
                                    <div className="details">
                                        <h3>Sale Support</h3>
                                        <p style={{ color: "#717fe0" }}>contact@example.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Contact