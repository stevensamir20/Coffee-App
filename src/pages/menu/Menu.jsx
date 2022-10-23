import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BaseURL } from '../../shared/API'
import { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

export const Menu = () => {

  const cartContext = useContext(CartContext)
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
   axios.get( BaseURL + 'products').then((res) => {
    setDrinks(res.data);
   })
  
  },)

  const addToCart = (item) => {
    cartContext.addItem({
      productId: item.id,
      size: 'SMALL',
      description: `${item.name}`,
      price: +item.price ,
      sugar: 'NONE',
      image: item.image
    })
  }
  
  return (
    <div className="container">
      {drinks.map((drink) => {
        return (
          <div className="product-card" key={drink.id}>
          <div className="product-card-img">
            <img src={drink.image} alt="coffee-pic" />
          </div>
          <div className="product-card-desc">
            <h5>
              <Link to={`/menu/${drink.id}`}>{drink.name}</Link>
              <span>{drink.price}</span>
            </h5>
            <div className="add-button">
              <button onClick={() => {addToCart(drink)}}className="add-button-cart">
                <FontAwesomeIcon icon={faPlus} className="add-button-icon"/>
              </button>
            </div>
          </div>
         </div>
        )
      })}
    </div>
  )
}
