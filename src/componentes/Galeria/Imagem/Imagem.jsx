
import {
    Figure,
    Div,
    Button
} from './Imagem.styled'

import iconeFavorito from '../../../assets/icones/favorito.png'
import iconeFavoritoAtivo from '../../../assets/icones/favorito-ativo.png'
import iconeExpandir from '../../../assets/icones/expandir.png'

export default function Imagem({ imagem, expandida = false, darZoom, favoritar }) {

    return (
        <Figure $expandida={expandida}>
            <img src={imagem.path} alt={imagem.alt} onClick={() => { expandida ? false : darZoom(imagem) }} />
            <figcaption>
                <Div>
                    <h3>{imagem.id} {imagem.titulo}</h3>
                </Div>
                <Div>
                    <h4>{imagem.fonte}</h4>
                    <Button onClick={() => { favoritar(imagem.id) }} >
                        <img src={imagem.favorito ? iconeFavoritoAtivo : iconeFavorito} />
                    </Button>
                    {expandida ? '' : <Button ><img src={iconeExpandir} onClick={() => darZoom(imagem)} /></Button>}

                </Div>
            </figcaption>
        </Figure>
    )

}