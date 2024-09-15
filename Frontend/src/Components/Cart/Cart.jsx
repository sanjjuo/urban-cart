import React from 'react'
import "../Cart/Cart.css"
import { RiShoppingCartLine } from "react-icons/ri";
import { Table } from 'react-bootstrap';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi2";

const Cart = ({ cart, handleRemove, handleDecrease, handleIncrease, totalPrice }) => {
    return (
        <>
            <div className="cart-section">
                <h1>My cart <RiShoppingCartLine /></h1>
                <div className="container">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <span>
                                            <span><img src={item.image} alt="" /></span>
                                            <span>
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                            </span>
                                        </span>
                                    </td>
                                    <td>Rs.{item.price}</td>
                                    <td>
                                        <ul>
                                            <li onClick={()=>handleDecrease(item.id)}><HiOutlineMinusCircle /></li>
                                            <li>{item.quantity}</li>
                                            <li onClick={()=>handleIncrease(item.id)}><HiOutlinePlusCircle /></li>
                                        </ul>
                                    </td>
                                    <td>Rs.{item.quantity * item.price}</td>
                                    <td onClick={()=>handleRemove(item)}><RiDeleteBin5Fill /></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Cart
