import React, { Fragment } from 'react'
import Image from 'next/image'
import Sliders from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Banner = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Fragment>
      <Sliders {...settings}>
        {props.banners.map((banner) => (
          <Image
            key={banner.id}
            className="slider-img"
            src={
              process.env.NEXT_PUBLIC_BACKEND_URl +
              '/banner_images/' +
              banner.image
            }
            width="1496"
            height="720"
            style={{ width: 'auto', height: 'auto' }}
            alt={banner.alt_tag}
          />
        ))}
      </Sliders>
    </Fragment>
  )
}
export default Banner
