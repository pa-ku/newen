import styled from 'styled-components'
import newenLogo from './assets/img/newen.png'
import StackRow from './assets/components/StackRow'

import Title from './assets/components/Title'
import Card from './assets/components/Card'
import Proyects from './assets/components/Proyects'
import Contact from './assets/components/Contact'
import WhyInvest from './assets/components/WhyInvest'

const Header = styled.header`
  background-color: #010d13;
  height: 300px;
  width: 100%;
  border-radius: 0px 0px 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top, #010d13, #17262f);
`
const NewenImg = styled.img`
  max-width: 600px;
  max-height: 140px;
  object-fit: contain;

  @media (max-width: 700px) {
    width: 350px;
  }
`
const Subtitle = styled.p`
  text-align: center;
  color: #cfed8e;
  font-size: 25px;
  width: 100%;
`
export default function App() {
  return (
    <>
      <Header>
        <div>
          <NewenImg src={newenLogo} alt="" />
          <Subtitle>Tu idea realidad</Subtitle>
        </div>
      </Header>
      <ContentWrapper>
        <SectionWrapper>
          <Title>Por que invertir en una pagina web?</Title>
          <WhyInvest />
        </SectionWrapper>

        <SectionWrapper>
          <Title>Que tecnologias utilizamos?</Title>
          <StackCtn>
            <StackRow
              text={
                'React es la tecnologia mas utilizada en paginas web, creada por facebook. Empresas que utilizan React: Facebook, Netflix, Airbnb, Dropbox, Yahoo, Instagram, eBay, Coursera, IMDb, PayPal, Tesla, Walmart y muchos mas!'
              }
              icon={
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#81ffe1"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
                  <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
                  <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
                  <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
                  <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
                  <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
                  <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
                </svg>
              }
            />
            <StackRow
              text={
                'NodeJS El servidor donde se procesan todos los datos de cuentas, usuarios, productos y mas! Empresas que utilizan Node: LinkedIn, Netflix, eBay, PayPal, Yahoo!, Uber.'
              }
              icon={
                <svg
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  stroke="#FF81DC"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
                  <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
                </svg>
              }
            />

            <StackRow
              text={
                'MongoDB La de datos donde se almacena la informacion, usuarios, productos, claves Empresas que utilizan Mongo: eBay, IBM, Forbes, eBay, Telefónica, CERN, The New York Times'
              }
              icon={
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#A2FF81"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 3v19" />
                  <path d="M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z" />
                </svg>
              }
            />
          </StackCtn>
        </SectionWrapper>

        <SectionWrapper>
          <Title>Nuestros servicios</Title>
          <CardsCtn>
            <Card
              title={'Sitio estatico'}
              price={'ARS 50.000 - 70.000'}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#c9de00"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
              }
              items={['Pagina Home', 'Seccion de contacto', 'Redes Sociales']}
            />
            <Card
              title={'Catalogo'}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#c9de00"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                </svg>
              }
              price={'ARS 100.000 - 150.000'}
              items={['Catalogo de componentes', 'testing', 'testing']}
            />
            <Card
              title={'E-commerce'}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#c9de00"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M13.5 17h-7.5v-14h-2" />
                  <path d="M6 5l14 1l-.858 6.004m-2.642 .996h-10.5" />
                  <path d="M19 16l-2 3h4l-2 3" />
                </svg>
              }
              items={[
                'Pagina de inicio',
                'Compras online',
                'Catalogo de productos',
                'Edicion de productos online',
              ]}
              price={'ARS 200.000 - 300.000'}
            />
          </CardsCtn>
        </SectionWrapper>
      </ContentWrapper>
      <SectionWrapper>
        <Title>Proyectos</Title>

        <Proyects />
      </SectionWrapper>

      <Contact />
    </>
  )
}

const SectionWrapper = styled.section`
  padding-block: 4em;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 3em;
`

const ContentWrapper = styled.div`
  padding-inline: 1em;

  display: flex;
  flex-direction: column;
`
const CardsCtn = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 25px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const StackCtn = styled.section`
  gap: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & p {
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
  }
`
