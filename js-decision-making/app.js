//IF STATEMENTS
let random = Math.random();
if (random < 0.5) {
  console.log("your number is less then 0.5");
  console.log(random);
}

if (random >= 0.5) {
  console.log("your number is greater then 0.5");
}

//CHALLENGE
/*If num is an even number, print out "even".
  Don't do anything if num is an odd number.*/
function isEven(num) {
  if (num % 2 === 0) {
    console.log(even);
  }
}

//ELSE IF

const dayOfWeek = 'Wednesday';

if(dayOfWeek === 'Monday'){
console.log('I hate mondays');
}else if (dayOfWeek === 'Tuesday'){
  console.log('yay I love tuesday');
} else if (dayOfWeek === 'Wednesday'){
    console.log('its hump day');

  }

const age = 67;

if (age < 5) {
  console.log("you are child. You get in free");
} else if (age < 10) {
  console.log("You are a child. You pay $10");
} else if (age < 65) {
  console.log("You are an adult you pay $20");
} else if (age > 65) {
  console.log("You are a senior you pay $10");
}

// // ELSE

const dayOfWeek = prompt("Enter a day of week").toLocaleLowerCase();

if (dayOfWeek === "monday") {
  console.log("MEH");
} else if (dayOfWeek === "tuesday") {
  console.log("4 more days to go");
} else if (dayOfWeek === "wednesday") {
  console.log("its hump day");
} else {
  console.log("its almost the weekend");
}

//CHALLENGE 
// if phrase is 'stop', you should print out 'red'
// if phrase is 'slow', you should print out 'yellow'
// if phrase is 'go', you should print out 'green'
// if phrase is anything else, you should print out 'purple'

const phrase = prompt('pick a phrase').toLocaleLowerCase();
if (phrase === 'stop'){
  console.log('red');
} else if (phrase === 'slow'){
  console.log('yellow');
} else if (phrase === 'go'){
  console.log('green');
} else {
  console.log('purple');
  
}
  

  
