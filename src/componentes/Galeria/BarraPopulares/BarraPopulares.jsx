
import {
    ColunaFotos,
    Imagem,
    Botao
} from './BarraPopulares.styled'

import Titulo from "../../Titulo/Titulo"
import { useState } from "react"



export default function BarraPopulares({ fotosFavoritas = [] }) {

    const [limiteFavoritas, setLimiteFavoritas] = useState(2)



    return (
        <section>
            <Titulo $alinhamento='center'> Populares </Titulo>
            <ColunaFotos>
                {fotosFavoritas.slice(0, limiteFavoritas).map((foto) => <Imagem key={foto.id} src={foto.path} alt={foto.alt} />)}
            </ColunaFotos>
            {limiteFavoritas === fotosFavoritas.length ?
                <Botao onClick={() => { setLimiteFavoritas(1) }}>Ver menos</Botao>
                : <Botao onClick={() => { setLimiteFavoritas(fotosFavoritas.length) }}>Ver mais</Botao>
            }

        </section>
    )
}