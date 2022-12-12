import React from 'react'
import { Outlet } from 'react-router-dom';
import FoodTab from '../components/FoodTab';
import RestaurantLayout from '../layouts/Restaurant.layout'

const Restaurant = () => {
  return (
    <>
      <h1>Restaurant</h1>
      <Outlet/>
    </>
  )
}

export default RestaurantLayout(Restaurant);