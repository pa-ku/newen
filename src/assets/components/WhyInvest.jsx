import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { data } from '../data/whyinvest,js'

const GridWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const GridCtn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 350px);
  grid-gap: 20px;
  row-gap: 50px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const GridItem = styled.div`
  border-radius: 20px;
  background-color: var(--main-color-300);
  padding: 15px 20px;
  padding-top: 40px;
  display: flex;
  position: relative;
  gap: 5px;
  flex-direction: column;
`

const Icon = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  top: -38px;
  left: 0px;
  right: 0px;
  margin: auto;
  background-color: var(--main-color-500);
  padding: 10px;
  border-radius: 20px;
`

export default function WhyInvest() {
  return (
    <>
      <GridWrapper>
        <GridCtn>
          {data.map((item) => (
            <>
              <GridItem>
                <Icon src={item.icon} alt="" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </GridItem>
            </>
          ))}
        </GridCtn>
      </GridWrapper>
    </>
  )
}
