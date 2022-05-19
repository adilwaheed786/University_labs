var result=document.getElementById('input');
function cases(){
const number = [1,5,7,9,10,15,22,65,120];
result.value = number.filter(check);
}
function check(number) {
  return number >= 10;
}