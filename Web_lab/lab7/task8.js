const response = {
  data: {
  name: 'Ronaldo',
  occupation: null,
  lies: 0
  }
}
var txtarea=document.getElementById('input');
var res1=response?.data?.occupation || 'Null ';
var res2=response?.data?.occupation ?? 'Null ';
var res3=response?.data?.lies || '0 Lies';
var res4=response?.data?.lies ?? '0 Lies';
function check(){
  txtarea.value=`Occupation 1 :${res1} \n`
  txtarea.value=txtarea.value+`Occupation 2 :${res2} \n`; 
  txtarea.value=txtarea.value+`lies 1 :${res3} \n`;
  txtarea.value=txtarea.value+`lies 2 :${res4} \n`;    
}