import React from 'react'
import Image from 'next/image'
function ItemList({product}:any) {
  if (!product) return null; 
  return (
    <div key={product.id} className="flex p-2 bg-[var(--color-smoke)] items-center mb-4">
                <div className="w-1/3">
                  <Image src={product.image}  alt={product.name} width={100} height={100} className="object-cover " />
                </div>
                <div className="w-2/3 pl-4">
                  <h5 className="font-bold">{product.name}</h5>
                  <p className="text-gray-700">{product.price}</p>
                  <p className="text-gray-700">{1}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">{"★".repeat(product.rating)}</span>
                    <span className="text-gray-400">{"★".repeat(5 - product.rating)}</span>
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>
                </div>
              </div>
  )
}

export default ItemList