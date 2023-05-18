import './Gallery.css';
import hexToRgba from 'hex-to-rgba';
import { AiFillHeart, AiOutlineHeart, AiOutlineExpandAlt } from 'react-icons/ai'
import Button from '../../UI/Button/Button';

const Gallery = (props) => {

    const onClickFavorite = (e) => {
        props.onFavorite(e.currentTarget.id)
    }

    let items = props.items
    if (props.tag) {
        items = items.filter(item => item.tag === props.tag)
    }

    return (
        <section className={`gallery ${props.className}`}>
            <h2>{props.title}</h2>
            <ul className='gallery__container'>
                {items.map(item => {
                    return (
                        <li className='gallery__container__item' style={{backgroundImage: `url(/assets/${item.photo})`,
                                                                         backgroundRepeat: 'no-repeat',
                                                                         backgroundSize: 'cover',
                                                                         backgroundPosition: 'center'
                                                                        }}>
                            {!props.hideElements && <p className="item__tag" style={{backgroundColor: hexToRgba('#D8D8D8', 0.1)}}>{item.tag}</p> }
                            {!props.hideElements && <div className='item__description' >
                                 <div className='item__description__text'>
                                    <h3>{item.name}</h3>
                                    <p>{`${item.source} | ${item.photographer} | ${item.satelite}`}</p>
                                </div> 
                                <div className='item__description__buttons'>
                                    {!item.favorite ? 
                                        <AiOutlineHeart onClick={onClickFavorite} id={item.id} size="30" /> 
                                        : 
                                        <AiFillHeart onClick={onClickFavorite} id={item.id} size="30"/>
                                    }
                                    <AiOutlineExpandAlt size="30" />
                                </div>
                            </div> }

                        </li>   
                )})}
            </ul>
            <Button text="Veja Mais" className="veja-mais" />
        </section>    
    );
}

export default Gallery;
