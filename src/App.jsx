import { styled } from "styled-components"
import BarraLateral from "./componentes/BarraLateral/BarraLateral"
import Cabecalho from "./componentes/Cabecalho/Cabecalho"

const FundoGradiente = styled.div`
        background: linear-gradient(180deg, #041833, #00244f, #154580);
        width:100%;
        min-height:100vh;
        `
function App() {


  return (
    <FundoGradiente>
      <Cabecalho />
      <BarraLateral />
    </FundoGradiente>
  )
}

export default App
