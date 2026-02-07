import {styled} from "styled-components"
import ItemNavegacao from "./ItemNavegacao/ItemNavegacao"
 
 const ULEstilizado = styled.ul`
            list-style: none;
            padding: 0;
            margin: 0;
            width: 212px;
    `

export default function BarraLateral() {
    return (
        <aside>
            <nav>
                <ULEstilizado>
                    <ItemNavegacao icone="/icones/home" ativo={true}>Home </ItemNavegacao>
                    <ItemNavegacao icone="/icones/mais-vistas" ativo={false}>Mais Vistas</ItemNavegacao>
                    <ItemNavegacao icone="/icones/mais-curtidas" ativo={false}>Mais Curtidas</ItemNavegacao>
                    <ItemNavegacao icone="/icones/novas" ativo={false}>Novas</ItemNavegacao>
                    <ItemNavegacao icone="/icones/surpreenda-me" ativo={false}>Surpreenda-me</ItemNavegacao>
                </ULEstilizado>
            </nav>
        </aside>

    )

}