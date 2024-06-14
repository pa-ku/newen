import React from 'react'
import styled from 'styled-components'

export default function Card({ items, price, title, icon }) {
  return (
    <>
      <CardCtn className='animate-chroma py-5'>
        <Title className='text-green-100'>
          {icon}
          {title}
        </Title>
        <p className='text-gray-300'>{price}</p>
        <ItemsCtn>
          {items.map((text) => (
            <Item className='text-gray-400'>
              <svg
                width='100'
                height='100'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='#CFED8E'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 12l5 5l10 -10' />
              </svg>{' '}
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
  height: 300px;
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
