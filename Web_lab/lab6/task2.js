// 2.	Write a javascript function that takes an array of 
// numbers and a target number. The function should find two
//  different numbers in the array that, when added together,
//  give the target number. For example: answer([1,2,3], 4) 
//  should return [1,3].

function addedarray(target)
{
    var array=[1,2,3,4,5];
    var result=[];
    var store;
for(var i=0;i<=array.length;i++)
{
    console.log(array[i]); 
    if(array[i]<=target)
    {   store=store+array[i];
        result.push(array[i]);
        console.log(result);
        console.log(store);
    }
}
}
