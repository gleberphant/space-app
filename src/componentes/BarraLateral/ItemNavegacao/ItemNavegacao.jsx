import styled from "styled-components"



const LIEstilizado = styled.li`

    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 22px;
    color: ${(props) => props.ativo?'#7B78E5':'#D9D9D9'};
`



export default function ItemNavegacao({children, icone, ativo=false}){

    return(
        <LIEstilizado ativo={ativo}>
            <img src={`${icone}${ativo?'-ativo.png':'-inativo.png'}`}/> {children}
        </LIEstilizado>
    )

}