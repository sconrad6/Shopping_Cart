let form = document.querySelector(".grocery-items");
console.dir(form);

var fruits = ["apple", "banana", "kiwi", "mango", "peach"];
var prices = [1.00, 0.50, 2.75, 3.00, 2.50];


console.log(fruits);
console.log(prices);



function displayGroceries() { //element represents each object in the array
    let groceryDiv = document.querySelector(".grocery-list");
    groceryDiv.innerHTML = ""; //clears out HTML
    //so the html only displays the elements once
    fruits.forEach(function(element, index){
        let div = document.createElement("div");
        //^this is how we create HTML elements in JS
        div.innerHTML = `
        <p>Fruit: ${fruits} </p>
        <button index=${index}>X</button>
        `;
        //back ticks allow JS to utilize multiline strings,
        //along with expressions to be inserted into the strings
        //instead of incantination or + + + 
        //JS's version of string interpolation
        groceryDiv.append(div);
        //this is adding the newly created div into the 
        //contactListDiv
    });
}

displayGroceries();
