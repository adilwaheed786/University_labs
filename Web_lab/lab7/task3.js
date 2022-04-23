var age=document.getElementById('input');
function checkage()
{
    if(age.value.length>0)
    {
        message = age.value >= 18 ? 'You can drive.' : 'You cannot drive.';
        alert(message);
        age.value="";
    }   
}