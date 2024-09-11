import React from 'react'
import "../Favourite/Favourite.css"
import { GoHeart } from 'react-icons/go'
import { RiShoppingCartFill } from 'react-icons/ri'
import { FaRegEye } from 'react-icons/fa'

const Favourite = ({ fav }) => {
    return (
        <>
            <section className="favourite-section">
                <h1>My Wishlist <GoHeart /></h1>
                <div className="container">
                    <div className="row">
                        {fav.map((item, index) => (
                            <div className="col-md-3">
                                <div className="favorite-card">
                                    <div className="image">
                                        <img src={item.image} alt={item.title} />
                                        <ul className="icons">
                                            <li><RiShoppingCartFill /></li>
                                            <li><FaRegEye /></li>
                                        </ul>
                                    </div>
                                    <div className="title-price">
                                        <h5>{item.title}</h5>
                                        <p>Rs. {item.price}</p>
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

export default Favourite
