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
import toast, { Toaster } from 'react-hot-toast';
import Favourite from './Components/Favourite/Favourite'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'

const AppRoutes = () => {
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [fav, setFav] = useState([]);

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
        toast.success("Item is added to the cart", {
            duration: 4000,
            style: {
                backgroundColor: "#ededed",
                borderRadius: "0px",
                border: "2px solid #ededed"
            },
            icon: '👏',
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

    // remove item from cart

    const handleRemove = (deletingProduct) => {
        const newCartItems = cart.filter(item => item.id !== deletingProduct.id)
        setCart(newCartItems)
    }

    // total price

    const totalPrice = cart.reduce((total, product) => total + (product.quantity * product.price), 0);

    // favourite product handle

    const handleFavourite = (dataFav) => {
        const isFavourite = fav.find(item => item.id === dataFav.id)
        if (isFavourite) {
            // If it's already a favorite, remove it
            const updatedHeart = fav.filter(item => item.id !== dataFav.id);
            setFav(updatedHeart);
        } else {
            // If it's not a favorite, add it
            setFav([...fav, dataFav])
        }
        console.log(fav);

    }

    return (
        <>
            <Router>
                <SkeletonTheme baseColor='#ededed' highlightColor='#b2b2b2'>
                    <ScrollToTop />
                    <Toaster />
                    <MyNavbar size={cart.length} favSize={fav.length} cart={cart} handleRemove={handleRemove} handleDecrease={handleDecrease} handleIncrease={handleIncrease} totalPrice={totalPrice} />
                    <Routes>
                        <Route path='/' element={<Pages loading={loading} setLoading={setLoading} addToCart={addToCart} handleFavourite={handleFavourite} fav={fav}/>} />
                        <Route path='/shop' element={<Products loading={loading} setLoading={setLoading} addToCart={addToCart} handleFavourite={handleFavourite} fav={fav}/>} />
                        <Route path='/blog' element={<Blog loading={loading} setLoading={setLoading} />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/favourite' element={<Favourite fav={fav}/>} />
                        <Route path='/cart' element={<Cart cart={cart} handleRemove={handleRemove} handleDecrease={handleDecrease} handleIncrease={handleIncrease} totalPrice={totalPrice}/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                    </Routes>
                    <Footer />
                </SkeletonTheme>
            </Router>
        </>
    )
}

export default AppRoutes
