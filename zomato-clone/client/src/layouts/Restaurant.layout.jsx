import React from "react";
import {TiStarOutline} from 'react-icons/ti'
import {RiDirectionLine,RiShareForwardLine} from 'react-icons/ri'
import {BiBookmarkPlus} from 'react-icons/bi'


//components
import Navbar from '../components/Navbar'

import InfoButton from '../components/Restaurant/InfoButton'

const RestaurantLayout =
  (Component) =>
  ({ ...props }) => {
    return <>
    <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
      {/* <ImageGrid images={poster}/> */}
      {/* <RestaurantInfo name='' restaurantRating='' deliveryRating='' cuisine=''address=''/> */}
      <div className="my-4 flex flex-wrap gap-3 mx-auto">
        {/* <InfoButton isActive='true'>
          <TiStarOutline/> Add Review
        </InfoButton>
        <InfoButton isActive='true'>
          <RiDirectionLine/> Direction
        </InfoButton>
        <InfoButton isActive='true'>
          <BiBookmarkPlus/> Bookmark
        </InfoButton>
        <InfoButton isActive='true'>
          <RiShareForwardLine/> Share
        </InfoButton> */}
      </div>
    </div>
    <Component {...props}/>
    </>;
  };

export default RestaurantLayout;
