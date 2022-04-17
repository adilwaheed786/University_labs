var nmber=document.getElementById("table")
var generate=document.getElementById("btn")
var print=document.getElementsByClassName("tableprint")[0]
generate.addEventListener("click",function(){
    if(nmber.value=="")
    {
        print.remove();
        window.location.reload()
    }
     if(nmber.value.length>0)
    {     
        if(nmber.value=='E' || nmber.value=='e')
        {
            for(var i=0;i<=20;i=i+2)
            {    
                var x = document.createElement("div");
                x.setAttribute('ID', 'arrange');            
                x.textContent =`${i}`
                print.appendChild(x);
            } 
        }       
       else  if(nmber.value=='O' || nmber.value=='o')
        {
            for(var i=1;i<=20;i=i+2)
            {    
                var x = document.createElement("div");
                x.setAttribute('ID', 'arrange');               
                x.textContent =`${i}`
                print.appendChild(x);
            } 
        }      
    }
    nmber.value="";
})
