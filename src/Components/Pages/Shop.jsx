import React from 'react'
import Hero from '../Hero/Hero'
import Newcollection from '../NewCollection/Newcollection'
import NewsLetter from '../NewsLetter/NewsLetter'
import Offer from '../Offers/Offer'
import Popular from '../Popular/Popular'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <Newcollection/>
        <NewsLetter/>
    </div>
  )
}

export default Shop