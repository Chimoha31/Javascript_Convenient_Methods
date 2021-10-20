"use strict";

var expense = {
  type: "交際費",
  amount: "4500 JPY",
};

// ES5まで
// var type = expense.type;
// var amount = expense.amount;

// ES6
const { type: chihoType, amount } = expense;
console.log(chihoType);
console.log(amount);

// -------------------------------------------------
var savedFile = {
  extension: "jpg",
  name: "profile",
  size: 14040,
};

// ES5
// function fileSummary(file) {
//   return `${file.name}.${file.extension}の容量は${file.size}です。`
// }
// console.log(fileSummary(savedFile));

// ES6
function fileSummary({ extension, name, size }) {
  return `${name}.${extension}の容量は${size}です。`;
}
console.log(fileSummary(savedFile));

// -------------------------------------------------
const companies = ["Google", "Facebook", "Uber"];

// const [name, name2, name3] = companies;
const [name, ...chiho] = companies;

console.log(name);
console.log(...chiho);

// -------------------------------------------------
const companies2 = [
  { name: "Google", location2: "マウンテンビュー" },
  { name: "Facebook", location2: "メンロパーク" },
  { name: "Uber", location2: "サンフランシスコ" },
];

// ES5
console.log(companies2[0].location2);

// ES6
// メンロパークを取得するにはどうすればいいの？
const [{ location2 }] = companies2;
console.log(location2);

const Google = {
  location3: ["マウンテンビュー", "ニューヨーク", "ロンドン"],
};

const {
  location3: [first, second, third],
} = Google;
console.log(second);

// -------------------------------------------------
const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

const test2 = points.map(([x, y]) => {
  return { x, y };
});
console.log(test2);
// -------------------------------------------------

const profile2 = {
  title: "エンジニア",
  department: "開発部",
};

function isEngineer({ title, department }) {
  return title === "エンジニア" && department === "開発部";
}
console.log(isEngineer(profile2));

const classes = [
  ["化学", "1時限目", "鈴木先生"],
  ["物理", "2時限目", "佐藤先生"],
  ["数学", "3時限目", "木村先生"],
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return { subject, time, teacher };
});

console.log(classesAsObject);

// -------------------------------------------------
class Car2 {
  constructor(title) {
    this.title = title;
  }

  drive() {
    return `ウィーン`;
  }
}

class Toyota extends Car2 {
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk() {
    return `Bobooo`;
  }
}

const toyota = new Toyota({ color: "red", title: "アクア" });
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());

// const car2 = new Car2({title: 'アクア'});
// console.log(car2);
// console.log(car2.drive());

// -------------------------------------------------
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  bite(targetSnake) {
    targetSnake.health -= 10;
  }
}

// -------------------------------------------------
const colors2 = ['red', 'green', 'blue'];

for(let color of colors2) {
  console.log(color);
}

const numbers3 = [1, 2, 3, 4];
let total2 = 0;
for(let number3 of numbers3) {
  total2 += number3;
}
console.log(total2);

// let total2 = numbers3.reduce((sum, number3)=> {
  //   return sum += number3;
  // }, 0);
  
  // console.log(total2);

  // -------------------------------------------------
  function* shopping() {
    // 歩道(外の世界)
    
    // 歩道を歩いてお店に行く(外の世界)
    
    // お店に到着したから、お金を持ってお店に入る(外から中へ)
    const stuffFromStore = yield 'お金';
    
    // コインランドリーに到着したので、服を持って入る
    const cleanClothes = yield '汚れた服';
    
    // 家に歩いて帰る(外の世界)
    return [stuffFromStore, cleanClothes];
  }
  
  // お店(中の世界)
  const gen = shopping();
  console.log(gen.next()); //家から歩道に出る
  console.log(gen.next('日用品')); //お店で買い物をして日用品を持って歩道に出る
  
  console.log(gen.next('綺麗な服'));

  // -------------------------------------------------
  function* colors3() {
    yield 'red';
    yield 'blue';
    yield 'green';
  }
  
  const gen2 = colors3();
  console.log(gen2.next());
  console.log(gen2.next());
  console.log(gen2.next());
  console.log(gen2.next());
  
  const myColors = [];
  for(let color3 of colors3()) {
    myColors.push(color3);
  }
  console.log(myColors);

  // -------------------------------------------------
  const engineeringTeam = {
    size: 3,
    department: '開発部',
    leader: '太郎',
    manager: '花子',
    engineer: '次郎'
  };
  
  function* TeamIterator(team) {
    yield team.leader;
    yield team.manager;
    yield team.engineer;
  }
  
  const names = [];
  for(let name of TeamIterator(engineeringTeam)){
    names.push(name);
  }
  console.log(names);
  
  // -------------------------------------------------
  const testingTeam = {
    lead: '典子',
    teacher: '隆',
    [Symbol.iterator]: function* () {
      yield this.lead;
      yield this.teacher;
    }
  }
  
  const engineeringTeam2 = {
    testingTeam,
    size: 3,
    department: '開発部',
    lead: '太郎',
    manager: '花子',
    engineer: '次郎',
    [Symbol.iterator]: function* () {
      yield this.lead;
      yield this.manager;
      yield this.engineer;
      yield* this.testingTeam;
    }
  };
  
  const names4 = [];
  for(let name4 of engineeringTeam2) {
    names4.push(name4);
  };
  
  console.log(names4);

  // -------------------------------------------------
  class Comment{
    constructor(content, children) {
      this.content = content;
      this.children = children;
    }

    *[Symbol.iterator]() {
      yield this.content;
      for(let child of this.children) {
        yield* child;
      }
    }
  }

  const children = [
    new Comment('賛成！', []),
    new Comment('反対！', []),
    new Comment('う〜ん！', []),
  ];

  const tree = new Comment('非常にいい記事です！', children);
  console.log(tree);


  const values = [];
  for(let value of tree) {
    values.push(value);
  }
  console.log(values);
