import React from 'react'
import Icon from './Icon'
import { faFacebook,faLinkedinIn,faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { SocialLinkList } from './SocialLinkList';
function Footer()
{
    return(
        <>
            
            <footer id="footer">
            <div class="container foot">
                <h3 id="ft1">Supplier</h3>
                <p id="ft2">Car Supplier</p>
                
                    <div class="space">
                             <a href={SocialLinkList[0].link} target="_blank" className="git"> <Icon icon={faGithub} className="fa-brands fa-github"/></a>
                            <a href={SocialLinkList[1].link} target="_blank" className="fb"><Icon icon={faFacebook} className="fa-brands fa-facebook" /></a>
                            <a href={SocialLinkList[2].link} target="_blank" className="link"><Icon icon={faLinkedinIn} className="fa-brands fa-linkedin"/></a>
                            <a href={SocialLinkList[3].link} target="_blank" className="inst"><Icon icon={faInstagram} className="fa-brands fa-instagram"/></a>  </div>
                        <h5><b>&copy;</b><i>Copy Right 2022</i></h5>
            </div>        
    </footer>
        </>
    );
}
export default Footer;
