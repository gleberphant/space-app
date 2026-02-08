import {styled} from "styled-components"
import CampoTexto from "../CampoTexto/CampoTexto"
import imgLogo from '../../assets/logo.png'

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;   
`

const IMGEstilizado = styled.img`
    max-width: 212px;
`

export default function Cabecalho(){
    return(
        <>
        <HeaderEstilizado>
        <IMGEstilizado src={imgLogo}/>
        <CampoTexto> Buscar </CampoTexto>
        </HeaderEstilizado>
        
        </>
    )
}