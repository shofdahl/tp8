// JavaScript for TP7

// function to load a file name from the URL "fromFile" into the object identified by "whereTo" //
function loadFileInto(recipeName, listName, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();
  
    // define the fromFile variable
  fromFile = "recipes.php?recipeName=" + recipeName + "&recipeList=" + listName;
  console.log("From URL: " + fromFile);
  


	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

// new recipe object //
function Recipe(recipeName, contributorName, imageURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.recipeName, "ingredients", "#ingredients ul");  
    loadFileInto(this.recipeName,"equipment", "#equipment ul");  
    loadFileInto(this.recipeName, "directions", "#directions ol");  

  }
}

BananaBread = new Recipe("Banana Bread", "Serena", "https://images.unsplash.com/photo-1621994153189-6223b41f7912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");

Pancakes = new Recipe(
  "Old Fashioned Pancakes", 
  "Maddy Szczypka", 
  "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", 
  "pancakes-ingredients.html", 
  "pancakes-equipment.html", 
  "pancakes-directions.html"
);

FrenchToast = new Recipe(
  "French Toast", 
  "Analysse Palomares", 
  "https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", 
  "toast-ingredients.html", 
  "toast-equipment.html", 
  "toast-directions.html"
);



window.onload = function() {
  
 document.querySelector("#firstRecipe").onclick = function() {
   BananaBread.displayRecipe();
 }
  
   
 document.querySelector("#secondRecipe").onclick = function() {
   Pancakes.displayRecipe();
 }
 
    
 document.querySelector("#thirdRecipe").onclick = function() {
   FrenchToast.displayRecipe();
 }
 
} //end window.onload