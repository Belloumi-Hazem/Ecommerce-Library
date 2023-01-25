import React from 'react'

const Price = ({salePrice,originalPrice}) => {
  return (
    <>
     <div className="book__price">
    {salePrice ? (<><span className="book__price--normal">{originalPrice.toFixed(2)}TND</span>{salePrice.toFixed(2)}</>): (originalPrice.toFixed(2)) }
    TND  
    </div>
    </>
  )
}

export default Price