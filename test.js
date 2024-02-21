import * as a from "./task-array.js"
import * as c from "./task-cycles.js"
import * as s from "./task-strings.js"
import * as o from "./task-object.js"
import * as b from "./task-bonus.js"

let numbers = [];
const length = Math.ceil(Math.random() * 10) + 5;
for (let i = 0; i < length; i = i + 1) {
  numbers.push(Math.ceil(Math.random() * 100));
}

console.log("\nArrays");

a.printArray(numbers);
a.printLength(numbers);
a.printFirstItem(numbers);
a.printLastItem(numbers);
a.printLargestItem(numbers);
a.printSmallestItem(numbers);
a.printSum(numbers);
a.printSALDifference(numbers);
a.printAverage(numbers);
a.printLargestsIndex(numbers);
a.printEvenNums(numbers);
a.printNumsMultipliedBy2(numbers);

console.log("\nCycles");

console.log(c.arrayOfMultiples(7,5));
console.log(c.changeDirection([1,2]));
console.log(c.biggerArray([1,2,3,4,5], [50,50]));

console.log("\nString");
console.log(s.parametrize("Javascript is the best"));
console.log(s.giveSentenceForPerson({name: "Obi-wan", position: "Jedi", age: 40, location: "Starwars universe"}));
s.replace("Hello Javascript");

console.log("\nObjects");
console.log(o.personObject("Obi-wan", "Kenobi", "40"));

let bu = o.getBudgets([
        { name: "John", age: 21, budget: 23000 },
       { name: "Steve",  age: 32, budget: 40000 },
       { name: "Martin",  age: 16, budget: 2700 }
]);
console.log(bu);
const vehicles = [{name: "Executor Star Dreadnought", price: 999}, {name: "T-47 Airspeeder", price: 5}, {name: "AT-AT", price : 20}];
console.log(o.sortVehiclesByPrice(vehicles));

console.log("\nBonus");
b.drawTriangle();
console.log();
b.drawJavascriptWord();
const v = [
  { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
  { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
  { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
];
console.log(b.getVehiclesAndTopSpeed(v));