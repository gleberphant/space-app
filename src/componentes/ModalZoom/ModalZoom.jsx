
import {
    Overlay,
    Dialog,
    BotaoIcone
} from './ModalZoom.styled'

import Imagem from "../Galeria/Imagem/Imagem"
import iconeFechar from '../../assets/icones/fechar.png'


export default function ModalZoom({ foto, fechar, favoritar }) {


    if (foto) return (
        <>
            <Overlay />
            <Dialog open={!!foto} onClose={fechar}>
                <Imagem imagem={foto} expandida={true} favoritar={favoritar} />
                <form method="dialog">
                    <BotaoIcone formMethod="dialog">
                        <img src={iconeFechar} alt='fechar modal' />
                    </BotaoIcone>
                </form>



            </Dialog>

        </>
    )

    return null
}