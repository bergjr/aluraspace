import Input from '../../UI/Input/Input'
import './Search.css'

const Search = () => {
    return(
        <div className='search-container'>
           <Input className="search" type="text" placeholder="What do you want to search?" />
        </div>
    )
}

export default Search