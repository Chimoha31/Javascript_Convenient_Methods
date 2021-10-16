"use strict";
console.log("hello test");

let colors = ['red', 'blue', 'green'];

// for loopからforEachに書き換え①
for(let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function(color) {
  console.log(color);
});

// for loopからforEachに書き換え②
let numbers1 = [1, 2, 3, 4, 5];
let sum = 0;

numbers1.forEach(function(number) {
  sum += number;
  console.log(sum);
});

// function handlePosts() {
//   var posts = [
//     { id: 23, title: 'JSニュース' },
//     { id: 52, title: 'リファクター・シティ' },
//     { id: 105, title: 'Rubyの良いところ' }
//   ];
  
//  posts.forEach(function(post) {
//     savePost(post) ;
//  });
// }

// ------------------------------------------------
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image) {
   areas.push(image.height*image.width); 
  });
  console.log(areas);

  // ------------------------------------------------
  // map
  let numbers2 = [1, 2, 3];
  // let doubleNumbers = [];

  // for(let i = 0; i < numbers2.length; i++) {
  //   doubleNumbers.push(numbers2[i] * 2);
  // }
  // console.log(doubleNumbers);

 let doubleNumber3 = numbers2.map(function(number) {
   return number * 2;
 });
 console.log(numbers2);
 console.log(doubleNumber3);

// ------------------------------------------------
// map
 let cars = [
   {type:'軽自動車', price:'安い'},
   {type:'高級車', price:'高い'}
 ];

 let prices = cars.map(function(car) {
  return car.price;
 });

 console.log(prices);
 
// ------------------------------------------------
//  map
 var images2 = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images2.map(function(image) {
    return image.height;
})
console.log(heights);

// map
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
   return trip.distance / trip.time; 
});

console.log(speeds);

// ------------------------------------------------------------
function count(targetString){
  var characters = ['a', 'e', 'i', 'o', 'u'];
  var number5 = 0;

  for(var i = 0; i < targetString.length; i++) {
    if(characters.includes(targetString[i])) {
      number5++;
    }
  }
  return number5;
}

console.log(count('aeiosgyduwi'));

// ------------------------------------------------------------

function getMessage() {
  const year = new Date().getFullYear();

  return "今年は" + year + "年です。";
}

console.log(getMessage());

function getMessage2() {
  const year = new Date().getFullYear();

  return `今年は ${year - 1} 年です。`;
}

console.log(getMessage2());

// ------------------------------------------------------------

function doubleMessage(number) {
  return `${number}を2倍すると${2 * number}になります`;
}

console.log(doubleMessage(20));

const numbers6 = (a, b) => a + b;
console.log(numbers6(1,2));

const double = number7 => 2 * number7;
console.log(double(8));

const numbers8 = [1, 2, 3];

let doubleNumber2 = numbers8.map(number8 => 2 * number8);
console.log(doubleNumber2);

// ES5の解決策
const team = {
  members:['太郎', '花子'],
  teamName: 'スーパーチーム',
  teamSummary: function() {
    let self = this;
    return this.members.map(function(member) {
      return `${member}は${self.teamName}です！`;
    });
  }
}

//アロー関数で解決 
console.log(team.teamSummary());
const team2 = {
  members:['太郎', '花子'],
  teamName: 'スーパーチーム',
  teamSummary: function() {
    return this.members.map(member => `${member}は${this.teamName}です！`);
  }
}
console.log(team2.teamSummary());


const profile = {
  name: '太郎',
  getName: function() {
   let self = this;
   return self.name;
  }
};

console.log(profile.getName());
// ------------------------------------------------------------
