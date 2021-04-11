// function addFunction(a, b) {
//     return (a + b)
// };

// console.log(addFunction("1","2"));
// console.log(addFunction(12, 13));
// console.log(addFunction("cat", "dog"));

let participants = ["Seve", "Reetah", "Mimi", "Reetah", "Chris", "Anju"];
console.log("The first 3 participants are: " + participants[1] + participants[2]);

var arraylength = participants.length;
var randomPosition = (Math.floor(Math.random() * arraylength));
// console.log("Random participant" + participants[randomPosition]);

var alexFavs = [];
for (i = 0; i < 3; i++) {
alexFavs.push(participants[randomPosition]);
}

console.log(alexFavs);

// console.log(participants[2]);

// var arraName = ["thing0", "thing1", "thing2"];

