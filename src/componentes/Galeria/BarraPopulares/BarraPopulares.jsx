
import styled from "styled-components"
import Titulo from "../../Titulo/Titulo"
import { useState } from "react"

const ColunaFotos = styled.section`
    display:flex;
    flex-direction:column;
    gap:16px;
`

const Imagem = styled.img`
    max-width: 112px;
    border-radius: 20px;
`
const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`


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