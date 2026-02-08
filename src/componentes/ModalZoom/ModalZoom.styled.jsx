
import styled from "styled-components"


export const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

`
export const Dialog = styled.dialog`
    position: fixed;
    top: 24px;
    background: transparent;
    padding: 0;
    border: 0;
    border-color: black;
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

export const BotaoIcone = styled.button`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
`


