var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
let star = "polaris";

// WRITE YOUR CODE BELOW
// add "Canis Major" as the first element of the constellations array
constellations.unshift("Canis Major");
console.log(constellations);

// remove "Venus" from the planets array.
planets.splice(planets.indexOf("Venus"), 1);
console.log(planets);

// join the array "constellations" and "planets" into a new array "galaxy" without altering the previous arrays.
const galaxy = constellations.concat(planets);
console.log(galaxy);

let upperStar = star.toUpperCase();
console.log(upperStar);

console.log(typeof planets);
