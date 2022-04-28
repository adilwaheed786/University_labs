
var txtarea=document.getElementById('input');
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  // to this:
  'my name is Rudolf the raindeer'
  
function check(){
       txtarea.value=`my ${obj.my} is ${obj.is} the ${obj.the}`;    
}
