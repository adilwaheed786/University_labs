var name1=document.getElementById('input');
var age=document.getElementById('input2');
var salary=document.getElementById('input3');
function functionclosure()
{
    if(name1.value.length>0 && age.value.length>0 && salary.value.length>0)
    { 
        var innerFunc = Profile(name1.value,age.value,salary.value);
        innerFunc(); 
    } 
    length.value="";
    width.value="";
    heigth.value="";
}        
function Profile(name,age,salary) {
function greetingMsg() {
    alert(`Your Name Is ${name},Your Age Is ${age},Your Salary Is ${salary}`);
}
return greetingMsg;
}
  
        