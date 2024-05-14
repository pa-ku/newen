import React from 'react'
import styled from 'styled-components'

const TitleStyle = styled.h2`
  text-align: center;

  font-weight: 600;
  font-size: 30px;
  background: linear-gradient(to right, #fff, #73a8c9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default function Title({ children }) {
  return <TitleStyle>{children}</TitleStyle>
}
