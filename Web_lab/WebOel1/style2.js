var a=document.getElementById("input");
var b=document.getElementById("btn");
var c=document.getElementById("list");
var deletebutton=document.getElementById('delete');
b.addEventListener('click',function(){
  console.log('workingenter')
    if(a.value.length>0)
    {
      var li=  document.createElement("li");  
      var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('ID', 'delete');
        button.setAttribute('value', "Del");
        button.setAttribute('onclick', "deleted(this)");
      li.appendChild(document.createTextNode(a.value));
      c.appendChild(li);
      li.appendChild(button);
      a.value='';
    }
})
   function deleted(x)
    {
      x.parentElement.remove();
    }
a.addEventListener('keypress',function(event){
  console.log('workinginput')
    if(a.value.length>0 && event.keyCode===13)
    {
      console.log('working')
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

var se=document.getElementById("searc");
var input=document.getElementById("search");
function sear(){


if(input.value.length>0)
{
  alert("Food Not Found")
}
}
