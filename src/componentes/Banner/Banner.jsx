import {
    FigureEstilizada,
    TituloEstilizado
} from './Banner.styled'


const Banner = ({texto, backgroundImage}) => {
    return (<
    FigureEstilizada style={{ backgroundImage: `url(${ backgroundImage })` }} >
        <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>)
}

export default Banner