import React from 'react'
import './Nav.css'

import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../Contest/ShopContext'

const Nav = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <>
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration:'none'}} to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link style={{ textDecoration:'none'}} to='/Kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
       <Link to='/login'><button>Login</button></Link> 
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
    </>
  )
}

export default Nav