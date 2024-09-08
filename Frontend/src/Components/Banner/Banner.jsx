import React, { useState } from 'react'
import "../Banner/Banner.css"
import Slider from "react-slick";
import { banner } from "../../../src/assets/Api";
import Button from 'react-bootstrap/Button';

const Banner = () => {

  const [bannerData, setBannerData] = useState(banner)

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="banner-section">
        <Slider {...settings}>
          {bannerData.map((data, index) => (
            <div className='banner' key={index}>
              <img src={data.image} alt="" />
              <div className="contents">
                <h3>{data.collection}</h3>
                <h1>{data.item}</h1>
                <Button>shop now</Button>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  )
}

export default Banner
