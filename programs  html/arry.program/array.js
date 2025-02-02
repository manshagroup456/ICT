// initilaization of array elements

let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

// function to find sum of elements in array
console.log(arr);
console.log(arr.length);

//array to string
console.log(arr.toString());
// arrray is not data types its a type object
console.log(typeof arr);
//in array index works same as keys in type object

//asssign new vlaue to array index

arr[3] = 100;
console.log(arr);

//push method to add element at end of array    

arr.push(200);
console.log(arr);

//pop method to remove element from end of array    

arr.pop();
console.log(arr);

//unshift method to add element at start of array   

arr.unshift(10);
console.log(arr);

//shift method to remove element from start of array

arr.shift();
console.log(arr);

//slice method to extract a portion of array

let sliceArr = arr.slice(2, 5);
console.log(sliceArr);

//splice method to remove or replace elements in array

arr.splice(2, 2, 400, 500);
console.log(arr);

//concat method to merge two or more arrays

let arr2 = [300, 400, 500];
let concatArr = arr.concat(arr2);
console.log(concatArr);

//sort method to sort array in ascending order

concatArr.sort();
console.log(concatArr);

//reverse method to reverse array

concatArr.reverse();
console.log(concatArr);

//find method to find element in array

console.log(concatArr.find(x => x > 100));

//findIndex method to find index of element in array

console.log(concatArr.findIndex(x => x > 100));
//for of loop in array

for(let value of concatArr)
{
    console.log(value);
}
