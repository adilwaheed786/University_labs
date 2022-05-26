
      var text1=document.getElementById('input');
      var txtarea=document.getElementById('input2');
      var text2=document.getElementById('input3');
      var txtarea2=document.getElementById('input4');
      function myDisplayer(some) {    
        txtarea.value=some;
      }
      function check(){
          if(text1.value.length>0)
          {
            let myPromise = new Promise(function(myResolve, myReject) {                   
                if (text1.value % 2 !== 0) {       
                myResolve("Promise is resolved successfully");  
                } else {
                  myReject("Promise is rejected");
                }
              });             
              myPromise.then(
                function(value) {myDisplayer(value);},
                function(error) {myDisplayer(error);}
              );
          }
      }
      function myDisplayer2(some) {    
        txtarea2.value=some;
      }
      async  function check1(){
        console.log("SS")
        if(text2.value.length>0)
        {      
          console.log("SSs")
          let myPromise = new Promise(function(myResolve, myReject) {   
            let x=0;
              if (text2.value % 2 !== 0) {
                  console.log("SSsss")
                  setTimeout(function() {myResolve("Promise is resolved successfully");}, 5000);
              } else {
                myReject("Promise is rejected");
              }
              console.log("SSz")
            });  
            await   myPromise.then(
              function(value) {myDisplayer2(value);},
              function(error) {myDisplayer2(error);}
            );
        } 
    }
      