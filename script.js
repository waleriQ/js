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

let i = ['A', 'B', 'C', 'D', 'F'];
console.log(i.length);