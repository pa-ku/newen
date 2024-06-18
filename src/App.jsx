import styled from 'styled-components'

import Title from './assets/components/Title'
import Card from './assets/components/Card'
import Proyects from './assets/components/Proyects'
import Contact from './assets/components/Contact'
import WhyInvest from './assets/components/WhyInvest'
import Technology from './assets/components/Technology'
import Header from './assets/components/Header'

export default function App() {
  return (
    <>
      <Header />
      <div className='py-20 space-y-24'>
        <section className='px-2 space-y-20'>
          <Title>Por que invertir en una pagina web?</Title>
          <WhyInvest />
        </section>

        <main className='space-y-20'>
          <Title>Nuestros servicios</Title>
          <CardsCtn className='flex-col md:flex-row bg-gradient-to-t from-transparent via-[var(--main-color-400)] to-transparent'>
            <Card
              title={'Sitio estatico'}
              price={'ARS 50.000 - 70.000'}
              icon={
                <svg
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='#c9de00'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M5 12l-2 0l9 -9l9 9l-2 0' />
                  <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
                  <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
                </svg>
              }
              items={['Pagina de inicio', 'Seccion de contacto', 'Responsive']}
              negativeItems={['Filtro de productos', 'Catalogo de productos']}
            />
            <Card
              title={'Catalogo'}
              icon={
                <svg
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='#c9de00'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
                  <path d='M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
                </svg>
              }
              price={'ARS 100.000 - 150.000'}
              items={[
                'Seccion de contacto',
                'Catalogo de productos',
                'Filtro de productos',
                'Responsive',
              ]}
              negativeItems={[
                'Pasarela de pagos',
                'Edicion de productos online',
              ]}
            />
            <Card
              title={'E-commerce'}
              icon={
                <svg
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='#c9de00'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
                  <path d='M13.5 17h-7.5v-14h-2' />
                  <path d='M6 5l14 1l-.858 6.004m-2.642 .996h-10.5' />
                  <path d='M19 16l-2 3h4l-2 3' />
                </svg>
              }
              items={[
                'Pasarela de pagos',
                'Edicion de productos online',
                'Sección de contacto',
                'Catalogo de productos',
                'Filtro de productos',
                'Mercadopago',
              ]}
              negativeItems={[]}
              price={'ARS 200.000 - 300.000'}
            />
          </CardsCtn>
        </main>

        <section className='space-y-20 text-white w-full items-center px-3 flex flex-col'>
          <Title>Que tecnologias utilizamos?</Title>
          <Technology />
        </section>

        <section className='space-y-10'>
          <Title>Trabajos</Title>
          <Proyects />
        </section>
      </div>
      <Contact />
    </>
  )
}

const CardsCtn = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  div:nth-child(1) {
    border-right: 1px solid var(--main-color-200);
  }
  div:nth-child(2) {
    border-right: 1px solid var(--main-color-200);
  }
  div + :last-child {
    background-color: var(--main-color-600);
    border-radius: 0px 10px 10px 0px;
    backdrop-filter: blur(90px);
  }
  @media (max-width: 700px) {
    flex-direction: column;
    div:nth-child(1) {
      border-right: none;
    }
    div:nth-child(2) {
      border-right: none;
    }
  }
`
