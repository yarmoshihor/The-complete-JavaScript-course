'use strict';

const weelDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weelDays[3]]: {
    open: 12,
    close: 22,
  },
  [weelDays[4]]: {
    open: 11,
    close: 23,
  },
  [weelDays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES^ enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:20', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  oredrPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your pasta delicious pasta with ${ing1}, ${ing2}and ${ing3}`
    );
  },

  orderPizza(mainIngridiens, ...orderIngridiens) {
    console.log(mainIngridiens);
    console.log(orderIngridiens);
  },
};

//Split and join
console.log('a+very+nica+string'.split('+'));
console.log('Jonas Shmendtmann'.split(' '));

const [firstName, lastName] = 'Jonas Shmendtmann'.split(' ');

const capitalizionName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

capitalizionName('jessica amn smith davis');
capitalizionName('igor yarmosh');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(78891011));
console.log(maskCreditCard(4337451255541));
console.log(maskCreditCard('457896541232146'));

// Repeat

const message2 = 'Bad weather... All departues delayed';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
/*
//Working with Strings Part 2;
// String methods
const airLine = 'Tap Air Portugal';

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorect);

// Comparing emails
const email = 'hello@jonal.io';
const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimedEmail = lowerEmail.trim();

const normaLizedEmail = loginEmail.toLowerCase().trim();
console.log(normaLizedEmail);
console.log(email === normaLizedEmail);

// replacing
const priceGB = '288,97💶';
const priceUS = priceGB.replace('💶', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new ARibus family');
}

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome to board');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/
/*
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airLine.length);
console.log('B737'.length);

console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.indexOf('Portugal'));

console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat😐');
  } else {
    console.log('You got lucky😎');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(typeof new String ('jonas').slice(1));
*/
// LOOPING arrays
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i,el] of menu.entries()){
  console.log(`${i + 1}: ${el}`);
}
*/
/*
// 1)Destructuring

// SPREAD because on rign=ht side of =
const arr =[1,2, ...[3,4]];

//Resr, because on left side of =
const [a, b, ...others] = [1,2,3,4,5];
console.log(a,b,others);

const [pizza, ,rizotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza,rizotto, otherFood);

//Object
const {sat, ...weekDays} = restaurant.openingHours;
console.log(weekDays);

// 2) Functions
const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length;i++) {
  sum += numbers[i]
  }
  console.log(sum);

}
add(2,3);
add(5,3,7,2);
add(1,2,3,4,6,74,4); 

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms')
*/

/*
/////////////////
//The spread Operator(...)
const arr = [7, 8, 9];
const BadNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(BadNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays,strings, maps,sets, NOT object
const str = 'Jonas';
const letters = [...str, ' ', '$.'];
console.log(letters);
console.log(...str);
console.log('j', 'o');
// console.log(`${...arr} Scmedtmann`);

//real worlds example
// const ingredients = [
//   prompt("Let's make pasta! ingridient 1?"),
//   prompt('ingridient 2?'),
//   prompt('ingridient 3?'),
// ];
// console.log(ingredients);

// restaurant.oredrPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.oredrPasta(...ingredients);

//object

const newRestaurant = {foundedIn:1998 , ...restaurant,fouded:'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/
/*
// Destructing Oblects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address :'Via del Sole, 21',
  starterIndex: 1,
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*
//////////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
 
[main,secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter,mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5 ,6]]
// const [i, ,j] = nested;
// console.log(i,j);
const [i, ,[j,k]] = nested;
console.log(i,j,k);

// Default values
const [p = 1,q = 1,r = 1] = [8,9];
console.log(p,q,r);
*/
