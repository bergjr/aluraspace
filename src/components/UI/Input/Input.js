import { Fragment, useState } from 'react'
import './Input.css'

const Button = (props) => {

    const [text, setText] = useState();

    const onChangeHandler = (e) => {
        setText(e.target.value);
    }

    return(
       <Fragment>
            <input value={text} onChange={onChangeHandler} className={props.className} type={props.type} placeholder={props.placeholder} />
       </Fragment>
    )
}

export default Button
