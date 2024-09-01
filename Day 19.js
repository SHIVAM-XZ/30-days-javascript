// Day 19 - Regular Expression

// Task 1:
const text = 'Apples are tasty. I like apples.'
const regex = new RegExp('apples','gi')
const result = text.match(regex)
console.log(result)

// Task 2:
const text = '123 apples and 393 mangoes'
const regex = /\d+/g
const res = text.match(regex)
console.log(res)

// Task 3:
const text = 'Virat Kohli is a G.O.A.T i.e Greatest of All Time'
const regex = /\b[A-Z][a-z]*\b/g
const matches = text.matchAll(regex)
for(const i of matches){
    console.log(i)
    console.log(`The word ${i[0]} is at index ${i.index}`)
}

// Task 4:
const text = "The price is 123 dollars and 45 cents.";
const regex = /\d+/g;
const matches = text.match(regex);
console.log(matches)

// Task 5:
const num = '(212) 415-1234'
const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/
const match = num.match(regex)
// console.log(match)
if(match){
    const[fullmatch,areacode,centralofficecode,linenumber] = match
    console.log("Area Code:", areacode)
    console.log("Central Office Code:", centralofficecode)
    console.log('Line Number:',linenumber)
}

// Task 6:
const email = "example@example.com";
const regex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const match = email.match(regex);

if (match) {
  const username = match[1];
  const domain = match[2];
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
} else {
  console.log("No match found.");
}


// Task 7:
const text = 'Javascript is an programming language'
const regex = /^\bjava/gi
const match = text.match(regex)
if(match){
    console.log('matches word:', match)
}else{
    console.log('no match found')
}

// Task 8:
const text = 'Javascript passage is an programming language'
const regex = /age\b/$gi
// const regex = /age\b/gi
const match = text.match(regex)
if(match){
    console.log('matches word:', match)
}else{
    console.log('no match found')
}

// Task 9:
const password = "Example@123";
const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;

if (regex.test(password)) {
  console.log("Password is valid.");
} else {
  console.log("Password is invalid.");
}

// Task 10:
const url = "https://www.example.com";
const regex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})([\/\w .-]*)*\/?$/;

if (regex.test(url)) {
  console.log("URL is valid.");
} else {
  console.log("URL is invalid.");
}
