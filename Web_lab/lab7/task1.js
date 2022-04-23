var length=document.getElementById('input');
var width=document.getElementById('input2');
var heigth=document.getElementById('input3');
var volume=document.getElementById('input4');
    function volumeOfRectangle()
    {
    if(length.value.length>0 && width.value.length>0 && heigth.value.length>0)
    { 
        volume.value=rectangle(length.value)(width.value)(heigth.value) // 6
    } 
    length.value="";
    width.value="";
    heigth.value="";
}  
function rectangle(x) {
    return (y) => {
        return (z) => {
            return x * y * z
        }}}
