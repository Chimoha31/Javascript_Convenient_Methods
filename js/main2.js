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