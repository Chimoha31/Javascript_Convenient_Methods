"use strict";

let products = [
  {name: 'きゅうり', type: '野菜'},
  {name: 'バナナ', type: 'フルーツ'},
  {name: 'セロリ', type: '野菜'},
  {name: 'オレンジ', type: 'フルーツ'},
]

// for loop
let filteredProducts = [];

for(let i = 0; i < products.length; i++) {
  if(products[i].type === '野菜'){
    filteredProducts.push(products[i]);
  }
}
console.log(filteredProducts);

// filter 
let filteredProducts2 = [];
 products.filter(function(product) {
  return filteredProducts2.push(product.type == 'フルーツ');
});
// trueかfalseで返されるので変数に入れて値を抽出するべき
console.log(filteredProducts2);

// ------------------------------------------------------------
let products2 = [
  {name: 'きゅうり', type: '野菜', quantity: 0, price:1},
  {name: 'バナナ', type: 'フルーツ', quantity: 10, price:15},
  {name: 'セロリ', type: '野菜', quantity: 30, price:9},
  {name: 'オレンジ', type: 'フルーツ', quantity: 3, price:5},
];

// for loop
let filtered = [];

for(let j = 0; j < products2.length; j++) {
  if(products2[j].type == '野菜' && products2[j].quantity > 0 && products2[j].price < 10){
    filtered.push(products2[j]);
  }
}
console.log(filtered);


// (filter)種類は野菜で、量は0より大きく、値段は10より小さい
let filteredProducts3 = products2.filter(function(product2) {
  return product2.type == '野菜' 
  && product2.quantity > 0 
  && product2.price < 10;
});
console.log(filteredProducts3);


//filter --------------------------------------------------------
let post = {id: 4,title: '初めましての投稿'};

let comments = [
  {postId: 4, content: 'いい記事ですね！'},
  {postId: 3, content: '勉強になりました'},
  {postId: 4, content: 'なるほど！'},
];

let filtered3 = comments.filter(function(comment) {
  return comment.postId == post.id;
});

console.log(filtered3);

//----------------------------------------------------------- 
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number) {
    return number > 50;
});

console.log(filteredNumbers);

//---------------------------------------------------------- 
var users = [
  { id: 1, admin: true },  
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
 ];
 
 var filteredUsers = users.filter(user => {
     return user.admin === true;
 });
 console.log(filteredUsers);

//-------------------------------------------  
// for loop
var users = [
  {name: '太郎'},
  {name: '次郎', id:1},
  {name: '三郎'},
  {name: '次郎', id: 2},
];

var userName;

for(let i = 0; i < users.length; i++) {
  if(users[i].name == '太郎'){
    userName = users[i];
    break;
  }
}
console.log(userName);

//find 
let findUser = users.find(function(user) {
  return user.name === '次郎';
});
console.log(findUser);

// ------------------------------------------------

let cars2 = [
 {name: 'プリウス'},
 {name: 'ノート'},
 {name: 'アクア'},
];

let findCar = cars2.find(function(car2) {
  return car2.name === 'アクア';
});
console.log(findCar);

// ------------------------------------------------
let posts2 = [
  {id: 1, title: '古い投稿'},
  {id: 2, title: '新しい投稿'},
];

let comment2 = {postId: 2, content: 'いいね！'};

let findComment = posts2.find(post2 => {
 return post2.id == comment2.postId;
});
console.log(findComment);

// --------------------------------------------
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
   return user.admin === true; 
});

console.log(admin);

// --------------------------------------------
let computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 32},
];
//16ramが必要なソフト
//for loop
// let allComputersCanRun = true;
// let someComputersCanRun = false;

// for(let i = 0; i < computers.length; i++) {
//   let computer = computers[i];
//   if(computer.ram < 16) {
//     allComputersCanRun = false;
//   }else{
//     someComputersCanRun = true;
//   }
// }

//every
let everyComputers = computers.every(function(computer) {
  return computer.ram >= 16;
}); 
console.log(everyComputers);

// --------------------------------------------
//some
let computers2 = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 32},
];
 
//16ramが必要なソフト
let everyComputers2 = computers.some(function(computer) {
  return computer.ram >= 16;
}); 
console.log(everyComputers2);

// --------------------------------------------
var names2 = [
  'けん',
  'はなこ',
  'そういちろう',
]

let nameLetter = names2.every(function(name2) {
  return name2.length >= 3;
});
console.log(nameLetter);

let nameLetter2 = names2.some(function(name2) {
  return name2.length >= 3;
});
console.log(nameLetter2);

// --------------------------------------------
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(user => {
   return user.hasSubmitted === true; 
});
console.log(hasSubmitted);

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(request => {
   return request.status === 'pending'; 
});
console.log(inProgress);

// --------------------------------------------
//for loop
var numbers = [10, 20, 30];
// var sum2 = 0;

// for(let i = 0; i < numbers.length; i++) {
//   sum2 += numbers[i];
// }
// console.log(sum2);

// reduce
let total = numbers.reduce((sum2, number) => {
  return sum2 + number;
}, 0);

console.log(total);

var primaryColors = [
  {color: 'red'},
  {color: 'yellow'},
  {color: 'blue'}
];

let arrayForReduce = primaryColors.reduce(function(previous, primaryColor) {
 previous.push(primaryColor.color);
 return previous;
}, []);
console.log(arrayForReduce);

// --------------------------------------------
// '((((()))))'は均衡を取れているかどうか？
function compare(string) {
  return !string.split('').reduce(function(previous, char) {
    if(char < 0) {
      return previous;
    }else if(char === '(') {
      return previous + 1;
    }else if(char === ')') {
      return previous - 1;
    }
  }, 0);
}

console.log(compare('(())'));
// --------------------------------------------

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(previous, trip) {
    return previous + trip.distance;
}, 0);

console.log(totalDistance);


var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous, desk) {
    if(desk.type === 'sitting'){
        previous.sitting ++;
    }else{
        previous.standing ++;
    }
    return previous;
}, { sitting: 0, standing: 0 });

console.log(deskTypes);

