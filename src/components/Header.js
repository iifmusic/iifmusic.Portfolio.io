import React from 'react'
import Typed from 'react-typed'

export const Header = () => {
  return (
    <div id='top' className='header-wraper'>
        <div className='main-info'>
            <h1>Ivan Ortega</h1>
            <Typed
            className='typed-text'
            strings={["Web Design", "Web Development", "Music Producer", "UX/UI", "Gamer"]} 
            typeSpeed = {75}
            backSpeed = {60} 
            loop
            />
            <a href='#footer__container' className='btn-main-offer'>Follow</a>
        </div>

    </div>
  )
}