export default function Imagem({imagem}){
    return(
        <div>
        <p>{imagem.titulo}</p>
        <img src={imagem.path}></img>
        </div>
    )

}