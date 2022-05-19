var result=document.getElementById('input');
function cases(){
    result.value="";
        var arr = [2, 5, 6, 3, 8, 9];
        var newArr = arr.map(function(val, index){
            return {key:index, value:Math.sqrt(val)};
        })
        newArr.forEach(element => {
            result.value = result.value + `${element.value}, `
        });      
    }       
     