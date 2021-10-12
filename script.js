// 1
for (i = 1; i <= 7; i++){
    console.log(i);
};

console.log("----------");

// 2
for (i = 5; i <= 25; i += 4){
    console.log(i);
};

console.log("----------");

// 3a
const wizards = ["Harry Potter", "Hermione Granger", "Ron Weasley"];

// 3b
for (names of wizards){
    console.log(names);
};

// 4a
let harryPotterMovies = 0;

// 4b
while (harryPotterMovies < 8){
    harryPotterMovies++;
};

// 4c
console.log(harryPotterMovies);

// 5a
const hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

// 5b
for (houses of hogwartsHouses){
    for (letters of houses){
        console.log(letters);
    }
};

// 6a
const quote = ["Yer", "A", "Wizard", "Harry"];

// 6b
for (i = 1; i < 2; i++){
    console.log(quote.join(" "));
}