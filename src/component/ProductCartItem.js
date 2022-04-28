import React from 'react'

const ProductCartItem = ({key, img, }) => {
  return (
    <div key={key} className='product-cart-item'>
         <img
             
              className="product-img"
              alt="product-img"
              src={img}
              height={200}
            />
    </div>
  )
}

export default ProductCartItem