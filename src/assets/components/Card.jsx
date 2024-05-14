import React from 'react'
import styled from 'styled-components'

export default function Card({ items, price,title }) {
  return (
    <>
      <CardCtn>
        <Title>{title}</Title>
        <ItemsCtn>
          {items.map((text) => (
            <Item>
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#CFED8E"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>{' '}
              {text}
            </Item>
          ))}
        </ItemsCtn>
        <Price>{price}</Price>
        <ItemButton>Saber max</ItemButton>
      </CardCtn>
    </>
  )
}

const Price = styled.p`
  color: #fff;
  text-align: center;
  font-size: 20px;
padding: 10px;
  font-weight: 500;
`

const ItemsCtn = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  height: 200px;
  & svg {
    width: 25px;
    height: 25px;
  }
`

const CardCtn = styled.div`
  background-color: #010d13;
  width: 300px;
  border-radius: 32px;
  padding-top: 20px;
`

const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-weight: 500;
`

const Item = styled.p`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
`

const ItemButton = styled.button`
  width: 100%;
  border: 0px;
  border-radius: 0px 0px 32px 32px;
  background-color: #5990ae;
  height: 40px;

  cursor: pointer;
  &:hover {
    background-color: #8bc1de;
  }
`
