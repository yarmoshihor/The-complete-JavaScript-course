'use strict';
/*
let hasDriverLicence = false;
const passTest = true;

if(passTest) hasDriverLicence = true;
if(hasDriverLicence) console.log('I can drive :D');*/
/*
 function logger() {
     console.log('My name is Jonas');
}
//calling / ranning / invoking function
logger();
logger();
logger();

function fruitPrecessos(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice
}

const appleJuice = fruitPrecessos(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitPrecessos(2,4);
console.log(appleOrangeJuice);

const num = Number('23'); */

//Function declaration
/*
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear; 
}

//FUnction expression

const calcAge2= function (birthYear) {
    return 2037 - birthYear; 
}
const age2 = calcAge2(1991)

console.log(age1,age2);*/
/*
//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;

}

console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1980,'Bob'));*/
/*function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitPrecessos(apples, oranges) {
    const applePiecec = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePiecec} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
} ;*/

//console.log(fruitPrecessos(2,3));
/*
const calcAge = function (year){
    return 2037 - year;
}

const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has already retired🎉`);
        return -1;
    }
  
}

console.log(yearsUntilRetirement(1950,"Mike"));
console.log(yearsUntilRetirement(1991,"Jonas"));*/
/*
const calcAverage = function(score1,score2,score3){
    return (score1 + score2 + score3 )/3
}

let averageDolphins = calcAverage(85,54,41);
let averageKoalas = calcAverage(23,32,27)


const checkWinner = function (avgDolphins,avgKoalas) {
    if(avgDolphins > avgKoalas && (avgDolphins/avgKoalas) >= 2){
        console.log(`Dolphins win(${avgDolphins} VS ${avgKoalas})`)
    }else if (avgKoalas > avgDolphins && (avgKoalas/avgDolphins)>=2){
        console.log(`Koalas win(${avgKoalas} VS ${avgDolphins}`)
    }else{
        console.log('Draw');
    }
}
checkWinner(averageDolphins,averageKoalas);*/
/*
let friend1 = 'Michael';
let friend2 = 'Steven';
let friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob','Alice']

//Exercise
const calcAge2= function (birthYear) {
    return 2037 - birthYear; 
}

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge2(years));*/
/*
const friends = ['Michael', 'Steven', 'Peter'];

//add elements
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

//remove elements

friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();//first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')){
    console.log('You have a friends called Steven')
}
*/
/*
//Challenge #3;

const calcTip = function(value){
    if (value > 50 && value < 300){
        const tip = value * 0.15;
        return tip;
    }else{
        const tip = value * 0.2;
        return tip
    }
}
console.log(calcTip(100));

const bills = [125,555,44];

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];


console.log(bills,tips,totals);
*/
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}; 
console.log(jonas);  

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const interestedIn = prompt("What do you want about Jonas? Choose between firstName, lastNa;me, age, job, and friends");

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}else{
    console.log('Wrong request. Choose between firstName, lastNa;me, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';

console.log(jonas);

//Challenge 
console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`)
*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicence : true,
    
    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }

    // calcAge: function(){
    //     console,log(this);
    //     return 2037 - this.birthYear ;
    // }

    calcAge: function(birthYear){
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    //challenge method
    summary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has a ${this.hasDriversLicence ? 'a' : 'no'} drivers licence`;
    }
};  

console.log(jonas.calcAge(1991));
//console.log(jonas['calcAge'](1991));
console.log(jonas.summary());*/

//challenge #3
/*
const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.bmi = this.mass / this.height ** 2; 
        return this.bmi;
    }
}

console.log(mark.calcBMI())

const john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        let bmi = this.mass / this.height ** 2; 
        return bmi;
    }
}

console.log(john.calcBMI())

console.log(`${john.fullName} BMI(${john.calcBMI()}) is ${john.calcBMI() >mark.calcBMI() ? 'higher' : 'lower'} than ${mark.fullName} BMI(${mark.calcBMI()}) `)
*/

// console.log('Lifting weights repetition 1');

//for loop keep running while condition is true
// for(let rep = 1; rep <= 10;  rep ++){
//     console.log(`Lifting weights repetition ${rep} 🤸🏿‍♀️ `);
// }
/*

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ["Michael",'Peter','Steven'],
    true
];

const types = [];

for(let  i = 0; i < jonas.length; i++){
    console.log(jonas[i],typeof jonas[i]);

    //filling type array
    //types[i] = typeof jonas[i]
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020]
const ages = [];

for( let i = 0; i< years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages)


const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ["Michael",'Peter','Steven'],
    true
];

for(let i = jonas.length - 1; i >= 0; i--){
    console.log(jonas[i])
}

for(let exercise = 1; exercise< 4 ; exercise++){
    console.log(`---------------Starting exersice ${exercise}`);
    for(let rep = 1; rep < 6 ;rep++){
        console.log(`Exercise ${exercise} lifting weight repetition ${rep} 🤸🏿‍♀️`)
    }
}*/

// for(let rep = 1; rep <= 10;  rep ++){
//     console.log(`Lifting weights repetition ${rep} 🤸🏿‍♀️ `);
// }
/*
let rep = 1;
while(rep <=10){
    console.log(`While: Lifting weights repetition ${rep} 🤸🏿‍♀️ `);
}

let dice = Math.trunc(Math.random() * 6) + 1;
while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}*/

const calcTip = function(value){
    if (value > 50 && value < 300){
        const tip = value * 0.15;
        return tip;
    }else{
        const tip = value * 0.2;
        return tip
    }
}

const bills = [22,295,176,440,37,105,10,1100,86,52];

const tips = [];
const totals = [];
/*
for( let i = 0; i <10; i ++){
    let tip = calcTip(bills[i]);
    tips.push(tip); 
    totals[i] = tip + bills[i];
}*/

let calcAverage = function(arr){
   let sum = 0;
   for(let i = 0;arr.length; i++){
       sum += arr[i];   
   }
   console.log(sum);
};

calcAverage([2,3,6]);