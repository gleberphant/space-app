import { styled } from "styled-components"

import BarraLateral from "./componentes/BarraLateral/BarraLateral"
import Cabecalho from "./componentes/Cabecalho/Cabecalho"
import Banner from "./componentes/Banner/Banner"
import Galeria from "./componentes/Galeria/Galeria"
import backgroundImage from './assets/banner.png'


import './normalize.css'
import './App.css'


const ConteinerApp = styled.div`
    width: 1440px;
    margin: 0 auto;
    max-width: 100%;
  
`
const ConteinerMain = styled.main`
    display:flex;
    gap:24px;
`

const ConteinerGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`



export default function App() {
  return (
    <>
      <ConteinerApp>
        <Cabecalho />
        <ConteinerMain>
          <BarraLateral />
          <ConteinerGaleria>
            <Banner texto='A maior galeria do espaço' backgroundImage={backgroundImage} />
            <Galeria />
          </ConteinerGaleria>
        </ConteinerMain>
      </ConteinerApp>
    </>
  )
}
