// *entries / fromentries *//

// let a = {  //Object
//     name: 'Albert',
//     age: 25,
//     lastname: 'Ivanov'
// };
//
// let b = [  //Entries
//     ['name', 'albert'],
//     ['age', 25],
//     ['lastname', 'Ivanov']
// ]

// console.log(Object.entries(a));
// console.log(Object.fromEntries(b));
// const mapping = new Map(b);
// mapping.set('gender', 'man');
// console.log(b);

// * Рекурсия *//
// let rec = 0;
// function f1() {
//     rec++;
//     console.log(rec);
//     // f1()
// }
// f1();

// * Array *//
// let alcohol = ['Jack Daniels', 'Jameson', 'Egermaister'];
// alcohol.shift(); //удаляем первый элемент
// alcohol.unshift('Jony Walker'); //добавить в начало элемент
// alcohol.push('Stella'); // добавить в конец
// alcohol.pop(); //удалить с конца
// console.log(alcohol);

// * Array Cycle *//

// let arr = ["Яблоко", "Апельсин", "Груша"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(i);
// }

//--------------

// let fruits = ["Яблоко", "Апельсин", "Слива"];
// for (let ret of fruits) {
// console.log(ret);
// }

//--------------
//
// function eachCons(array, n) {
//     const r = [];
//     for( let i = 0; i <= array.length - n; i++) {
//         const chunk = [];
//         for(let j = i; j < i+n; j++) {
//             chunk.push(array[j])
//         }
//         r.push[chunk];
//     }
// }
// eachCons([3, 5, 8, 13], 1);

// const newpeople = people.filter(person => person.age >= 18);
// console.log(newpeople);


// ===========================

// МЕТОД МАССИВА SPLITE

const people = [
    {id: 1, name: 'Ольга', age: 5, money: '15000'},
    {id: 2, name: 'Иван', age: 31, money: '25000'},
    {id: 3, name: 'Albert', age: 12, money: '7000'},
    {id: 4, name: 'Kony', age: 45, money: '20000'},
];

// const names = 'Вася, петя, оля, dodik';
//
// let mas = names.split('',);
// console.log(typeof mas);
// console.log(mas);
//
// // JOIN
// const names2 = ['В', 'а', 'с', 'я', ',', ' ', 'п', 'е', 'т', 'я', ',', ' ', 'о', 'л', 'я', ',', ' ', 'd', 'o', 'd', 'i', 'k'];
// let mas2 = names2.join('');
// console.log(typeof mas2);
// console.log(mas2);


// const stringToNumber = function(str){
//     return parseInt(str);
// }
//
// console.log(stringToNumber('32'))

// let b = 0;
// console.log(a == b);


//METHOD REPLACE
const a = 'This doctor is good, very good';
const b = a.replace('good', 'bad');
console.log(b); //Меняем только первый good
// =================
const c = 'This doctor is good, very good';
const d = c.replace(/good/gi, 'bad');
console.log(d);
// Меняем оба bad через => регулярные выражения
// g - global; i - ignore(игнорирование регистра)

