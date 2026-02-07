export default function Imagem({ imagem }) {
    return (
        <div>
            <p>{imagem.titulo}</p>
            <img src={imagem.path}></img>
            <p>{imagem.fonte}</p>
        </div>
    )

}