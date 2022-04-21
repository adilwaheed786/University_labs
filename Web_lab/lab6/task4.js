var check=document.getElementById('input');
function cases()
{
    if(check.value.length>0)
    {
        switch (check.value) {
            case "1":
             alert("I am Using Chrome")
              break;
            case "2":
                alert("I am Using Opera")
              break;
            case "3":
                alert("I am Using Mozilla")
              break;
            case "4":
                alert("I am Using Mozilla")
              break;
            default:
            alert("Enter Value Between 1 to 4")
            break;
          }
        check.value='';
    }   
}

  