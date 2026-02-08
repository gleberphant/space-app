import {
    GaleriaContainer,
    SecaoFluida,
    ImagensContainer
} from './Galeria.styled.jsx'


import Tags from "./Tags/Tags"
import BarraPopulares from "./BarraPopulares/BarraPopulares"
import Titulo from "../Titulo/Titulo"
import Imagem from "./Imagem/Imagem"


export default function Galeria({ fotos = [], darZoom, favoritar, filtrarTag }) {

    const fotosFavoritas = fotos.filter((foto) => foto.favorito === true)

    return (
        <>
            <Tags filtrarTag={filtrarTag} />
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