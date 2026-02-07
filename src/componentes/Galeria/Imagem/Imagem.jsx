export default function Imagem({imagem}){
    return(
        <p>{imagem.titulo}</p>
        <img src={imagem.path}></img>
    )

}