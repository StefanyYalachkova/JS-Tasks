function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}

// alert(camelize("background-color"));
// alert(camelize("list-style-image"));



function filterRange(arr, a, b) {
    return arr.filter(num => num >= a && num <= b);
}
// alert( filterRange([5, 3, 8, 1], 1, 4) );



function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// alert( arr );



function copySorted(arr) {
    let sortedArr = arr.slice();

    return sortedArr.sort((a, b) => a.localeCompare(b));
}
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// alert( sorted );
// alert( arr );



function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "**": (a, b) => a ** b
    };

    this.calculate = function (str) {
        let split = str.split(' '),
            a = Number(split[0]),
            op = split[1],
            b = Number(split[2]);

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }
}

// let calc = new Calculator;
// alert( calc.calculate("3 ** 2") );



// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];
// let name = users.map(i => i.name);

// alert( name );



// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));

// alert( usersMapped[0].id );
// alert( usersMapped[0].fullName ); 



function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);
// alert(arr[0].name); 
// alert(arr[1].name); 



function getAverageAge(users) {
    let sum = 0;
    users.forEach(element => {
        sum += element.age;
    });

    return sum / users.length;
}

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let users = [ john, pete, mary ];

// alert( getAverageAge(users) );



function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) );



function groupById(arr) {
    return arr.reduce((accomulator, currUser) => {
        accomulator[currUser.id] = currUser;
        return accomulator;
    }, {});
}

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

//   let usersById = groupById(users);
//   console.log( JSON.stringify(usersById) );



function unique(arr) {
    let uniqueVal = new Set(arr);
    return Array.from(uniqueVal);
}

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];

//  console.log( unique(values) );



function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word
            .toLowerCase()
            .split('')
            .sort()
            .join('');
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(aclean(arr));

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
console.log(keys);