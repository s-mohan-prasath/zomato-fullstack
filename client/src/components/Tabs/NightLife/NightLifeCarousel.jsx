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


const NightLifeCarousel = () => {
  const [nightlife] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/pictures/1/18983041/31109ef52f99ea794d705da5c706627a.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/303960/68e61bd2a5fe97adf587d30496d94cfe.png",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/5/19577475/a9150506655136673058d180c8167d9c.jpeg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/1/19567911/f3e8a1376225dfd3cc32c605097973c0.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/309850/4c2cce1c16a40f515a27ecc27075259e.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/2/312902/2e3a98229ef00de30a9c7ad867bc0d5a.png",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
  ]);
  
  return (
    <>
        <div className="w-full my-10 mb-36">
          <div className="block sm:hidden w-8/12 m-auto" >
            <Swiper {...configSm}>
              {nightlife.map((item)=>(
                <SwiperSlide>
                  <PictureCarouselCard {...item}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden sm:block" >
          <Swiper {...configLg}>
              {nightlife.map((item)=>(
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

export default NightLifeCarousel;