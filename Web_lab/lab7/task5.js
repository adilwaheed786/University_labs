var result=document.getElementById('input');
function check(){ 
    const numbers = [1,-5,7,9,-10,15,22,-65,-120]; 
    result.value=numbers.filter(Ispositive);
}
function Ispositive(num) {
return num > 0;
}
