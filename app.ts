// Given a mix of different types of items, make a new list that has only the words.
// A mixed bag of items
let mixedArray = [1, "Acai berries", 2, "Goji berries", true, "Raspberries"];

// Picks out only the words
let stringsArray = mixedArray.filter(item => typeof item === "string");

// Shows the list of just words
console.log(stringsArray); // Output: ["acai berries", "goji berries", "raspberries"]
// This line checks each item: if it's a word, it goes into the new list.

