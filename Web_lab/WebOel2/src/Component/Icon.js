import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon(props)
{
    return(
        <FontAwesomeIcon icon={props.icon} className={props.className}/>
    );
}
export default Icon;