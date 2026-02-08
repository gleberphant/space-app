
import styled from 'styled-components'

export const Titulo = styled.h3`
    color: #d9d9d9;
    font-size: 24px;
    margin: 0;
`

export const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

export const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    } 
`

export const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`
