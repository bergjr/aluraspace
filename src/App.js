import { Fragment, useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import TagNav from './components/Main/TagNav/TagNav';
import Gallery from './components/Main/Gallery/Gallery';
import Footer from './components/Footer/Footer';


function App() {
  
  const [photos, setPhotos] = useState([
    {
      id: Math.random().toString(),
      name: 'Earth',
      source: 'Wikipedia',
      photographer: 'Berg',
      satelite: 'Moon',
      photo: 'earth.jpg',
      tag: 'Planetas',
      favorite: true
    },
    {
      id: Math.random().toString(),
      name: 'Orion',
      source: 'Wikipedia',
      photographer: 'Berg',
      satelite: 'Moon',
      photo: 'orion.jpg',
      tag: 'Galáxias',
      favorite: true
    },
    {
      id: Math.random().toString(),
      name: 'Pink Orion',
      source: 'Wikipedia',
      photographer: 'Berg',
      satelite: 'Moon',
      photo: 'pinkerion.jpg',
      tag: 'Galáxias',
      favorite: true
    },
    {
      id: Math.random().toString(),
      name: 'Stars ',
      source: 'Wikipedia',
      photographer: 'Berg',
      satelite: 'Moon',
      photo: 'star1.jpg',
      tag: 'Estrelas',
      favorite: false
    },
    {
      id: Math.random().toString(),
      name: 'Stars and Tree ',
      source: 'Wikipedia',
      photographer: 'Berg',
      satelite: 'Moon',
      photo: 'star2.jpg',
      tag: 'Estrelas',
      favorite: false
    },
    {
      id: Math.random().toString(),
      name: 'Jupiter',
      source: 'Wikipedia',
      photographer: 'Berg',
      satelite: 'Moon',
      photo: 'jupiter.jpg',
      tag: 'Planetas',
      favorite: false
    },
    {
      id: Math.random().toString(),
      name: 'Moon',
      source: 'Wikipedia',
      photographer: 'Berg',
      satelite: 'Moon',
      photo: 'moon.jpg',
      tag: 'Lua',
      favorite: true
    }
  ])

  const [tag, setTag] = useState('')

  const onTagClicked = (t) => {
    setTag(t)
  }

  const onFavoriteHandler = (id) => {
    setPhotos( photos.map( photo => {
      if (photo.id === id) {
        photo.favorite = !photo.favorite
      }
      return photo
    }))
  }

  return (
    <Fragment>
      <Header>
      </Header>
      <Main>
        <TagNav onTagClicked={onTagClicked} />
        <Gallery onFavorite={onFavoriteHandler} tag={tag} items={photos} className="main-gallery" title="Navegue pela Galeria" />
        <Gallery items={photos.filter(photo => photo.favorite)} className="side-gallery" title="Populares" hideElements={true} />
      </Main>
      <Footer />
    </Fragment>
  );
}

export default App;
