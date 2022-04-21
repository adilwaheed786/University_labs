// 5.	Write a javascript arrow function named calculateSupply that:
// a.	takes 2 arguments: age, amount per day.
// b.	calculates the amount consumed for rest of the life (based on a constant max age).
// c.	outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
var age=document.getElementById('input');
var amount=document.getElementById('input2');
function consuming(){
    if(age.value.length>0 && amount.value.length>0)
        {
            consumed(age.value,amount.value);
        }
        age.value='';
        amount.value='';
}
var consumed=(age,amount)=>
    {        
           var mxage=60;
           var consume=mxage*12*30*amount;
           var current=age*12*30*amount;
           alert(`Current Consumed Amount is ${current} You  need ${consume-current} to last you until the ripe old age of ${mxage}`)       
}