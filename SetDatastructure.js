const saifullah = { userName: "saifullah" };
const kabir = { userName: "kabir" };
const rana = { userName: "rana" };

const set = new Set();

set.add(saifullah);
set.add(kabir);
set.add(rana);

// console.log(set.size);
// console.log(set);


// const arr = ["apple", "banana", "mango"];
// const set1 = new Set(arr);

// console.log(set1.delete("banana"));
// console.log(set1);


const arr = ["apple", "banana", "mango", "apple"]

// Brute Force
const removeDupArr = arr => {
    const newArr = [];
    arr.forEach(element => {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    });
    return newArr;
}
console.log(removeDupArr(arr));

// Set implementation

const removeDupSet = arr => {
    const set1 = new Set(arr);
    return Array.from(set1);
}

console.log(removeDupSet(arr));