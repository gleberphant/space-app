import {
    GaleriaContainer,
    SecaoFluida,
    ImagensContainer
} from './Galeria.styled.jsx'


import Tags from "./Tags/Tags"
import BarraPopulares from "./BarraPopulares/BarraPopulares"
import Titulo from "../Titulo/Titulo"
import Imagem from "./Imagem/Imagem"


export default function Galeria({ listaFotos = [], listaTags = [], darZoom, favoritar, selecionarTag }) {

    const fotosFavoritas = listaFotos.filter((foto) => foto.favorito === true)

    return (
        <>
            <Tags listaTags={listaTags} selecionarTag={selecionarTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela Galeria</Titulo>
                    <ImagensContainer>
                        {listaFotos.map(
                            (foto) => <Imagem key={foto.id} imagem={foto} darZoom={darZoom} favoritar={favoritar}></Imagem>
                        )}
                    </ImagensContainer>
                </SecaoFluida>
                <BarraPopulares fotosFavoritas={fotosFavoritas}></BarraPopulares>

            </GaleriaContainer>
        </>
    )
}