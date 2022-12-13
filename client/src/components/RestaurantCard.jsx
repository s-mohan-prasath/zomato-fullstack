import React from 'react'
import {Link} from 'react-router-dom'
import {AiTwotoneStar} from 'react-icons/ai'

const RestaurantCard = (props) => {
  return (
    <>
        <Link to={`/restaurant/${props._id}/overview`} className='w-full h-80 rounded-lg drop-shadow-lg shadow-gray-300 lg:hover:drop-shadow-lg hover:scale-100 md:hover:scale-105 transition-all duration-75 ease-in-out'>
            <div className='w-full h-full rounded-lg'>
                <div className='w-full h-3/4'>
                    <img src={props.image} className='w-full h-full object-cover object-center rounded-lg'/>
                </div>
                <div className='flex flex-col gap-2 px-2 py-3 z-0 bg-white'>
                    <div className='flex justify-between'>
                        <h2 className='text-xl font-bold'>{props.name}</h2>
                        <span className='bg-blue-700 text-white flex items-center rounded-lg px-1 gap-1'>{props.restaurantReviewValue} <AiTwotoneStar/></span>
                    </div>
                    <div className='flex justify-between'>
                        <p className='truncate overflow-hidden w-1/2'>{props.cuisine.join(', ')}</p>
                        <span className='text-right'>₹ {props.averageCost} for one</span>
                    </div>
                </div>
            </div>
        </Link>
    </>
  )
}

export default RestaurantCard