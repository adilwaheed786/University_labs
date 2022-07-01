import React from 'react'
import { faLocation,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Heading from './Heading';
import ContactChild from './ContactChild';
function Contact()
{
    return(
        <>
            
        <section id="contact">
           <div class="container-fluid">            
                <div class="resume box proj">
                <Heading icon={faPhone} head="Contact"/>
                </div>                    
                <div class="row p-3 d-flex align-items-center justify-content-center">
                    <ContactChild icon={faLocation} head="Location" para="Karachi,Pakistan"/>
                    <ContactChild icon={faPhone} head="Contact" para="+92 321 2347886"/>
                    <ContactChild icon={faEnvelope} head="E-mail" para="aSupplier.com@gmail.com"/>
                    
                </div>
            </div>        
        </section>   
        </>
    );
}
export default Contact;