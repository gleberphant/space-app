import {
    DivEstilizado,
    InputEstilizado,
    ImgEstilizado
} from './CampoTexto.styled'
import searchIcon from "../../assets/search.png"


export default function CampoTexto({buscar}) {
    return (
        <DivEstilizado>
            <InputEstilizado onChange={(e)=> buscar(e.target.value)}/>
            <ImgEstilizado src={searchIcon} />
        </DivEstilizado>

    )
}