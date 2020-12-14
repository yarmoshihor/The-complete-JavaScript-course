'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName},you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating new variable with same as outer score's variable
      const firstName = 'Steven';

      //Reassigning uoter scope`s variable
      output = 'New OUTPUT!';

      const str = `Oh, and you are a millenial,${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(millenial);
    // console.log(add(2,3));
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// console.log(age);
// printAge();

*/
/*
console.log(me);
//console.log(job);
//console.log(year);

var me = 'jonas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(2,3));
//console.log(addExpr(2,3));
console.log(addArrow);
// console.log(addArrow(2,3));


function addDecl(a,b) {
    return a + b;
}

const addExpr = function(a,b){
    return a + b;
}

var addArrow = (a,b) => a + b ;

//example
if(!numProduct) deleteShoppingCart();

var numProduct = 10;

function deleteShoppingCart() {
    console.log("All productts deleted!");
};
*/
/*
console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    //console.log(this);
}

calcAge(1991);


const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    // console.log(this);
}

calcAgeArrow(1980);


const jonas = {
    year:1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    } 
}
jonas.calcAge();

const matilda = {
    year : 2017,
}

matilda.calcAge = jonas.calcAge;
matilda.calcAge;

const f = jonas.calcAge;
f();
*/

/*
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    // SOlution 1
    // const self = this;// self or that
    // const isMillenial = function(){
    //     console.log(self);
    //     console.log(self.year >= 1981 && self.year <=1996);
    // };

    // Solution 2
    const isMillenial = () => {
        console.log(this);
        console.log(this.year >= 1981 && this.year <=1996);
    };
    isMillenial();
  },

  greet: () => {
      console.log(this);
      console.log(`Hey ${this.firstName}`)
  },
};

jonas.greet();
jonas.calcAge();

// Arguments keyword
const addExpr = function(a,b){
    console.log(arguments);
    return a + b;
}
addExpr(2,5);
addExpr(2,5,8,12);

var addArrow = (a,b) => {
    console.log(arguments);
    return a + b;
};

addArrow(2,5,8);
*/
/*
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge );

const me = {
    name : 'Jonas',
    age: 30,
};

const friend = me;
friend.age = 27;

console.log("Friend:", friend);
console.log('Me:',me);
*/

// Primitive values
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
//Reference values
const jessica = {
  firstName: 'Jessica',
  lastName: 'Wiiliams',
  age: 27,
};
const merriedJessica = jessica;
merriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage ', merriedJessica);

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Wiiliams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage', jessica2);
console.log('After marriage ', merriedJessica);
