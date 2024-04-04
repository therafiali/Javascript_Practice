// loops in Javascript

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for of loop

for (const num of arr) {
  console.log(num);
}
// Output: 1 2 3 4 5 6 7 8 9

greeting = "Rafi Ali";

for (const greet of greeting) {
  console.log(`Each Character is ${greet}`);
}

// Output: Each Character is R
//         Each Character is a
//         Each Character is f
//         Each Character is i
//         Each Character is A
//         Each Character is l
//         Each Character is i

// MAP

map = new Map();
map.set("name", "Rafi Ali");

console.log(map.get("name"));
// Output  Rafi Ali

// for of loop on MAP
for (const [key, value] of map) {
  console.log(`This is key ${key} : this is value ${value}`);
}
// Output:   This is key name : this is value Rafi Ali

// for in loop on Objects

const obj = {
  name: "Rafi Ali",
  age: 25,
};

for (const key in obj) {
  console.log(key, obj[key]);
}
// Output: name Rafi Ali
//         age 25

// for each loop
// Note: But for each loop is not return anything or any value

arr = ["Nasir", "Hassan", "Ali"];

arr.forEach(function (element) {
  console.log(element);
});
// Output: Nasir
//         Hassan
//         Ali

arr.forEach((element, index, arr) => {
  console.log(element, index, arr);
});
// Output: Nasir 0 ["Nasir", "Hassan", "Ali"]
// Hassan 1 [ 'Nasir', 'Hassan', 'Ali' ]
// Ali 2 [ 'Nasir', 'Hassan', 'Ali' ]

// Filer loop

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredArr = arr.filter((num) => num > 3);
console.log(filteredArr);
// Output: [4, 5, 6, 7, 8, 9]

// make a dummy data of books
const books = [
  {
    title: "Book One",
    author: "John Doe",
    year: "2013",
  },
  {
    title: "Book Two",
    author: "Jane Doe",
    year: "2016",
  },
  {
    title: "Book Three",
    author: "Rafi Ali",
    year: "2017",
  },
  {
    title: "Book Four",
    author: "Rafi Ali",
    year: "2018",
  },
];

const filteredBooks = books.filter((book) => book.year > "2016");
console.log(filteredBooks);
// Output: [
// { title: 'Book Three', author: 'Rafi Ali', year: '2017' },
// { title: 'Book Four', author: 'Rafi Ali', year: '2018' }
// ]

const filteredBooks1 = books.filter(
  (book) => book.year >= "2016" && book.author == "Rafi Ali"
);
console.log(filteredBooks);
// Output: [
// { title: 'Book Three', author: 'Rafi Ali', year: '2017' },
// { title: 'Book Four', author: 'Rafi Ali', year: '2018' }
// ]

const filteredBooks2 = books.filter(
  (book) => (book.year >= "2016") | (book.author == "Neelam Ali")
);
console.log(filteredBooks);
// Output: [
// { title: 'Book Three', author: 'Rafi Ali', year: '2017' },
// { title: 'Book Four', author: 'Rafi Ali', year: '2018' }
// ]

// Map Loop
numlist = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mappedNum = numlist.map((num) => num * 2);
console.log(mappedNum);
// Output: [2, 4, 6, 8, 10, 12, 14, 16, 18]

// Chaning
const mappedNum1 = numlist.filter((num) => num > 3).map((num) => num * 2);
console.log(mappedNum1);
// Output: [8, 10, 12, 14, 16, 18]

// Reduce loop
let arr = [1, 2, 3];
const reducedArr = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(reducedArr);
// Output: 6


const courses = [
    {
        title: "Javascript",
        price: 100,
    },
    {
        title: "HTML",
        price: 50,
    },
    {
        title: "CSS",
        price: 80,
    }
]

const totalPrice = courses.reduce((acc, curr) => {
    return acc + curr.price;
}
, 0);
console.log(totalPrice);
// Output: 230



