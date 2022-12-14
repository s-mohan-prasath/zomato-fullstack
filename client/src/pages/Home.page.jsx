import React from 'react'
import HomePageLayout from '../layouts/Homepage.layout'
import {useParams} from 'react-router-dom'

// Tab components

import Delivery from '../components/Tabs/Delivery/Delivery'
import DiningOut from '../components/Tabs/Dining/DiningOut'
import NightLife from '../components/Tabs/NightLife/NightLife'
import Nutrition from '../components/Tabs/Nutrition/Nutrition'


const Home = () => {
  const {type} = useParams();
  return (
    <>
    {type === "delivery" && <Delivery/>}
    {type === "dining" && <DiningOut/>}
    {type === "night" && <NightLife/>}
    {type === "nutri" && <Nutrition/>}
    </>
  )
}

export default HomePageLayout(Home)