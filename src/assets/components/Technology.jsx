import React from 'react'
import styled from 'styled-components'
export default function Technology() {
  const reactIcon = (
    <svg
      width='100'
      height='100'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='#81ffe1'
      fill='none'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097' />
      <path d='M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254' />
      <path d='M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978' />
      <path d='M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8' />
      <path d='M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087' />
      <path d='M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393' />
      <path d='M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24' />
    </svg>
  )

  const mongoIcon = (
    <svg
      viewBox='0 0 24 24'
      stroke-width='1.5'
      fill='none'
      stroke='#FF81DC'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0' />
      <path d='M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5' />
    </svg>
  )

  const nodeIcon = (
    <svg
      width='100'
      height='100'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='#A2FF81'
      fill='none'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 3v19' />
      <path d='M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z' />
    </svg>
  )

  return (
    <>
      <div className='space-y-5'>
        <StackRowCtn className='w-[40em]'>
          <StackImgCtn>{reactIcon}</StackImgCtn>
          <p>
            React es la tecnologia mas utilizada en paginas web, creada por
            facebook.
          </p>
        </StackRowCtn>

        <StackRowCtn className='w-[40em]'>
          <StackImgCtn>{nodeIcon}</StackImgCtn>
          <p>
            NodeJS El servidor donde se procesan todos los datos de cuentas,
            usuarios, productos y mas!
          </p>
        </StackRowCtn>

        <StackRowCtn className='w-[40em]'>
          <StackImgCtn>{mongoIcon}</StackImgCtn>
          <p>
            MongoDB La de datos donde se almacena la informacion, usuarios,
            productos, contraseñas
          </p>
        </StackRowCtn>
      </div>
    </>
  )
}

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
  border-radius: 37px;
  display: flex;
  align-items: center;
  padding-right: 1em;
  justify-content: center;
  @media (max-width: 700px) {
    height: 100%;
    width: 100%;
    padding: 0;
    padding: 15px;
    flex-direction: column;
    display: flex;
    text-align: center;
  }
`
