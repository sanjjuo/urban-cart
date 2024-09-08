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
import ScrollToTop from './ScrollToTop'

const AppRoutes = () => {
    const [loading, setLoading] = useState(true)
    return (
        <>
                <Router>
                <SkeletonTheme baseColor='#ededed' highlightColor='#b2b2b2'>
                    <ScrollToTop/>
                    <MyNavbar />
                    <Routes>
                        <Route path='/' element={<Pages />} />
                        <Route path='/shop' element={<Products loading={loading} setLoading={setLoading}/>} />
                        <Route path='/blog' element={<Blog loading={loading} setLoading={setLoading}/>} />
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
