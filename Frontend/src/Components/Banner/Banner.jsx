import React, { useEffect, useState } from 'react'
import "../Banner/Banner.css"
import Slider from "react-slick";
import { motion } from "framer-motion"
import axios from "axios"

const Banner = () => {

  const [bannerData, setBannerData] = useState([])

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get("http://localhost:4000/banner");
        setBannerData(response.data)
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data", error)
      }
    }
    fetchBanner()
  }, [])



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

                <motion.h3
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeOut", duration: 0.6 }}
                >{data.collection}</motion.h3>

                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeOut", duration: 0.6 }}
                >{data.item}</motion.h1>

                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: "easeOut"
                  }}
                >shop now</motion.button>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  )
}

export default Banner
