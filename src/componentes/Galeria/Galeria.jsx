import styled from "styled-components"
import Tags from "./Tags/Tags"
import Populares from "./Populares/Populares"
import Titulo from "../Titulo/Titulo"
import Imagem from "./Imagem/Imagem"

import fotosJson from "../../arquivos-json/fotos.json"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

export default function Galeria() {


    return (
        <>
            <Tags/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela Galeria</Titulo>
                    <ImagensContainer>
                        {fotosJson.map(
                            (foto) => <Imagem imagem={foto}></Imagem>
                        )}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares></Populares>
            </GaleriaContainer>
        </>
    )
}