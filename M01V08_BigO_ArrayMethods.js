const firstArray = [];
const secondArray = [];

for (let i = 0; i < 600000; i++) {
    if (i < 300000) {
        firstArray.push(i);
    }
    secondArray.push(i);
}

console.log('first array', firstArray.length);
console.log('second array', secondArray.length);

// Time Complexity: O(n)
console.time("map1");
const firstUserList = firstArray.map((number) => ({userId: number}));
console.timeEnd("map1");

console.time("map2");
const secondUserList = secondArray.map( (number) => ({userId: number}));
console.timeEnd("map2")


console.time("find");
// const user = secondUserList.find(user => user.userId === 600000 );

// Time Complexity: O(1)
const user = secondUserList[600000];  // index access
console.timeEnd("find");