import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


//import Components

const config = {
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination:{
      clickable: true,
    },
    navigation:true,
    modules:[Autoplay, Pagination, Navigation],
    className:"mySwiper",
}


const NightLifeCarousel = () => {
    const [heroBanners, setHeroBanners] = useState([
        "https://b.zmtcdn.com/web/nutrition/assets/47fb421f35ca12ad3111e3d99d1737571620108828.png",
        "https://cdn2.f-cdn.com/contestentries/258577/14016951/55bdb28e2a113_thumb900.jpg",
        "https://b.zmtcdn.com/web/nutrition/assets/0a8f2dad65904b89178905213efe886c1620108711.png",
        "https://b.zmtcdn.com/web/nutrition/assets/cfbb36a56a4203c7efac5de27318ea381620108756.png",
        "https://b.zmtcdn.com/web/nutrition/assets/3872dc3041e9633ba40b51e7dbff263a1620108770.png",
      ]);
  
  return (
    <>
        <div className="w-full my-10">
          <Swiper {...config}>
              {heroBanners.map((item,index)=>(
                <SwiperSlide key={index}>
                  <div className="w-full h-64">
                    <img src={item} alt="" className="w-full h-full rounded-lg object-cover sm:object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
    </>
  )
}

export default NightLifeCarousel;