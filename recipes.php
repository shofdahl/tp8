<?

$name = $_GET["recipeName"];
$list = $_GET["recipeList"];

if ($name == "Banana Bread") {
  
  if ($list == "ingredients") {
   include "Ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "equipment.html";
    
  } elseif ($list == "directions") { 
    include "directions.html";
    
  } else {
    echo "1";
  }
  
} elseif ($name == "Old Fashioned Pancakes") {
  
    if ($list == "ingredients") {
   include "pancakes-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "pancakes-equipment.html";
    
  } elseif ($list == "directions") { 
    include "pancakes-directions.html";
    
  } else {
    echo "1";
  }

  } elseif ($name == "French Toast") {
  
     if ($list == "ingredients") {
   include "toast-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "toast-equipment.html";
    
  } elseif ($list == "directions") { 
    include "toast-directions.html";
    
  } else {
    echo "1";
  }
  
} else {
  echo "0";
  
}

