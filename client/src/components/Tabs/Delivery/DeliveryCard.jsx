import React from 'react'

const DeliveryCard = ({image,title}) => {
  return (
    <>
      <div className='w-26 h-26 md:w-30 md:h-30 flex flex-col justify-center items-center'>
        <img src={image} alt={title} className='w-15 h-15 md:w-full md:h-full rounded-full'/>
        <h2 className="font-light text-base mt-3">{title}</h2>
      </div>
    </>
  )
}

export default DeliveryCard