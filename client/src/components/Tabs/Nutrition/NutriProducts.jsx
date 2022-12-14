import React from 'react'

const NutriProducts = (props) => {
  return (
    <>
        <div className='flex flex-col gap-2 items-center justify-start'>
            <div className='w-full h-30'>
                <img src={props.image} alt="nutri-products" className='w-full h-full object-center object-cover' />
            </div>
            <div className='w-full'>
                <h2 className='font-light text-sm text-center'>{props.title}</h2>
            </div>
        </div>
    </>
  )
}

export default NutriProducts