import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MyNavbar from './Components/Navbar/Navbar'
import Pages from './Pages'
import Footer from './Components/Footer/Footer'
import Products from './Components/Products/Products'
import Blog from './Components/Blog/Blog'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import { SkeletonTheme } from 'react-loading-skeleton'
import ScrollToTop from './ScrollToTop';
import { BsFillCartCheckFill } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';

const AppRoutes = () => {
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    //add to cart

    const addToCart = (item) => {
        console.log(item);
        // Check if the item is already in the cart using some
        const isPresent = cart.some(product => item.id === product.id);
        if (isPresent) {
            return; // Exit early if the item is already in the cart
        }
        // Add the item to the cart if it's not already present
        setCart([...cart, { ...item, quantity: 1 }]); // Add the item with initial quantity 1
        toast.success("Item is added to the cart",{
            duration:4000,
            style:{
                backgroundColor:"#ededed",
                borderRadius:"0px",
                border: "2px solid #ededed"
            },
            icon:'👏',
            ariaProps: {
                role: 'status',
                'aria-live': 'polite',
              },
        })
    };

    // quantity btn decrease

    const handleDecrease = (id) => {
        setCart(cart.map(product =>
            product.id === id
                ? { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1 }
                : product
        ));
    };
    
    // quantity btn increase

    const handleIncrease = (id) => {
        setCart(cart.map(product =>
            product.id === id
                ? { ...product, quantity: product.quantity + 1 }
                : product
        ));
    };

    // total price

        const totalPrice = cart.reduce((total, product) => total + (product.quantity * product.price), 0);

    return (
        <>
            <Router>
                <SkeletonTheme baseColor='#ededed' highlightColor='#b2b2b2'>
                    <ScrollToTop />
                    <Toaster/>
                    <MyNavbar size={cart.length} cart={cart} handleDecrease={handleDecrease} handleIncrease={handleIncrease} totalPrice={totalPrice} />
                    <Routes>
                        <Route path='/' element={<Pages loading={loading} setLoading={setLoading} addToCart={addToCart} />} />
                        <Route path='/shop' element={<Products loading={loading} setLoading={setLoading} addToCart={addToCart} />} />
                        <Route path='/blog' element={<Blog loading={loading} setLoading={setLoading} />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                    <Footer />
                </SkeletonTheme>
            </Router>
        </>
    )
}

export default AppRoutes
