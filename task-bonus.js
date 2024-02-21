// 1#  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

// Your code:
export const drawTriangle = (length = 5) => {
  
    // ... write code ...
    for (let i = 0; i < length; i++) {
      for (let j = 0; j <= i; j++) {
        process.stdout.write('*');
        if ( j !== (i+1))
        process.stdout.write(' ');
      }
      process.stdout.write('\n');
    }
};

// 2#  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

// Your code:
export const drawJavascriptWord = (word = "javascript") => {
  // ... write code ...
  for (let i = 0; i <=   word.length; i++) {
    let stars = word.length - i;
    let letters = word.length - stars;
   
    for (let j = 0; j < stars; j++) {
       process.stdout.write('*');
      if(j !== (stars-1) || letters !== 0)
         process.stdout.write(' ');
    }

    for (let j = word.length - letters; j < word.length; j++) {
      process.stdout.write(word[j].toUpperCase());
      if(j !== (word.length-1))
         process.stdout.write(' ');
    }
    process.stdout.write('\n');
  }
};


// 3#  ========== BONUS =======================
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
// const vehicles = [
//   { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
//   { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
//   { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
// ];
// getVehiclesAndTopSpeed(vehicles) ➞ will return ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

// Your code:
export const getVehiclesAndTopSpeed = (vehicles) => {
  let arr = [];
  vehicles.forEach((x) => {
    arr.push({
      name: x.name,
      topSpeed: Math.max(...x.measuredSpeeds),
    });
  });
  return arr;
};