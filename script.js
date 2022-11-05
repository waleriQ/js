// *entries / fromentries *//

let a = {  //Object
    name: 'Albert',
    age: 25,
    lastname: 'Ivanov'
};

let b = [  //Entries
    ['name', 'albert'],
    ['age', 25],
    ['lastname', 'Ivanov']
]

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

let alcohol = ['Jack Daniels', 'Jameson', 'Egermaister'];
alcohol.shift();
console.log(alcohol[0]);