import React from 'react'
import { faHouse,faUserCheck,faProjectDiagram,faPhone,faSailboat,faBars ,faXmark } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'
function openNav() {
    var element = document.getElementById("mySidenav");
    element.classList.toggle("width10");
    var tog=document.getElementById("togle");
    tog.getElementsByTagName('a')[0].getElementsByTagName('Icon')[0].icon.toggle({faXmark})  
  }
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function HeaderPort()
{
    return(
        <>
           <header>
        <nav className="head1">    
            <div className="cont">
                <ul className="child">
                    <a href="#home" className="hide active"><Icon icon={faHouse } /> Home</a>
                    <a href="#About" className="hide"> <Icon icon={faUserCheck } /> About</a>
                    <a href="#projects" className="hide"><Icon icon={faProjectDiagram } /> Cars</a>
                    <a href="#contact" className="hide"><Icon icon={faPhone } /> Contact</a>
                    <li className="show"><a href=""><Icon icon={faSailboat } /> Adil Waheed</a></li>
                    <li id="togle"><a  onClick={openNav} ><Icon icon={faBars } /></a></li>
                </ul>             
            </div>
         </nav>
         <div id="mySidenav" className="sidenav">
            <a href="#home" onclick={closeNav} className="hide acti"><Icon icon={faHouse } />Home</a>
            <a href="#About" onclick={closeNav}   className="hide "> <Icon icon={faUserCheck } />  About</a>
            <a href="#projects" onclick={closeNav}  className="hide"><Icon icon={faProjectDiagram }/> Projects</a>
            <a href="#contact" onclick={closeNav}  className="hide"><Icon icon={faPhone } />Contact</a>
          </div>
          </header>
        </>
    );
}
export default HeaderPort;