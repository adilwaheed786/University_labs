
// Alarm ringing !
// I Suppose by default there is a prompt saying “ Alarm is ringing”. Press ‘S’ to snooze and ‘D’ to dismiss
// II If user selects ‘D’, program will be dismissed with a prompt “Good Morning”
// III If user select ‘S’ , the program “ Alarm is ringing”. Press ‘S’ to snooze and ‘D’ to dismiss will rerun and again the prompt will be  (repeat from step I)
// IV upon entering wrong input program will prompt “wrong input” and program ends.

    var alaram = prompt(" “Alarm is ringing”. Press ‘S’ to snooze and ‘D’ to dismiss"); 
    if(alaram==='S' || alaram==='s')
    {
       while(alaram==='S' || alaram==='s')
       {
        alaram = prompt(" “Alarm is ringing”. Press ‘S’ to snooze and ‘D’ to dismiss");
       }  
    }
    else if(alaram==='D' || alaram==='d')
    {
        alert("Good Morning")
        
    }
    else
    {
        alert("Wrong Input Provided");
        
    }

  
 
