import { createGlobalStyle, styled } from "styled-components"

import BarraLateral from "./componentes/BarraLateral/BarraLateral"
import Cabecalho from "./componentes/Cabecalho/Cabecalho"
import Banner from "./componentes/Banner/Banner"

import backgroundImage from './assets/banner.png'
import GandhiSansRegular from './assets/fontes/GandhiSans-Regular.otf'
import GandhiSansBold from './assets/fontes/GandhiSans-Bold.otf'

import 'normalize.css'

const EstiloGlobal = createGlobalStyle`
      @font-face {
          font-family: 'GandhiSansRegular';
          src:  url(${GandhiSansRegular});
      }
      @font-face {
          font-family: 'GandhiSansBold';
          src:  url(${GandhiSansBold});
      }
`

const FundoGradiente = styled.div`


      background: linear-gradient(180deg, #041833, #00244f, #154580);
      width:100%;
      min-height:100vh;
      `
function App() {


  return (
    <>
      <EstiloGlobal />
      <FundoGradiente>
        <Cabecalho />
        <BarraLateral />
        <Banner texto='Bem-Vindo' backgroundImage={backgroundImage} />
      </FundoGradiente>
    </>
  )
}

export default App
