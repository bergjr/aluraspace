import { Fragment } from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <Fragment>
            <button className={props.className} onClick={props.onClickHandler}>{props.text}</button>
        </Fragment>
    );
}

export default Button;
