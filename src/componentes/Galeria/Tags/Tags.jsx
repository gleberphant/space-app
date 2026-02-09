import {
    Titulo,
    TagsContainer,
    Tag,
    Div
} from './Tags.styled'

export default function Tags({ listaTags, selecionarTag }) {
    return (
        <TagsContainer>
            <Titulo>Filtre por TAG</Titulo>
            <Div> {listaTags.map((tag) => <Tag key={tag.id} onClick={() => selecionarTag(tag.id)}>  {tag.titulo} </Tag>)}</Div>
        </TagsContainer>
    )
}