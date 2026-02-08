import {styled} from "styled-components"
import ItemNavegacao from "./ItemNavegacao/ItemNavegacao"


import iconeHomeAtivo from '../../assets/icones/home-ativo.png'
import iconeMaisVistasAtivo from '../../assets/icones/mais-vistas-ativo.png'
import iconeMaisCurtidasAtivo from '../../assets/icones/mais-curtidas-ativo.png'
import iconeNovasAtivo from '../../assets/icones/novas-ativo.png'
import iconeSurpreendaMeAtivo from '../../assets/icones/surpreenda-me-ativo.png'

import iconeHomeInativo from '../../assets/icones/home-inativo.png'
import iconeMaisVistasInativo from '../../assets/icones/mais-vistas-inativo.png'
import iconeMaisCurtidasInativo from '../../assets/icones/mais-curtidas-inativo.png'
import iconeNovasInativo from '../../assets/icones/novas-inativo.png'
import iconeSurpreendaMeInativo from '../../assets/icones/surpreenda-me-inativo.png'


 const ULEstilizado = styled.ul`
            list-style: none;
            padding: 0;
            margin: 0;
            width: 212px;
    `

export default function BarraMenu() {
    const itens = [
        {
            texto: 'Home',
            iconeAtivo: iconeHomeAtivo,
            iconeInativo: iconeHomeInativo,
            ativo: true
        },
        {
            texto: 'Mais Vistas',
            iconeAtivo: iconeMaisVistasAtivo,
            iconeInativo: iconeMaisVistasInativo,
            ativo: false
        },
        {
            texto: 'Mais Curtidas',
            iconeAtivo: iconeMaisCurtidasAtivo,
            iconeInativo: iconeMaisCurtidasInativo,
            ativo: false
        },
        {
            texto: 'Novas',
            iconeAtivo: iconeNovasAtivo,
            iconeInativo: iconeNovasInativo,
            ativo: false
        },
        {
            texto: 'Surpreenda-me',
            iconeAtivo: iconeSurpreendaMeAtivo,
            iconeInativo: iconeSurpreendaMeInativo,
            ativo: false
        }
    ]

    return (
        <aside>
            <nav>
                <ULEstilizado>
                    {itens.map(item => (
                        <ItemNavegacao key={item.texto} iconeAtivo={item.iconeAtivo} iconeInativo={item.iconeInativo} ativo={item.ativo}>
                            {item.texto}
                        </ItemNavegacao>
                    ))}
                </ULEstilizado>
            </nav>
        </aside>

    )

}