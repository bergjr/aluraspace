import './TagNav.css'

const TagNav = (props) => {
    return (
        <div className='tags'>
            <h3 className='tags__text'>Busque por tags:</h3>
            <ul className='tags__container'>
                <li tag='Estrelas' className='tags__container__items' onClick={e => props.onTagClicked(e.target.attributes.tag.value)}>Estrelas</li>
                <li tag='Galáxias' className='tags__container__items'  onClick={e => props.onTagClicked(e.target.attributes.tag.value)}>Galáxias</li>
                <li tag='Lua' className='tags__container__items'  onClick={e => props.onTagClicked(e.target.attributes.tag.value)}>Lua</li>
                <li tag='Planetas' className='tags__container__items'  onClick={e => props.onTagClicked(e.target.attributes.tag.value)}>Planetas</li>
            </ul>
        </div>
    )
}

export default TagNav