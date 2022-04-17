var radius=document.getElementById("input")
var volume=document.getElementById("input2")
var calculate=document.getElementById("btn")
calculate.addEventListener("click",function(){
    if(radius.value>0)
    {
        volume.value=(4*Math.PI*Math.pow(radius.value,3))/3;
        radius.value="";
    }
   else if(radius.value=='')
    {
        volume.value="";
        radius.value="";
    }
})
