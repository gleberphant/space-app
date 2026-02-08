import { styled } from "styled-components"

import BarraMenu from "./componentes/BarraMenu/BarraMenu"
import Cabecalho from "./componentes/Cabecalho/Cabecalho"
import Banner from "./componentes/Banner/Banner"
import Galeria from "./componentes/Galeria/Galeria"
import backgroundImage from './assets/banner.png'
import fotosJson from "./arquivos-json/fotos.json"
import ModalZoom from "./componentes/ModalZoom/ModalZoom"

import './normalize.css'
import './App.css'

import { useState } from "react"


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

  const [fotos, setFotos] = useState(fotosJson)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)


  const favoritar = (favoritoId) => {
    

    const temp = fotos.map(
      (foto) => {
        if(foto.id===favoritoId) foto.favorito = foto.favorito? false : true 
      return foto  }
    )
console.log(temp)
    setFotos(temp)

  }

  return (
    <>

      <ConteinerApp>
        <Cabecalho />
        <ConteinerMain>

          <BarraMenu />
          <ConteinerGaleria>
            <Banner texto='A maior galeria do espaço' backgroundImage={backgroundImage} />
            <Galeria fotos={fotos} darZoom={(foto) => setFotoSelecionada(foto)} favoritar={favoritar} />

          </ConteinerGaleria>
        </ConteinerMain>
      </ConteinerApp>
      <ModalZoom foto={fotoSelecionada} fechar={() => setFotoSelecionada(null)} />
    </>
  )
}
