// Inherit the BasicCard and ClozeCard constructors
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

// Create new BasicCard and ClozeCard objects
let basicCard = BasicCard('Who said, "Toto, I\'ve a feeling we\'re not in Kansas anymore"', 'Dorothy');
let clozeCard = ClozeCard('There\'s no crying in programming', 'programming');

// Console.log each of the objects' properties
console.log("Full Text: ", clozeCard.text);
console.log("Cloze Text: ", clozeCard.cloze);
console.log("Question Text: ", clozeCard.partialText);

console.log("Front Text: ", basicCard.front);
console.log("Back Text: ", basicCard.back);
