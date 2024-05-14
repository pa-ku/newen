import React from 'react'
import styled from 'styled-components'
export default function StackRow({ text, icon }) {
  return (
    <>
      <StackRowCtn>
        <StackImgCtn>{icon}</StackImgCtn>
        <StackText>{text}</StackText>
      </StackRowCtn>
    </>
  )
}

const StackText = styled.p`
  width: 50px;
`

const StackImgCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
  padding: 15px;
  & svg {
    height: 100%;
    width: 100%;
  }
`

const StackRowCtn = styled.div`
  background-color: #253036;
  height: 90px;
  max-width: 800px;
  border-radius: 37px;
  display: flex;
  align-items: center;
  padding-right: 20px;
  justify-content: center;
`
