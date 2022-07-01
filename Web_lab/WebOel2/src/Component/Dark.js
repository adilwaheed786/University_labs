import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke  } from '@fortawesome/free-solid-svg-icons'
function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var colors1=document.getElementById("ch1")
    var colors2=document.getElementById("ch2")
    var colors3=document.getElementById("ch3")
    var ft1=document.getElementById("ft1")
    var ft2=document.getElementById("ft2")
    colors1.classList.toggle("changed");
    colors2.classList.toggle("changed");
    colors3.classList.toggle("changed");
    ft1.classList.toggle("foot1");
    ft2.classList.toggle("foot2");
    var dark=document.getElementsByClassName("fa-circle-half-stroke")
    dark[0].classList.toggle("fa-lightbulb")
  }
function Dark()
{
    return(
    <button onclick={darkmode} id="dark" class="dark"><FontAwesomeIcon icon={faCircleHalfStroke} /></button>
        );
}
export default Dark;