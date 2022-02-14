//1)
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);
// this is shorter but changes the array
// let answer = ages.pop() - ages.shift();
// pop() takes the last element out, shift() takes the first element out


// 1a)this is longer but the array is kept intact
let answer = ages[ages.length-1] - ages[0];
// the last element always has the index of length-1, and the first one has index 0
// the indexes start as 0, so there's an offset for length and indexes


// question a
console.log(answer);

// if you add more element it's still going to work because this is not using specific numbers or indexes, it works on any array length

// so let's add more elements
ages.splice(3, 0, 97, ); // add at index 3, element: 97
console.log(ages);

// let's do the same thing
answer = ages[ages.length-1] - ages[0];
// it's going to be the same answer
console.log(answer);


// three components of a for loop
// Initialization, it's where you initializae a variable that is going to be the starting point for the loop
// Condition, it's a condition that as long as it's true, then the loop continues (watch out for infinite loops)
// Change(really important), it's a change in a variable, that is related to the condition, this way the cahnge is going to make the condition false eventually

 


// usually it's like: 
// some index as start of some range
// while the index is less than end of range
// index increase
//3) to access the last element in an array, do ages[ages.length-1]-ages[0];
//4) to access the first element in an array-> its ages[0];
//5)Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the.

//let names = [Kelly, Sam, Kate] //given this array
 
//for (i = 0; i < names; (i)){}

// for arrays the range is (0,1,2,...,length-1)

// this loop makes i loop through (0,1,2,...,length-1)
// use <= to include length-1
// or use < and use length, to reach length-1

let sum = 0;
for (let i = 0; i <= ages.length-1; i++) {
    sum += ages[i];
    
    console.log(sum);
}
let average = sum / ages.length;
console.log(average);
// this also works for any length array

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
for (let i =0; i <= names.length-1; i++){
    sum += names[i];
    console.log(sum/names.length);
}
console.log(average);

//b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
for (let i = 0; i <= names.length-1; i++){
    console.log(names.concat(", "))
}

//concat(nameLengths);
/* Create a new array called nameLengths.Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array*/

//Create a new array called nameLengths.
let nameLengths = [];

//Write a loop to iterate over the previously created names array
for (let i = 0; i <= names.length-1; i++){
    sum += names[i];
    console.log(names[i]);
//add length of each name to the nameLengths array.
nameLengths.push(names[i].length)
}
console.log(nameLengths);  //make note on using push, and thinking of creating a NEW array, not modifying the old one.



//6)	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

for (let i = 0; i <= names.length-1; i++){
    sum += names[i];
    console.log(nameLengths);   
}

/*7.	Write a function that takes two parameters,word and n, as arguments and returns the word concatenated to itself n number of times.
 (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).*/

//Write a function that takes two parameters
/*let word = hello
function greeting(word, n){
console.log(word * n);
}*/ 
/*This was my first guess, but after looking at some examples I'm going to try:
function duplicateWord(word, n){
console.log(duplicateWord("Hello", 4));
} nope */
function greeting(word, n){
let string = ""
for (let i = 0; i < 3; i++){
   string = string.concat(word);
}
return string;
}
console.log(greeting("hello", 3));
//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName){
 //   return (firstName + " " +lastName);
    return firstName.concat(" " , lastName);
}
console.log(fullName ("Tim", "Johns"));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// passing parameters, need parenthesis
function hundo(dollars){
    let sum = 0;
    for(let i=0; i<dollars.length; i++){
        sum = sum + dollars[i];
    }
    if (sum >100){
        return true;
    } else { return false;}
}
arrayONumbers = [1, 102, 4, 6, 80];
console.log(hundo(arrayONumbers));
// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
var number = [37, 18, 22, 43]
function getMean() {
    var sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += ages[i];
    }
   let meanNumber = sum / number.length;
    return meanNumber;
}
console.log(getMean);
getMean();
//This is not printing right, but I'm in office hours right now waiting my turn, and will correct it with help!

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements
//  in the second array.
firstTeam = [5, 2, 7, 7, 9, 3];
nextTeam = [3, 3, 7, 1, 0, 8];

function compareTeams (){
    let sum = 0;
for(let i=0; i<firstTeam.length; i++){
    sum += firstTeam.length[i];
}
meanTeam1 = sum / firstTeam.length;
    let total = 0

    for (i = 0; i < nextTeam.length; i++) {
        total += nextTeam[i];
    }
    meanTeam2 = total / nextTeam.length;
    if (meanTeam1 > meanTeam2){
        return true;
    } else {
        return false;
    }
}
    console.log(compareTeams);



// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is
//  greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
   if (isHotOutside == true && moneyInPocket > 10.50){
    return true;
    console.log("Let's buy a drink!");
} else {
    return false;
    console.log("Maybe there's a water fountain.");
}
}

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function makeCoffee () {
    var sleepy = prompt ("Are you a little sleepy?");
    if (sleepy == "yes"){
        alert("Time to make some coffee!");
    } else {
        alert("Great! Keep working on homework!");
    }
}
//I created this function, because my life revolves around coffee and homework!