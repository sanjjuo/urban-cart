import React from 'react';
import "./index.css"
import Banner from './Components/Banner/Banner'
import Category from './Components/Category/Category';
import Products from './Components/Products/Products';

const Pages = ({loading, setLoading, addToCart, handleFavourite, fav}) => {
  return (
    <>
    <Banner loading={loading} setLoading={setLoading}/>
    <Category loading={loading} setLoading={setLoading}/>
    <Products loading={loading} setLoading={setLoading} addToCart={addToCart} handleFavourite={handleFavourite} fav={fav}/>
    </>
  )
}

export default Pages
