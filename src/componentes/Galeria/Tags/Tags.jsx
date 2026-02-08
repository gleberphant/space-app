import {
    Titulo,
    TagsContainer,
    Tag,
    Div
} from './Tags.styled'

import tagsJson from '../../../arquivos-json/tags.json'

export default function Tags({ filtrarTag }) {
    return (
        <TagsContainer>
            <Titulo>Filtre por TAG</Titulo>
            <Div> {tagsJson.map((tag) => <Tag key={tag.id} onClick={() => filtrarTag(tag.id)}>  {tag.titulo} </Tag>)}</Div>
        </TagsContainer>
    )
}