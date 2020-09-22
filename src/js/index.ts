//Write your Typescript code here
//Task 1
console.log("Task 1");
let myElement: HTMLLIElement = <HTMLLIElement> document.getElementById('1');
console.log(myElement);

let myList: HTMLCollectionOf<HTMLLIElement> = <HTMLCollectionOf<HTMLLIElement>> document.getElementsByTagName("li");

//Task 2
console.log("Task 2");
for (let index = 0; index < myList.length; index++) {
    const element = myList[index];
    
    console.log(element.className);
    console.log(element.innerText);
    console.log("----");
}

//Task 3
console.log("Task 3");
let beerElement: HTMLLIElement;
let nutElement: HTMLLIElement;

for (let index = 0; index < myList.length; index++) {
    const element = myList[index];
    
    if (element.innerText == "Beer"){
        beerElement = element;
        element.setAttribute("class", "healthy");
    }

    if (element.innerText.toLowerCase() == "cashew nuts"){
        nutElement = element;
        nutElement.setAttribute("hidden", "true");
    }
}
console.log("Print beer");
console.log(beerElement);

console.log("Print Nuts");
console.log(nutElement);

//Task 4
console.log("Task 4");
let parentList: HTMLUListElement = <HTMLUListElement> beerElement.parentNode;
let firstChildInList: HTMLLIElement = <HTMLLIElement> parentList.firstChild;
let lastChildInList: HTMLLIElement = <HTMLLIElement> parentList.lastChild;

console.log("parent node");
console.log(parentList);
console.log("first child");
console.log(firstChildInList);
console.log("last child");
console.log(lastChildInList);

//Task 5
let newLiElement: HTMLLIElement = <HTMLLIElement> document.createElement("li");
newLiElement.setAttribute("class", "healthy");
let textForNewElement: HTMLSpanElement = document.createElement("span");
textForNewElement.innerText = "Pizza";
newLiElement.appendChild(textForNewElement);
parentList.appendChild(newLiElement);

//Task 6
let shoppingList: HTMLUListElement = <HTMLUListElement> document.getElementById("list");
let newItem: HTMLLIElement = <HTMLLIElement> document.createElement("li");
newItem.setAttribute("class", "unhealthy");
newItem.innerText = "Candy";
newItem.setAttribute("id", "36");

for (let index = 0; index < shoppingList.children.length; index++) {
    const element = <HTMLLIElement> shoppingList.children[index];
    if (element.innerText == "Apples"){
        //Inserts at the position before apples in the list.
        shoppingList.insertBefore(newItem, element);
    }
}

//Task 7
let unhealthyList: HTMLUListElement = <HTMLUListElement> document.getElementById("listUnhealthy");
for (let index = 0; index < shoppingList.children.length; index++) {
    const element = <HTMLLIElement> shoppingList.children[index];
    if (element.className == "unhealthy"){
        unhealthyList.appendChild(element);
    }
}

//Task 8

for (let index = 0; index < shoppingList.children.length; index++) {
    const element = <HTMLLIElement> shoppingList.children[index];
    if (element.innerText == "Apples"){
        element.innerText = "Juice";
    }
}

for (let index = 0; index < shoppingList.children.length; index++) {
    const element = <HTMLLIElement> shoppingList.children[index];

    switch (element.innerText) {
        case "Beer":
            element.innerText = "Øl";
            break;
        case "Juice":
            element.innerText = "Saft";
            break;
        case "Pizza":
            element.innerText = "Pizza";
            break;
        default:
            break;
    }
}

for (let index = 0; index < unhealthyList.children.length; index++) {
    const element = <HTMLLIElement> unhealthyList.children[index];
    
    switch (element.innerText) {
        case "Marshmallows":
            element.innerText = "Skumfidus";
            break;
        case "Candy":
            element.innerText = "Slik";
            break;
        default:
            break;
    }
}

//Task 9

for (let index = 0; index < shoppingList.children.length; index++) {
    const element = <HTMLLIElement> shoppingList.children[index];

    if (element.innerText == "Saft"){
        shoppingList.removeChild(element);
    }
}


//Task 10

//I would do task 10, but I dont want to, as its just doing what I have already done above, but even more so, I remove some stuff
let bodyContent: HTMLBodyElement = document.getElementsByTagName("body")[0]
for (let index = 0; index < bodyContent.children.length; index++) {
    const element =  bodyContent.children[index];
    bodyContent.removeChild(element);
}