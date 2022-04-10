// Create an object and an array which we will use in our facebook exercise. 
//  Create an object that has properties "username" and "password". Fill those values in with strings.
//  Create an array which contains the object you have made above and name the array "database".
// Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
document.write("<b>1)Object </b><br>");
var persondetails = {
    username: "John",
    password: "John123"
  };
document.writeln("<br><b>UserName Object:</b>"+persondetails.username +'<br>')
document.writeln("<b>Password Object:</b>"+persondetails.password +'<br>')
document.write("<br><b>2)Array</b> <br>"); 
var database=[persondetails]

document.writeln("<br>"+ database[0].username +"<br>")
document.writeln( database[0].password +"<br>")

var newsfeed=[{
    usernmae:'adil waheed',
    timeline:'Actice'
},
{
    usernmae:'Arslan',
    timeline:'Not Active'
},
{
    usernmae:'Kiran khan',
    timeline:'Actice'
}]
document.write("<br><b>3)Array Of An Object</b> <br>");
document.write("UserName:"+newsfeed[0].usernmae +"<br>"+ "TimeLine:"+newsfeed[0].timeline+"<br> <br>")
document.write("UserName:"+newsfeed[1].usernmae +"<br>"+ "TimeLine:"+newsfeed[1].timeline+"<br><br> ")
document.write("UserName:"+newsfeed[2].usernmae +"<br>"+ "TimeLine:"+newsfeed[2].timeline+"<br><br>")



