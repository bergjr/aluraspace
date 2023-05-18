import { useState } from 'react'
import './Header.css'
import Logo from './Logo/Logo'
import MenuIcon from './Menu/MenuIcon/MenuIcon'
import MenuList from './Menu/MenuList/MenuList'
import Search from './Search/Search'
import Banner from './Banner/Banner'
import { useMediaQuery } from 'react-responsive'

const Header = (props) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuClickHandler = () => {
        setMenuOpen(isOpen => {
          if (isOpen) {
            return false
          }
          else 
            return true
        })
    }

    const isTablet = useMediaQuery({query: '(min-width: 744px'})

    return (
        <header className="header"> 
            <div className='header-container'>
                <MenuIcon menuClickHandler={menuClickHandler}>
                    {menuOpen && <MenuList menuClickHandler={menuClickHandler} />}
                </MenuIcon>
                <Logo />
                <Search />
                { isTablet && <MenuList menuClickHandler={menuClickHandler} /> }
                <Banner />
            </div>
        </header>
    )
}

export default Header