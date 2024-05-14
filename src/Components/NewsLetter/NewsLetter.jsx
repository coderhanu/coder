import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
      <>
    <div className='newsletter'>
        <h1>Get EXclusive Offers On your Email</h1>
        <p>Subcribe to our newletter and stay updated</p>
    <div>
    <input type="email" placeholder='Your Email id'  />
    <button>Subscribe</button>
      </div>
    </div>
      </>

  )
}

export default NewsLetter