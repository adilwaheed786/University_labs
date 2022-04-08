var a=document.getElementById("input");
var b=document.getElementById("btn");
var c=document.getElementById("list");
var deletebutton=document.getElementById("delete");
b.addEventListener('click',function(){
    if(a.value.length>0)
    {
      var li=  document.createElement("li");
     
      var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('ID', 'delete');
        button.setAttribute('value', 'Delete');
     
      li.appendChild(document.createTextNode(a.value));
      c.appendChild(li);
      li.appendChild(button);
      a.value='';
    }
})

deletebutton.addEventListener('click',function(){
    
//   var li=  document.createElement("li");
     
     
//       li.appendChild(document.createTextNode(a.value));
//       c.appendChild(li);
//       li.appendChild(button);
//       a.value='';
console.log('working')
    
})
a.addEventListener('keypress',function(event){
    if(a.value.length>0 && event.keyCode===13)
    {
        var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('ID', 'delete');
        button.setAttribute('value', 'Delete');
      var li=  document.createElement("li");
      li.appendChild(document.createTextNode(a.value));
      c.appendChild(li);
      li.appendChild(button);
      a.value='';
    }
})

