import React from 'react'
import Icon from './Icon'

function ContactChild(props)
{
    return(
        <>
          
                    <div class="col-lg-4 cens p-2">
                        <div class="contact-icon">
                        <Icon icon={props.icon} />
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div class="auto">
                            <h4>{props.head}</h4>
                            <p class="chng" id="ch1">{props.para}</p>
                        </div>   
                    </div>
         
        </>
    );
}
export default ContactChild;