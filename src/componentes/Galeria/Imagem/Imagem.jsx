
import styled from "styled-components"
import iconeFavorito from '../../../assets/icones/favorito.png'
import iconeFavoritoAtivo from '../../../assets/icones/favorito-ativo.png'

import iconeExpandir from '../../../assets/icones/expandir.png'

const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;

    & > img {
        max-width: 100%;
        max-height: 90%;
        border-radius: 20px 20px 0 0;
    }

    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        width: 100%;
        padding: 12px;

        h3 {
            font-family: ${(props) => props.$expandida ? 'GandhiSansRegular' : 'GandhiSansBold'};
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: ${(props) => props.$expandida ? '20px' : '16px'};
        }
    }
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Button = styled.button`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    
`

export default function Imagem({ imagem, expandida = false, darZoom, favoritar }) {


    return (
        <Figure $expandida={expandida}>
            <img src={imagem.path} alt={imagem.alt}></img>
            <figcaption>
                <Div>
                    <h3>{imagem.id} {imagem.titulo}</h3>
                </Div>
                <Div>
                    <h4>{imagem.fonte}</h4>
                    <Button onClick={() => { favoritar(imagem.id) }} > 
                        <img src={imagem.favorito? iconeFavoritoAtivo:iconeFavorito} /> 
                    </Button>
                    { expandida? '': <Button ><img src={iconeExpandir} onClick={() => darZoom(imagem)} /></Button> }

                </Div>
            </figcaption>
        </Figure>
    )

}