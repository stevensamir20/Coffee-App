import axios from 'axios';
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BaseURL } from '../../shared/API';
import CartContext from '../../store/cart-context'

export const Cart = () => {

  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const totalAmount = cartContext.totalAmount
  const cartEmpty = cartContext.items.length > 0;

  const removeFromCart = (item) => {
    cartContext.removeItem(item)
  }

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  };

  const placeOrder = () => {
    axios.post( (BaseURL + 'orders'),  config, {items: cartContext.items})
    .then((res) => {
      console.log(res);
      navigate('home')
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className='cart-product'>
        <div className="cart-items">
          {!cartContext.items.length && 
          <div className="cart-items-card">
             <h3 className="cart-items-card-amount">Shop now and add drinks to your cart!</h3>
          <h3 className="cart-items-card-adds-on">
            <Link to="/menu">SHOP NOW</Link>
          </h3>
          </div>
          }
          {cartContext.items.map((item) => {
            return (
              <div className="cart-items-card" key={item.description}>
                <div className="cart-items-card-amount">
                  <div>
                  { item.description.split('-').map((item) => {
                    return (<h5>{item}</h5>)})
                  }
                  </div>
                  <div className="cart-items-card-amount-control">
                    <h6>
                      {item.size.charAt(0).toUpperCase() + item.size.slice(1).toLowerCase()}
                    </h6>
                  </div>
                  <h6>EGP {item.price}</h6>
                </div>
                <div className="cart-items-card-adds">
                  <div className="cart-items-card-adds-img">
                    <img src={item.image} alt="coffee" />
                  </div>
                <div className="cart-items-card-adds-ons">
                  <button onClick={() => {removeFromCart(item)}}>REMOVE FROM CART</button>
                </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="cart-price">
          <div className="cart-price-total">
            <div className="cart-price-total-sub">
              <h3>Subtotal</h3>
              <h3>EGP {totalAmount}</h3>
            </div>
            <div className="cart-price-total-sub">
              <h3>Delivery Fee</h3>
              {!cartContext.items.length ? (<h3>EGP 00</h3>) : (<h3>EGP 20</h3>)}
            </div>
            <div className="cart-price-total-sub">
              <h3>Total Amount</h3>
              {!cartContext.items.length ? (<h3>EGP {totalAmount + 0}</h3>) : (<h3>EGP {totalAmount + 20}</h3>)}
            </div>
          </div>
          <div className="cart-price-btn">
            <button disabled={!cartEmpty} onClick={() => {placeOrder()}}>Place Order</button>
          </div>
        </div>
    </div>
  )
}
