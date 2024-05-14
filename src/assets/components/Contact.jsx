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
`
const Input = styled.input`
  background-color: #17262f;
  border: 0px;
  border-radius: 20px;
  font-size: 20px;
  width: 700px;
  padding-inline: 20px;
  padding-block: 10px;
  color: #fff;
`
const InputArea = styled.textarea`
  background-color: #17262f;
  border: 0px;
  border-radius: 20px;
  font-size: 20px;
  width: 700px;
  height: 200px;
  padding-inline: 20px;
  padding-block: 10px;
  color: #fff;
`
const SendButton = styled.button`
  border: 0px;
  background-color: #a2ff81;
  width: 700px;
  padding: 10px;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background-color: #c1ffaa;
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
