import './normalize.css'
import './App.css'


import { ConteinerApp, ConteinerMain, ConteinerGaleria } from './App.styled'

import BarraMenu from "./componentes/BarraMenu/BarraMenu"
import Cabecalho from "./componentes/Cabecalho/Cabecalho"
import Banner from "./componentes/Banner/Banner"
import Galeria from "./componentes/Galeria/Galeria"
import backgroundImage from './assets/banner.png'
import ModalZoom from "./componentes/ModalZoom/ModalZoom"
import Rodape from "./componentes/Rodape/Rodape"

import jsonFotos from "./dados/fotos.json"
import jsonTags from "./dados/tags.json"

import { useEffect, useMemo, useState } from "react"


export default function App() {

  const [listaFotos, setListaFotos] = useState(jsonFotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState(0)

 

  const favoritar = (favoritoId) => {
    const listaTemp = listaFotos.map((foto) => foto.id === favoritoId ? { ...foto, favorito: !foto.favorito } : foto)
    setListaFotos(listaTemp)

  }

  const listaFiltrada = useMemo(() => {
    return listaFotos.filter((foto) =>
      foto.titulo.toLowerCase().includes(busca.toLocaleLowerCase()) && (filtro === 0 || foto.tagId === filtro)
    )
  }, [busca, filtro, listaFotos])


  const abrirModal = (target) => {
    setFotoSelecionada(target)
  }
  const fecharModal = () => {
    setFotoSelecionada(null)
  }

  return (
    <>
      <ConteinerApp>
        <Cabecalho buscar={setBusca} />
        <ConteinerMain>
          <BarraMenu />
          <ConteinerGaleria>
            <Banner texto='A maior galeria do espaço' backgroundImage={backgroundImage} />
            <Galeria listaFotos={listaFiltrada} listaTags={jsonTags} darZoom={abrirModal} favoritar={favoritar} selecionarTag={setFiltro} />
          </ConteinerGaleria>
        </ConteinerMain>
        <Rodape />
      </ConteinerApp>
      <ModalZoom foto={fotoSelecionada} fechar={fecharModal} favoritar={favoritar} />
    </>
  )
}
