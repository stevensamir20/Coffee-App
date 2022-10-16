import React from 'react'

export const Product = () => {
  return (
    <>
      <div className="product-container">
        <img src="https://i.ibb.co/YT6fGw1/Starbucks-Coffee-removebg-preview.png" alt="coffee-pic" />
      </div>
      <div className="product-desc">
        <div className='sizes'>
          <div className="sizes-title"><h1>PRODUCT NAME</h1></div>
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
  )
}
