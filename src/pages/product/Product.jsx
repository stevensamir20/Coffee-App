import React, { useEffect, useState, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BaseURL } from '../../shared/API'
import { useParams } from 'react-router-dom'
import CartContext from '../../store/cart-context'

export const Product = () => {

  const cartContext = useContext(CartContext);
  const { drinkId } = useParams()
  const [ drink, setDrink ] = useState()
  const [ toppings, setToppings ] = useState([])
  const [ drinkSize, setSize ] = useState({size: 'SMALL', sizePrice: 0})
  const [ topping, setTopping ] = useState({name: 'NONE', price: 0})
  const sugarRef = useRef()

  useEffect(() => {
    axios.get(BaseURL + `products/${drinkId}`).then((res) => {
      setDrink(res.data)

      if(res.data.hasToppings){
        axios.get(BaseURL + `toppings`).then((res) => {
          setToppings(res.data)
        })
      }
    })
    // eslint-disable-next-line 
  }, [])
  
  const addToCart = (item) => {
    const sugarAmount = sugarRef.current.value;
    console.log(sugarAmount);
    cartContext.addItem({
      productId: item.id,
      size: drinkSize.size,
      description: `${item.name} - Sugar: ${sugarAmount.charAt(0).toUpperCase() + sugarAmount.slice(1).toLowerCase()} - ${topping.name === 'NONE' ? '':`Toppings: ${topping.name}`}`,
      price: +item.price + drinkSize.sizePrice + topping.price,
      sugar: sugarRef.current.value,
      image: item.image
    })
    alert('added to cart')
  }

  const sizeChanger = (size) => {
    if (size === 1) {
      setSize({size: 'SMALL',sizePrice: 0})
    } 
    if (size === 2) {
      setSize({size: 'MEDIUM',sizePrice: 10})
    } 
    if (size === 3) {
      setSize({size: 'LARGE',sizePrice: 20})
    } 
  }

  const handleTopping = (e) => {
    let toppingName = e.target.value.slice(0, -2).trim();
    let toppingPrice = parseInt(e.target.value.slice(-2).trim());

    setTopping({
      name: toppingName,
      price: toppingPrice
    })
  }

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
              <button 
               onClick={() => {sizeChanger(1)}} 
               className={drinkSize.sizePrice === 0 ? 'sizes-cups-star-selected' : ''}>
                SMALL
              </button>
            </div>
            <div className="sizes-cups-md sizes-cups-star">
              <div className="cup-wrapper">
                <img src="https://i.ibb.co/89kQMRf/cup.png" alt="coffee-pic" />
              </div>
              <button 
               onClick={() => {sizeChanger(2)}}
               className={drinkSize.sizePrice === 10 ? 'sizes-cups-star-selected' : ''}
              >MEDIUM</button>
              <p>+10 LE</p>
            </div>
            <div className="sizes-cups-lg sizes-cups-star">
              <div className="cup-wrapper">
                <img src="https://i.ibb.co/89kQMRf/cup.png" alt="coffee-pic" />
              </div>
              <button 
               onClick={() => {sizeChanger(3)}}
               className={drinkSize.sizePrice === 20 ? 'sizes-cups-star-selected' : ''}
              >
                LARGE
              </button>
              <p>+20 LE</p>
            </div>
          </div>
          <div className="sizes-button">
            <h3>Price: {drinkSize.sizePrice + +drink.price + topping.price}</h3>
            <button onClick={() => {addToCart(drink)}}>ADD TO BAG</button>
            <Link to='/cart'><button>CHECKOUT</button></Link>
          </div>
        </div>
        <div className='adds'>
          <div className="adds-sugar">
            <h3>Sugar</h3>
            <select name="sugar" id="sugar" ref={sugarRef}>
              <option value="NONE">None</option>
              <option value="HALF">Half</option>
              <option value="FULL">Full</option>
            </select>
          </div>
          { drink.hasToppings && 
            <div className="adds-in">
              <h3>Add-Ins</h3>
              <select name="toppings" id="toppings" onChange={(event) => {handleTopping(event)}}>
                <option value="None 0">None</option>
                {toppings.map((item) => {
                  return ( 
                  <option value={`${item.name} ${item.price}`} key={item.id}>{item.name} - LE {item.price}</option>)
                })}
              </select>
            </div>
          }  
        </div>
      </div>
     </>
    ) : ( <h1>no product found</h1> ) }
    </>
  )
}
