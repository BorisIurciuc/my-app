import React, { useEffect } from 'react'

interface ProductCardProps {
    id: number
    title: string;
    price: number;
}

export default function ProductCardStore({id, title, price}: ProductCardProps) {

  return (
    <div>
        ProductCardStore
        <p>{id}</p>
        <h2>{title}</h2>
        <span>{price}</span>
    </div>
  )
}
