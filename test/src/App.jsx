import React from 'react'
import Add from "./components/Add";
import ProductCard from './components/ProductCard';
import products from './data/products'

const App = () => {
  return (
    <>
    <div className='flex gap-5 flex-wrap'>
      {
        products.map((product) => {
          return(
            <ProductCard
             productImage={product.productImage}
              productName={product.productName}
              originalPrice={product.origuinalPrice}
              sellingPrice={product.sellingPrice}
              stock={product.stock}
            />
          )
        })
      }

    </div>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center gap-8 flex-wrap">

      <ProductCard
        image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
        name="Smart Watch"
        price="1999"
        stock={10}
      />

      <ProductCard
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
        name="Headphones"
        price="1499"
        stock={10}
      />

      <ProductCard
        image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
        name="Smart Phone"
        price="24999"
        stock={0}
      />

    </div>
      
    <Add/>
    </>
  )
}

export default App
