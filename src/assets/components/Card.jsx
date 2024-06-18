import React from 'react'
import styled from 'styled-components'

export default function Card({ items, negativeItems, price, title, icon }) {
  return (
    <>
      <div className='px-10'>
        <Title className='text-green-100'>
          {icon}
          {title}
        </Title>
        <p className='text-gray-300 py-2'>{price}</p>
        <div className='flex flex-col gap-2 h-60 md:h-72'>
          {items.map((text) => (
            <p className='flex gap-2 text-gray-400'>
              <p className='text-[#cfed8e] text-md'> ✔ </p>
              {text}
            </p>
          ))}
          {negativeItems.map((text) => (
            <p className='flex gap-2 text-gray-400'>
              <p className='font-bold text-red-400 text-md'>✕</p>
              {text}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

const Title = styled.h2`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  font-size: 30px;
  & svg {
    width: 35px;
    height: 35px;
  }
`
