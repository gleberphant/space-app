import {
    HeaderEstilizado,
    IMGEstilizado
} from './Cabecalho.styled'

import CampoTexto from "../CampoTexto/CampoTexto"
import imgLogo from '../../assets/logo.png'



export default function Cabecalho({buscar}) {
    return (
        <>
            <HeaderEstilizado>
                <IMGEstilizado src={imgLogo} />
                <CampoTexto buscar={buscar}> Buscar </CampoTexto>
            </HeaderEstilizado>

        </>
    )
}