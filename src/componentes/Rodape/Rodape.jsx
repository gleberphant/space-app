import {RodapeEstilizado, IconeContainer, RodapeTexto} from './Rodape.styled'
export default function Rodape() {
    return (
        <RodapeEstilizado>
            <IconeContainer>
                <li>
                    <a href="https://www.linkedin.com/in/handersongleber/">
                        <img src="imagens/sociais/facebook.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com/handersongleber">
                        <img src="imagens/sociais/instagram.svg" alt="" />
                    </a>
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por HANDERSON GLEBER DE LIMA CAVALCANTI.</RodapeTexto>
        </RodapeEstilizado>
    );
}

