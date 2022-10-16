import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const Menu = () => {
  const id = 1;
  return (
    <>
    <div className="container">
      <div className="product-card">
        <div className="product-card-img">
          <img src="https://i.ibb.co/YT6fGw1/Starbucks-Coffee-removebg-preview.png" alt="coffee-pic" />
        </div>
        <div className="product-card-desc">
          <h3>
            <Link to={`/menu/${id}`}>Whatever</Link>
            <span>45.99</span>
          </h3>
          <div className="add-button">
            <button className="add-button-cart">
              <FontAwesomeIcon icon={faPlus} className="add-button-icon"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
