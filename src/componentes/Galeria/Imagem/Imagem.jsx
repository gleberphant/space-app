import styled from "styled-components"

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function Imagem({ imagem }) {
    return (
        <div>
            <p>{imagem.id} {imagem.titulo}</p>
            <img src={imagem.path}></img>
            <Rodape>{imagem.fonte}</Rodape>
        </div>
    )

}