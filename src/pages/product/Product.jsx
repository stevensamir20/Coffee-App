import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseURL } from '../../shared/API'
import { useParams } from 'react-router-dom'

export const Product = () => {

  const { drinkId } = useParams()
  const [ drink, setDrink ] = useState()

  useEffect(() => {
    axios.get(BaseURL + `products/${drinkId}`).then((res) => {
      setDrink(res.data)
    })
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
    {drink ? (
      <>
      <div className="product-container">
       <img src={drink.image} alt="coffee-pic" />
      </div>
      <div className="product-desc">
        <div className='sizes'>
          <div className="sizes-title"><h1>{drink.name}</h1></div>
          <div className="sizes-cups">
            <div className="sizes-cups-sm sizes-cups-star">
              <div className="cup-wrapper">
                <img src="https://i.ibb.co/89kQMRf/cup.png" alt="coffee-pic" />
              </div>
              <span>SMALL</span>
            </div>
            <div className="sizes-cups-md sizes-cups-star">
              <div className="cup-wrapper">
                <img src="https://i.ibb.co/89kQMRf/cup.png" alt="coffee-pic" />
              </div>
              <span>MEDIUM</span>
              <p>+10 LE</p>
            </div>
            <div className="sizes-cups-lg sizes-cups-star">
              <div className="cup-wrapper">
                <img src="https://i.ibb.co/89kQMRf/cup.png" alt="coffee-pic" />
              </div>
              <span>LARGE</span>
              <p>+20 LE</p>
            </div>
          </div>
          <div className="sizes-button">
            <button>ADD TO BAG</button>
          </div>
        </div>
        <div className='adds'>
        </div>
      </div>
     </>
    ) : ( <h1>no product found</h1> ) }
    </>
  )
}
