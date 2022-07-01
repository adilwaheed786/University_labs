import React from 'react'
import file from '../Assets/ADIL WAHEED v2.pdf'
import Icon from './Icon'
import Heading from './Heading';
import { SocialLinkList } from './SocialLinkList';
import { faFacebook,faLinkedinIn,faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons'

function Part1()
{
    return(
        <>     
                        <div>                           
                            <h1>Car Rental</h1>
                            <p className="para">We Offers
                                <span className="content"></span>
                            </p>
                            <div className="resume">
                            <Heading head="Policies"/>
                                {/* <h2 className="bottom">Resume</h2> */}
                                <div className="btn-parent">
                                    <a href={file} target="_blank"
                                        className="btn">Download</a>
                                </div>
                            </div>
                            <div className="space">
                            <a href={SocialLinkList[0].link} target="_blank" className="git"> <Icon icon={faGithub} className="fa-brands fa-github"/></a>
                            <a href={SocialLinkList[1].link} target="_blank" className="fb"><Icon icon={faFacebook} className="fa-brands fa-facebook" /></a>
                            <a href={SocialLinkList[2].link} target="_blank" className="link"><Icon icon={faLinkedinIn} className="fa-brands fa-linkedin"/></a>
                            <a href={SocialLinkList[3].link} target="_blank" className="inst"><Icon icon={faInstagram} className="fa-brands fa-instagram"/></a>
                            </div>                          
                        </div>                
        </>
    );
}
export default Part1;