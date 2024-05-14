import React, { useState } from 'react'
import styled from 'styled-components'
import FlyImg from '../../assets/img/PageFlybondi.webp'
import MenuImg from '../../assets/img/menuBackground.webp'
import ErideImg from '../../assets/img/EridePageImage.webp'

const CarrouselCtn = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 400px;
`

const Image = styled.img`
  box-shadow: 0px 0px 30px 10px #112835;
  border-radius: 32px;
  z-index: 2;
  scale: 0.8;
  transition: 400ms;
  cursor: pointer;
  position: absolute;
  scale: ${(props) => props.scale};
  translate: ${(props) => props.translate};
  filter: grayscale(${(props) => props.gray});
`

export default function Proyects() {
  const [animationState, setAnimationState] = useState({
    fly: { position: '0em', scale: 1, gray: 0 },
    menu: { position: '-47em', scale: 0.8, gray: 1 },
    eride: { position: '47em', scale: 0.8, gray: 1 },
  })

  function updateAnimationState(projectName) {
    setAnimationState((prevState) => {
      const updatedState = {
        fly: { position: prevState.fly.position, scale: 0.8, gray: 1 },
        menu: { position: '-47em', scale: 0.8, gray: 1 },
        eride: { position: '47em', scale: 0.8, gray: 1 },
      }

      if (projectName === 'eride') {
        updatedState.fly.position = '47em'
      } else {
        updatedState.fly.position = '-47em'
      }

      updatedState[projectName] = { position: '0em', scale: 1, gray: 0 }

      return updatedState
    })
  }

  function renderImages() {
    return Object.keys(animationState).map((projectName) => (
      <Image
        key={projectName}
        gray={animationState[projectName].gray}
        translate={animationState[projectName].position}
        scale={animationState[projectName].scale}
        name={projectName}
        onClick={() => updateAnimationState(projectName)}
        src={
          projectName === 'fly'
            ? FlyImg
            : projectName === 'menu'
            ? MenuImg
            : ErideImg
        }
        alt=""
      />
    ))
  }

  return (
    <>
      <CarrouselCtn>{renderImages()}</CarrouselCtn>
    </>
  )
}
