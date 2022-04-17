var nmber=document.getElementById("table")
var generate=document.getElementById("btn")
var print=document.getElementsByClassName("tableprint")[0]
generate.addEventListener("click",function(){
    if(nmber.value=="")
    {
        print.remove();
        window.location.reload()
    }
    else if(nmber.value>0)
    {        
        for(var i=1;i<=10;i++)
        {    
            var x = document.createElement("div");
            x.setAttribute('ID', 'arrange');
            x.textContent =`${nmber.value} * ${i} = ${nmber.value*i}`
            print.appendChild(x);
        } 
    }
    nmber.value="";
})
