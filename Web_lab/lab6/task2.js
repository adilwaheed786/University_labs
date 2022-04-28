// 2.	Write a javascript function that takes an array of 
// numbers and a target number. The function should find two
//  different numbers in the array that, when added together,
//  give the target number. For example: answer([1,2,3], 4) 
//  should return [1,3].
// function addedarray(target)
// {
//     var array=[1,2,3,4,5];
//     var result=[];
//     var store;
// for(var i=0;i<=array.length;i++)
// {
//     console.log(array[i]); 
//     if(array[i]<=target)
//     {   store=store+array[i];
//         result.push(array[i]);
//         console.log(result);
//         console.log(store);
//     }
// }
// }
var num1=document.getElementById('input');
var num2=document.getElementById('input2');
var result=document.getElementById('input3');
function addedarray(){
const numbers = [0,1,2,3,4,5]; 
result.value=" ";
if(num1.value.length>0 && num2.value.length>0)
{
    const sum = parseInt (num1.value) + parseInt ( num2.value) ;    
    for (var i= 0; i < numbers.length; i++) {

        if (numbers[i]===sum) {
            result.value="The sum of user input matche the target:"+numbers[i];
        break;
        }
        else{
            result.value="The sum user input doesnot match any target in array"
        }
        }
} 
num1.value=" ";
num2.value=" ";
        }
       