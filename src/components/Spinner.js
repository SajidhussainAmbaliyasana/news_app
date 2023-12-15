import React from 'react'
import './style.css'
import spineer_img  from './Fading balls.gif'

function Spinner() {
  return (
    <div>
       <div className='spinner'>
        <img src={spineer_img} alt="loading" />
      </div>
    </div>
  )
}

export default Spinner
