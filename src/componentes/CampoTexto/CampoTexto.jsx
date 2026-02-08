import {
    DivEstilizado,
    InputEstilizado,
    ImgEstilizado
} from './CampoTexto.styled'
import searchIcon from "../../assets/search.png"


export default function CampoTexto() {
    return (
        <DivEstilizado>
            <InputEstilizado />
            <ImgEstilizado src={searchIcon} />
        </DivEstilizado>

    )
}