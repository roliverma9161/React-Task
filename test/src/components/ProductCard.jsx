import React from 'react'

const ProductCard = ({stock, productImage, name, originalPrice,sellingPrice}) => {
    console.log(stock)
    stock > 0 ? console.log("Add to card"): console.log("out of stock")

    //ternary operator
    //condition ?(true block code):(false block code)
  return (
    <>
      <div className='w-50 border overflow-hidden rounded-lg p-4'>
        <img src={productImage} alt=" className="w-50 h-50 object-contain/>
        <h3 className='font-bold'>{productImage}</h3>
        <div className='flex gap-2'>
            <p className='line-through'>{originalPrice}</p>
            <p>{sellingPrice}rupees/kg</p>
        </div>

        {
            stock > 0 ? (<button className='border w-full flex items-center justify-center bg-green-500
                 rounded-lg hover:bg-green-700 mx-auto mt-3'>Add to cart</button>) : (<button className='border w-full
                     flex items-center justify-center bg-red-500 rounded-lg text-white hover:bg-red-700 mx-auto mt-3
                     '>Out of stock</button>)
        }

      </div>
    </>
  )
}

export default ProductCard
