import React from 'react'
import styled from 'styled-components'
import Title from './Title'

const ContactoCtn = styled.footer`
  height: 500px;
  max-width: 100%;
  border-radius: 50% 50% 0px 0px;
  background-color: #010d13;
  padding-top: 2em;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(to bottom, #010d13, #17262f);
padding-inline: 1em;
@media(max-width:1000px){
  border-radius: 40px 40px 0px 0px;
}
`
const Input = styled.input`
  background-color: #17262f;
  border: 0px;
  border-radius: 20px;
  font-size: 20px;
  width: 600px;
  padding-inline: 20px;
  padding-block: 10px;
  color: #fff;
  @media(max-width:700px){
  width: 100%;
  }
`
const InputArea = styled.textarea`
  background-color: #17262f;
  border: 0px;
  border-radius: 20px;
  font-size: 20px;
  width: 600px;
  height: 200px;
  padding-inline: 20px;
  padding-block: 10px;
  color: #fff;
  @media(max-width:700px){
  width: 100%;
  }
`
const SendButton = styled.button`
  border: 0px;
  background-color: #a2ff81;
  width: 600px;
  padding: 10px;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background-color: #c1ffaa;
  }
  @media(max-width:700px){
  width: 100%;
  }
`
export default function Contact() {
  return (
    <>
      <ContactoCtn>
        <Title>Contacto</Title>
        <Input type="text" placeholder="Email" />
        <InputArea name="" id=""></InputArea>
        <SendButton>Enviar</SendButton>
      </ContactoCtn>
    </>
  )
}
