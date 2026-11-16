// Create the shopping list
let shoppingList = ["Bread", "Milk", "Sugar", "Rice"];

// 1. Display the entire shopping list
console.log("Shopping List:", shoppingList);

//2. Display the first item
console.log("shoppingList:", shoppingList[0])

//3. Display the last item
console.log("shoppingList:", shoppingList[3])

//4. Add item at the end of the array
shoppingList.push("Cooking Oil")
console.log("shoppingList:", shoppingList)

//5. Remove item at the start of the array
shoppingList.shift()
console.log("shoppingList:", shoppingList)

//6. Change suger to Tea leaves
shoppingList[1] = "Tea leaves"
console.log("shoopingList:", shoppingList)

//7. Dispay the total number of items
console.log("Total items:" , shoppingList.length)

