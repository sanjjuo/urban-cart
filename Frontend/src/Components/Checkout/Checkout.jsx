import React from 'react'
import "../Checkout/Checkout.css"

const Checkout = () => {
    return (
        <>
            <div className="checkout-section">
                <h1>Delivery information</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <form action="">
                                <div className="multi-field">
                                    <input type="text" name="name" id="name" placeholder='First Name' />
                                    <input type="text" name="name" id="name" placeholder='Last Name' />
                                </div>
                                <input type="email" name="email" id="email" placeholder='Enter your Email' />
                                <input type="text" name="place" id="place" placeholder='Enter your Place' />
                                <div className="multi-field">
                                    <input type="text" name="city" id="city" placeholder='Enter your City' />
                                    <input type="text" name="state" id="state" placeholder='Enter your State' />
                                </div>
                                <div className="multi-field">
                                    <input type="text" name="code" id="code" placeholder='Enter your Zip Code' />
                                    <input type="text" name="country" id="country" placeholder='Enter your Country' />
                                </div>
                                <input type="number" name="number" id="number" placeholder='Enter your Number' />
                            </form>
                        </div>
                        <div className="col-md-4">
                            <div className="payment-part">
                                <h3>Cart Totals</h3>
                                <ul>
                                    <li><span>Subtotal</span><span>Rs.550</span></li>
                                    <li><span>Delivery Fee</span><span>Rs.100</span></li>
                                    <li><span>Total</span><span>Rs.650</span></li>
                                </ul>
                                <button type="button">Proceed to Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
