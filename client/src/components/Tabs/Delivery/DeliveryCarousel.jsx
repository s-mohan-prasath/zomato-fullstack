import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../App.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import { Navigation } from "swiper";

// components
import DeliveryCard from './DeliveryCard';


const DeliveryCarousel = () => {

  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      title: "Pizza",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
      title: "Biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
      title: "Burges",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
      title: "Thali",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
      title: "Chaat",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
      title: "Paratha",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
      title: "Momos",
    },
  ];
  const config = {
    slidesPerView:1,
        spaceBetween:10,
        pagination:{
          clickable: true,
        },
        breakpoints:{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
        modules:[Navigation],
        navigation:true,
        className:"mySwiper",
  }

  return (
    <>
      <div className='hidden md:block md:px-10 lg:px-5 m-auto mt-8'>
        <Swiper {...config}>
          {categories.map((item)=>(
            <SwiperSlide>
            <DeliveryCard {...item}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='md:hidden w-full mt-10 px-5'>
        <div className='grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-5 '>
        {categories.map((item)=>(
            <DeliveryCard {...item}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default DeliveryCarousel