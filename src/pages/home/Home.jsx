import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {

  return (
    <>
    <div className='circle'></div>
    <div className='grid-container'>
      <div className='text'>
        <span className='smalltext'>SOMETHING</span>
        <br />
        <span className='largetext'>DELICIOUS</span>
        <br />
        <span className='smalltext'>IS ALWAYS</span>
        <br />
        <span className='smalltext'>BREWIN&apos; HERE&reg; </span>
        <br />
        <br />
        <Link to='/menu'> <button className='btn'>ORDER NOW</button> </Link>
      </div>
    <div className='img'><img className='image' src='https://i.ibb.co/YT6fGw1/Starbucks-Coffee-removebg-preview.png' alt='img'/></div>
  </div>
  </>
  )
}
