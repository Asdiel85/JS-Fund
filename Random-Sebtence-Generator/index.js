const { stringify } = require('querystring');
 
const readLine =  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
 
const names = ["Peter", "Michell", "Jane", "Steve"];
const places = ["Sofia", "Plovdiv", "Varna", "Burgas"];
const verbs = ["eats", "holds", "sees", "plays with", "brings"];
const nouns = ["stones", "cake", "apple", "laptop", "bikes"];
const adverbs = ["slowly", "diligently", "warmly", "sadly", "rapidly"];
const details = ["near the river", "at home", "in the park"];
 
function getRandomWord(array) {
    let word = array[Math.floor(Math.random() * array.length)];
    return word;
};
 
let randomName = getRandomWord(names);
let randomPlace = getRandomWord(places);
let randomVerb = getRandomWord(verbs);
let randomNoun = getRandomWord(nouns);
let randomAdverb = getRandomWord(adverbs);
let randomDetails = getRandomWord(details);
 
let who = `${randomName} from ${randomPlace}`;
let action = `${randomAdverb} ${randomVerb} ${randomNoun}`;
let detail = `${randomDetails}`
let sentence = `${who} ${action} ${detail}`;
 
console.log(`Hello this is your first sentence:`);
console.log(sentence);
 
const recursiveAsyncReadLine = function() {
    readLine.question(`Click [Enter] to generate a new one`, string => {
        randomName = getRandomWord(names);
        randomPlace = getRandomWord(places);
        randomVerb = getRandomWord(verbs);
        randomNoun = getRandomWord(nouns);
        randomAdverb = getRandomWord(adverbs);
        randomDetails = getRandomWord(details);
        
        string = `${randomName} from ${randomPlace} ${randomAdverb} ${randomVerb} ${randomNoun} ${randomDetails}`
        console.log(string);
        recursiveAsyncReadLine();
    })
}
recursiveAsyncReadLine()