import { LIEstilizado } from './ItemNavegacao.styled'


export default function ItemNavegacao({ children, iconeAtivo, iconeInativo, ativo = false }) {

    return (
        <LIEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" /> {children}
        </LIEstilizado>
    )

}