import './normalize.css'
import './App.css'


import { ConteinerApp, ConteinerMain, ConteinerGaleria } from './App.styled'

import BarraMenu from "./componentes/BarraMenu/BarraMenu"
import Cabecalho from "./componentes/Cabecalho/Cabecalho"
import Banner from "./componentes/Banner/Banner"
import Galeria from "./componentes/Galeria/Galeria"
import backgroundImage from './assets/banner.png'
import fotosJson from "./arquivos-json/fotos.json"
import ModalZoom from "./componentes/ModalZoom/ModalZoom"
import Rodape from "./componentes/Rodape/Rodape"

import { useState } from "react"


export default function App() {

  const [fotos, setFotos] = useState(fotosJson)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)


  const filtrarTag = (tagId) => {

    console.log(tagId)

    if (tagId === 0) setFotos(fotosJson)
    else setFotos(fotosJson.filter(
      (foto) => foto.tagId === tagId
    ))

  }

  const favoritar = (favoritoId) => {


    const temp = fotos.map(
      (foto) => {
        if (foto.id === favoritoId) foto.favorito = foto.favorito ? false : true
        return foto
      }
    )

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
            <Galeria fotos={fotos} darZoom={(foto) => setFotoSelecionada(foto)} favoritar={favoritar} filtrarTag={filtrarTag} />
          </ConteinerGaleria>
        </ConteinerMain>
        <Rodape />
      </ConteinerApp>
      <ModalZoom foto={fotoSelecionada} fechar={() => setFotoSelecionada(null)} favoritar={favoritar} />
    </>
  )
}
