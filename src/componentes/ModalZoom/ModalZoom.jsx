
import Imagem from "../Galeria/Imagem/Imagem"
import styled from "styled-components"
import iconeFechar from '../../assets/icones/fechar.png'


const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

`
const Dialog = styled.dialog`
    position: fixed;
    top: 24px;
    background: transparent;
    padding: 0;
    border: 10;
    border-color: green;
    width: 1156px;
    max-width: 95%;
    max-height: 95%;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
            background: transparent;
           
        }
    }
`

const BotaoIcone = styled.button`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
`


export default function ModalZoom({ foto, fechar }) {
    
    
    if (foto) return (
         <>
            <Overlay />
            <Dialog open={!!foto} onClose={fechar}>
                <Imagem imagem={foto} expandida={true} />
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