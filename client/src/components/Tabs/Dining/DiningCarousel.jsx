import React,{useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../../../App.css";

// import required modules
import { EffectCards,Navigation } from "swiper";

//import Components

import PictureCarouselCard from "../../PictureCarouselCard";

const configSm = {
  effect: "cards",
  grabCursor: true,
  modules: [EffectCards],
  className: "diningSwiperSm",
};
const configLg = {
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
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
      modules:[Navigation],
      navigation:true,
      className:"diningSwiperLg",
}


const DiningCarousel = () => {
  const [dining] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/collections/019acf0c53e2ebf0e8658e471a20a2ab_1665210805.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/4872d7301e80d72fd18c4e1e43bf8789_1660738717.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/84317f74208f036be1936e32dc627d88_1660823494.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/51979569f85f4579e15336825f446188_1660738438.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/d9eea3ef785def3a1d4e19c89bf19b11_1660816040.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/ef4da4077aae068ea1e4410eefb5aec5_1660735784.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
  ]);
  return (
    <>
        <div className="w-full my-10 mb-36">
          <div className="block sm:hidden w-8/12 m-auto" >
            <Swiper {...configSm}>
              {dining.map((item)=>(
                <SwiperSlide>
                  <PictureCarouselCard {...item}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden sm:block" >
          <Swiper {...configLg}>
              {dining.map((item)=>(
                <SwiperSlide>
                  <PictureCarouselCard {...item}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
    </>
  )
}

export default DiningCarousel