import React from 'react';
import "./index.css"
import Banner from './Components/Banner/Banner'
import Category from './Components/Category/Category';
import Products from './Components/Products/Products';

const Pages = ({loading, setLoading, addToCart}) => {
  return (
    <>
    <Banner/>
    <Category/>
    <Products loading={loading} setLoading={setLoading} addToCart={addToCart}/>
    </>
  )
}

export default Pages
