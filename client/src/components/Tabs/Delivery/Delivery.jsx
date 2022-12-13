import React,{useState} from 'react'
import DeliveryCarousel from './DeliveryCarousel'
import RestaurantCard from '../../RestaurantCard';


const Delivery = () => {

  const [restaurantList, setRestaurantList] = useState([
    {
      _id: "124ksjf435245jv34fg3",
      isPro: true,
      isOff: true,
      name: "Nathu's Sweets",
      restaurantReviewValue: "3.7",
      cuisine: [
        "Mithai",
        "South Indian",
        "Chinese",
        "Street Food",
        "Fast Food",
        "Desserts",
        "North Indian",
      ],
      averageCost: "450",
      image:"https://b.zmtcdn.com/data/pictures/8/19183468/dca870ed53f0d735163e91129718fcb7_o2_featured_v2.jpg",
    },
    {
      _id: "sdffdsadadsfadfadsfadsf",
      isPro: true,
      isOff: false,
      name: "Master Koii's",
      restaurantReviewValue: "4.6",
      cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],
      averageCost: "600",
      image:"https://b.zmtcdn.com/data/pictures/3/19139073/af6a2a7b2efbaedb7049cda5c0213aa9_o2_featured_v2.jpg",
    },
    {
      _id: "124ksjf435245jfdfv34fg3",
      isPro: true,
      isOff: true,
      name: "Nathu's Sweets",
      restaurantReviewValue: "3.7",
      cuisine: [
        "Mithai",
        "South Indian",
        "Chinese",
        "Street Food",
        "Fast Food",
        "Desserts",
        "North Indian",
      ],
      averageCost: "450",
      image:"https://b.zmtcdn.com/data/pictures/chains/5/18918755/e05a9770798f5eb868175d7003f197f3_o2_featured_v2.jpg"
    },
    {
      _id: "124ksjf435245jfdfv34fg3",
      isPro: true,
      isOff: true,
      name: "Nathu's Sweets",
      restaurantReviewValue: "3.7",
      cuisine: [
        "Mithai",
        "South Indian",
        "Chinese",
        "Street Food",
        "Fast Food",
        "Desserts",
        "North Indian",
      ],
      averageCost: "450",
      image:"https://b.zmtcdn.com/data/pictures/chains/9/19871009/cc70bb6332edb145b217c9caa106eb67_o2_featured_v2.jpg"
    },
    {
      _id: "124ksjf435245jfdfv34fg3",
      isPro: true,
      isOff: true,
      name: "Nathu's Sweets",
      restaurantReviewValue: "3.7",
      cuisine: [
        "Mithai",
        "South Indian",
        "Chinese",
        "Street Food",
        "Fast Food",
        "Desserts",
        "North Indian",
      ],
      averageCost: "450",
      image:"https://b.zmtcdn.com/data/pictures/chains/4/18838494/33670c3d854435d45ca2826409a64d33_o2_featured_v2.jpg",
    },
  ]);

  return (
    <>
        <div className="w-full max-w-5xl mx-auto mb-20">
            <h2 className='text-2xl ml-5 lg:ml-0 mt-5'>Inspitation for your first order</h2>
            <DeliveryCarousel />
            <h2 className='text-2xl ml-5 lg:ml-0 mt-10'>Delivery Restaurants in NCR(Delhi)</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center px-5 my-5'>
              {restaurantList.map((item)=>(
                <RestaurantCard {...item}/>
              ))}
            </div>
        </div>
    </>
  )
}

export default Delivery