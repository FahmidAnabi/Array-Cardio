const toppings = [
  "Mushrooms ",
  "Tomatoes",
  "Eggs",
  "Chili",
  "Lettuce",
  "Avocado",
  "Chiles",
  "Bacon",
  "Pickles",
  "Onions",
  "Cheese"
];

const buns = ["egg", "wonder", "brioche"];

const meats = {
  beyond: 10,
  beef: 5,
  chicken: 7
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: "Love the burgs", rating: 4 },
  { comment: "Horrible Service", rating: 2 },
  { comment: "Smoothies are great, liked the burger too", rating: 5 },
  { comment: "Ambiance needs work", rating: 3 },
  { comment: `I DON'T LIKE BURGERS`, rating: 1 }
];

/*
  Static Methods
*/

// Array.of();
const arrayOf = Array.of(`Fahmid`, `Anabi`);
console.log(arrayOf);

// Make a function that creates a range from x to y with Array.from();
function createRange(start, end) {
  const range = Array.from({ length: end - start + 1 }, function(item, index) {
    return index + start;
  });
  return range;
}
const myRange = createRange(2, 7);
console.log(myRange);

// Check if the last array you created is really an array with Array.isArray();
console.log(Array.isArray(myRange));

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

Object.entries(meats).forEach(entry => {
  // const key = entry[0];
  // const value = entry[0];
  const [key, value] = entry; // same as above
  console.log(key, value);
});
// Using destructure: same as above function
console.log(`using destructure`);
Object.entries(meats).forEach(([meat, qty]) => {
  console.log(meat, qty);
});

/*
  Instance Methods
*/


// Display all bun types with " or " - use join()

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string

// take the last item off toppings with pop()
// add it back with push()
// take the first item off toppings with shift()
// add it back in with unshift()
// Do the last four,but immutable (with spreads and new variables)

// Make a copy of the toppings array with slice()
// Make a copy of the toppings array with a spread
// take out items 3 to 5 of your new toppings array with splice()
// find the index of Avocado with indexOf() / lastIndexOf()
// Check if hot sauce is in the toppings with includes()
// add it if it's not
// flip those toppings around with reverse()

/*
  Callback Methods
*/

// find the first rating that talks about a burger with find()
// find all ratings that are above 2 with filter()
// find all ratings that talk about a burger with filter()
// Remove the one star rating however you like!

// check if there is at least 5 of one type of meat with some()
// make sure we have at least 3 of every meat with every()
// sort the toppings alphabetically with sort()
// sort the order totals from most expensive to least with .sort()
// Sort the prices with sort()

/*
  Looping Methods (next)
*/







