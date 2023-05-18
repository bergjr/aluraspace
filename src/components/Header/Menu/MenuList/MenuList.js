import "./MenuList.css";
import {AiFillBulb, AiFillEye, AiFillHome, AiFillLike, AiFillStar, AiOutlineClose} from 'react-icons/ai'

const MenuList = (props) => {
  return (
    <nav className="menu-list">
        <ul className="menu-list__container">
          <li onClick={props.menuClickHandler}  className="menu-list__container__item">
              <AiOutlineClose />
          </li>
          <li className="menu-list__container__item">
              <a href="#asdasdas"><AiFillHome /> Início </a>
          </li>
          <li className="menu-list__container__item">
              <a href="#asdasd"><AiFillEye /> Mais Vistas </a>
          </li>
          <li className="menu-list__container__item">
              <a href="#asd"><AiFillLike /> Mais Curtidas </a>
          </li>
          <li className="menu-list__container__item">
              <a href="#asd"><AiFillStar /> Novas </a>
          </li>
          <li className="menu-list__container__item">
              <a href="#asd"><AiFillBulb /> Surpreenda-me </a>
          </li>
        </ul>
      </nav>
  );
};

export default MenuList;
