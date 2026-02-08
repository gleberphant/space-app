import {
    HeaderEstilizado,
    IMGEstilizado
} from './Cabecalho.styled'

import CampoTexto from "../CampoTexto/CampoTexto"
import imgLogo from '../../assets/logo.png'



export default function Cabecalho() {
    return (
        <>
            <HeaderEstilizado>
                <IMGEstilizado src={imgLogo} />
                <CampoTexto> Buscar </CampoTexto>
            </HeaderEstilizado>

        </>
    )
}