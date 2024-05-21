import React from 'react'
import styled from 'styled-components'

export default function Card({ items, price, title, icon }) {
  return (
    <>
      <CardCtn>
     
        <Title>{icon}{title}</Title>
        <Price>{price}</Price>
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
      </CardCtn>
    </>
  )
}

const CardCtn = styled.div`
  background-color: #010d13;
  width: 350px;
  box-shadow: 10px 10px 20px 0px #031c29;
  border-radius: 32px;
  padding-block: 20px;
  padding-inline: 30px;
  transition: 200ms;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 100%;
  }
`

const Price = styled.p`
  color: #fff;
  text-align: start;
  font-size: 18px;
  font-weight: 500;
  color: #bdbdbd;
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
  color: #fff;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  font-size: 30px;
  & svg{
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
