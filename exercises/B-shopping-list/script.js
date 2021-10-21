function shoppingList(items) {
  // Write your code here...
  let list = document.createElement("ul");
  items.forEach((shoppingItem) => {
    let item = document.createElement("li");
    item.innerText = shoppingItem;
    list.appendChild(item);
  });
  let content = document.querySelector("#content");
  content.appendChild(list);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
