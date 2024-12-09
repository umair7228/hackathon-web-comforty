import ProductsList from '@/components/products/ProductsList'
import Subscription from '@/components/products/Subscription'
import React from 'react'

const products = () => {
  return (
    <main className='w-screen flex flex-col items-center justify-center overflow-x-hidden'>
      <ProductsList />
      <Subscription />
    </main>
  )
}

export default products
