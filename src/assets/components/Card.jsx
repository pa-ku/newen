import React from 'react'
import styled from 'styled-components'

export default function Card({ items, negativeItems, price, title, icon }) {
  return (
    <>
      <CardCtn className='py-5'>
        <Title className='text-green-100'>
          {icon}
          {title}
        </Title>
        <p className='text-gray-300'>{price}</p>
        <ItemsCtn className='h-60 md:h-72'>
          {items.map((text) => (
            <Item className='text-gray-400'>
              <p className='text-[#cfed8e] text-md'> ✔ </p>
              {text}
            </Item>
          ))}
          {negativeItems.map((text) => (
            <Item className='text-gray-400'>
              <p className='font-bold text-red-400 text-md'>✕</p>
              {text}
            </Item>
          ))}
        </ItemsCtn>
      </CardCtn>
    </>
  )
}

const CardCtn = styled.div`
  padding-inline: 3em;
  transition: 200ms;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    width: 100%;
  }
`

const ItemsCtn = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
  & svg {
    width: 25px;
    height: 25px;
  }
`

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

const Item = styled.p`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
`
