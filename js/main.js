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