
var txtarea=document.getElementById('input');
var recipe = {
    title: "Tea",
    servings : 5,
    ingredients:["Sugar","Tea","Water","Milk","Elachi"],
    details : function() {
       
        console.log("Title: "+this.title)
    console.log("Serve: "+this.servings)
    console.log("Ingredients: "+this.ingredients)
        return "Title: "+this.title + "\nServe:" + this.servings+"\nIngredients: "+this.ingredients;
    }
 };
function check(){
        txtarea.value=recipe.details();
}
