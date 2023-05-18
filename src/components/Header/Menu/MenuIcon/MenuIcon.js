import "./MenuIcon.css";

const MenuIcon = (props) => {
  return (
    <div className="menu-container">
        <div className="menu-container__icon" onClick={props.menuClickHandler}></div>
        {props.children}
    </div>
  );
};

export default MenuIcon
