import React from 'react';
import Modal from 'react-bootstrap/Modal';
import "../Products/ProductModal.css"
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaFacebookSquare } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaSquarePinterest } from 'react-icons/fa6';
import { Button } from "react-bootstrap";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi2';

const ProductModal = (props) => {

    const { modal, setModal, details, ...modalProps } = props
    return (
        <>
            <Modal
                {...modalProps}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modal'
            >
                <Modal.Header closeButton />
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="image">
                                <img src={details.image} alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="details">
                                <h4>{details.title}</h4>
                                <h5>{details.category}</h5>
                                <h6>Rs.{details.price}</h6>
                                <p>{details.description}</p>
                            </div>

                            <div className="quantitybtn-icons">
                                <div className="quantity-btns">
                                    <span><HiOutlineMinusCircle /></span>
                                    <span>0</span>
                                    <span><HiOutlinePlusCircle /></span>
                                </div>
                                <div className="cart-btn">
                                    <Button>Add to Cart<RiShoppingCartFill /></Button>
                                </div>
                                <div className="favourite">
                                    <AiOutlineHeart size={30} />
                                </div>
                            </div>

                            {/* mobile-quantitybtn-icons */}

                            <div className="mobile-quantitybtn-icons">
                                <div className="quantity-btns-favourite">
                                    <div className="quantity-btns">
                                        <span><HiOutlineMinusCircle /></span>
                                        <span>0</span>
                                        <span><HiOutlinePlusCircle /></span>
                                    </div>
                                    <div className="favourite">
                                        <AiOutlineHeart size={30} />
                                    </div>
                                </div>
                                <div className="cart-btn">
                                    <Button>Add to Cart<RiShoppingCartFill /></Button>
                                </div>
                            </div>

                            <div className="social-media-icons">
                                <ul>
                                    <li><FaFacebookSquare /></li>
                                    <li><PiInstagramLogoFill /></li>
                                    <li><FaSquarePinterest /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default ProductModal
