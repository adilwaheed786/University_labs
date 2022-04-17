var base=document.getElementById("base")
var powe=document.getElementById("power")
var btn=document.getElementById("btn")
var result=document.getElementById("result")
btn.addEventListener("click",function(){
    if(base.value>0 && powe.value>0)
    {
        result.value=(Math.pow(base.value,powe.value));
        base.value="";
        powe.value="";
    }
   else if(base.value=='' || powe.value=="")
    {
        base.value="";
        powe.value="";
        result.value="";
    }
})
