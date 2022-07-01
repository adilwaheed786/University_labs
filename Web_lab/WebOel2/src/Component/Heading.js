import React from 'react'
import Icon from './Icon'

function Heading(props)
{
    return(
        <>
           
           <h2 className="bottom"> <Icon icon={props.icon}/> {props.head}</h2>                                                                                                
        </>
    );
}
export default Heading;