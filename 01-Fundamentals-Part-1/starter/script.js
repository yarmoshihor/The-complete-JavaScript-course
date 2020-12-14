/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas')
console.log(23)

let firstName = "Matilda";
 
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'JM'
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentNJob = 'teacher'

let job1 = 'programmer';
let job2 = 'teacher'

console.log(myFirstJob);
*/

// console.log(typeof isIsland)
// console.log(typeof population);
// console.log(typeof contry);
// console.log(typeof lenguage);



// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// lastName = 'igop';
// console.log(lastName);

// const now = 2037
// const ageJonas = now - 1991;
// const ageSarag = now - 2018;
// console.log(ageJonas,ageSarag);
// console.log(ageJonas * 2,ageSarag / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// const isFullAge = ageSarag >= 18; 

let contry = 'Ukraine';
let continent = 'EurAsia';
let population = 36;


let isIsland = false;
let lenguage;

// let halfPopulation = population / 2;
// halfPopulation++;
// console.log(halfPopulation);
// let populationFinland = 6;
// console.log(population > populationFinland);
// let averagePopulation = 33;
// console.log(population > averagePopulation);

// let description =  'Portugal is in Europe, and its 11 million people speak portuguese';

/*
let makrsWeignt = 78;
let marksTall = 1.69;

let johnWeight = 92;
let johnTall = 1.95;

let markBMI = makrsWeignt / marksTall ** 2 ;
console.log(markBMI);
let johnBMI = johnWeight / johnTall ** 2;
console.log(johnBMI);
let markBmiHigherJohnBMI = markBMI > johnBMI;
console.log(markBmiHigherJohnBMI);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I`m " + firstName +', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(jonasNew);

console.log('Just a regular tring...');

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age = 19;

if(age >= 18){
    console.log('Sarah can start driving licence 🚗');
}else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}


const birthYear = 2002;
let century
if(birthYear <=2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);
makrsWeignt = 78;
marksTall = 1.69;
johnWeight = 92;
johnTall = 1.95;

markBMI = makrsWeignt / marksTall ** 2 ;
console.log(markBMI);
johnBMI = johnWeight / johnTall ** 2;
console.log(johnBMI);
// markBmiHigherJohnBMI = markBMI > johnBMI;
// console.log(markBmiHigherJohnBMI);

if (markBMI > johnBMI){
    console.log("Mark's BMI (" +markBMI +") is higher than John's!("+ johnBMI+")!");
}else{
    console.log("John's BMI is higher than Mark's!");
};
// type conversion 
const inputYear = '1991';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23),23);
// type coercion
console.log('I am '+ 23 + ' years old');
console.log('23' - '10' - '3');
console.log('23' / '2');
console.log('23' > '18');

// 5 falsy values: 0 ,'' ,undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

let money = 1;
if (money){
    console.log('Dont spend it all ;)')
}else{
    console.log("You should get a job!");
}*/
/*
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favorite = Number(prompt("what's your favorite number?"));
console.log(favorite); 
console.log(typeof favorite);

if (favorite === 23){ // 23 === 23
    console.log('Cool! 23 is an amazing number!');
}else if(favorite === 7 ){
    console.log("7 is also cool number")
}else if(favorite === 9){
    console.log("9 is also cool number")
}
else {
   console.log('Number is not 23 or 7 or 9')
}

if (favorite !== 23) console.log('Why not 23?'); */
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision){
//     console.log('SArah is able to driver!');
// }else{
//     console.log("Someone else should drive...");
// }

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired)

if(hasDriversLicense && hasGoodVision && !isTired ){
    console.log('SArah is able to driver!');
}else{
    console.log("Someone else should drive...");
}*/

//CHALLENGE 3
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
/*
const averageDolphins1 = (97 + 112 + 101) / 3;
console.log(averageDolphins1);
const averageKoalas1 = (109 + 95 + 123) / 3;
console.log(averageKoalas1);

if ((averageDolphins1 === averageKoalas1) || (averageDolphins1 >=100 && averageKoalas1 >=100)){
    console.log("DRAW");
}else if((averageDolphins1 >= 100) &&( averageDolphins1 > averageKoalas1)){
    console.log("Dolphins is winner");
}else if((averageKoalas1 >= 100)&& (averageKoalas1 > averageDolphins1){
    console.log('Koalas is winner');
};
*/ 



// if (averageDolphins1 > 100 && averageKoalas1 > 100 ){
//     if(averageDolphins1 > averageKoalas1){
//         console.log("Dolphins is winner");    
//     }else if (averageDolphins1 === averageKoalas1){
//         console.log("DRAW");
//     }else{
//         console.log("Coalas is winner");
//     }    
// }else{
//     console.log('The two command a loose')
// };
/*

const day = 'wednesday'

switch(day){
    case 'monday':
        console.log("Plan course structure");
        console.log('go to coding meetup');
        break;  
    case 'tuesday':
        console.log('Prepare theory video');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy tre weekend :D');
        break;
    default :
    console.log('Not a valid day!');
}
*/
/*
const age = 23;
//age >= 12 ? console.log('I like to drink wine 🍷'):
//console.log('I like to drink water 🌊');

const drink = age >= 18 ? 'wine 🍷' : 'water 🌊';
console.log(drink); 

let drink2;
if (age >= 18){
    drink2 = 'wine 🍷';
}else{
    drink2 = 'water 🌊';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🌊'} `)*/

const values = 100;
let tip = values >= 50 && values <= 300 ? values * 0.15 : values * 0.2;
console.log(tip);
