import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp  } from '@fortawesome/free-solid-svg-icons'

var mybutton = document.getElementById("Btn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
function Top()
{
    return(
        <a  id="Btn" onClick={topFunction} href="#home" class="top"> <FontAwesomeIcon icon={faArrowUp} /></a>
    );
}
export default Top;