import styled from "styled-components"
import Tags from "./Tags/Tags"
import BarraPopulares from "./BarraPopulares/BarraPopulares"
import Titulo from "../Titulo/Titulo"
import Imagem from "./Imagem/Imagem"

import { useState } from "react"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 24px;
`

export default function Galeria({ fotos = [], darZoom, favoritar }) {
    
    const fotosFavoritas = fotos.filter((foto) => foto.favorito === true)

    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela Galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(
                            (foto) => <Imagem key={foto.id} imagem={foto} darZoom={darZoom} favoritar={favoritar}></Imagem>
                        )}
                    </ImagensContainer>
                </SecaoFluida>
                <BarraPopulares fotosFavoritas={fotosFavoritas}></BarraPopulares>

            </GaleriaContainer>
        </>
    )
}