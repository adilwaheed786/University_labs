
function validateform(){  
  var fullname=document.reg_form.fullname.value;  
  var email=document.reg_form.email.value;  
  var ph=document.reg_form.ph.value;
  var pwd=document.reg_form.pwd.value;
  var Confirmpwd=document.reg_form.Confirmpwd.value;
    
  if (fullname==""){  
    alert("Enter full name.");  
     return false;  
  }
  else if (email==null || email==""){  
    alert("Enter your email address.");  
    return false;  
  }
        else if(ph.length>10){
alert("phone number should not be greater than 10")
}

  else if(pwd==null || pwd==""){  
    alert("Enter your password");  
    return false;  
    }  
    {if(pwd==Confirmpwd){
    return true;
}else{alert("password must be same!");return false;}}

  }  
