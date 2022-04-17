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
        for(var i=0;i<=nmber.value;i++)
        {    
            var x = document.createElement("div");
            x.setAttribute('ID', 'arrange');
            x.textContent =`${i}`
            print.appendChild(x);
        } 
    }
    nmber.value="";
})
