// let name=["fahad","ali","talha","jawad"];
// for(let i of name)
// {
//     console.log(i);
// }


// console.log("for in loop in object");
// let car ={
//     name:"BMW",
//     model:"i10",
//     price: 20000,
//     color:"Black",
//     yearr:2024,
// };
// console.log("----------------------------------------")

// //using for in on object

// for(let i in car)
// {
//     console.log((i),("\t:\t"),(car[i]));

// }

// // //using for in on arrays
// // for(let y in car)
// // {
// //     console.log(y);
// // }
// // console.log(car);

// // 
// console.log("----------------------------------------")

// let arrkeys1 = Object.keys(car); // converting object into array
// for (let u of arrkeys1)
// {
//     console.log(u);
// }

// let arrkeys2 = Object.values(car); // converting object into array
// for (let u of arrkeys2)
// {
//     console.log(u);
// }

// console.log("----------------------------------------")

// //same as above one 
// for(let v in arrkeys1)
// {
//     console.log(arrkeys1[v])
// }
// console.log("----------------------------------------")

// for(let w in arrkeys2)
//     {
//         console.log(arrkeys2[w])
//     }
// console.log("----------------------------------------")

    
// let arrkeys3 = Object.entries(car); // converting object into array
// for (let x of arrkeys3)
// {
//     console.log(x);
// // }
// let student ={
//     name:"fahad",
//     Roll_no:799,
//     class:"BSCS-A",

// };
// // for(let i in student)
// // {
// //     console.log((i), student[i]);
// // }
// let entry = `"Th"` 
  let nr =prompt("enter a number")
function logRecursive(nr) {
    console.log("Started function:", nr);
    if (nr > 0) {
    logRecursive(nr - 1);
    } else {
    console.log("done with recursion");
    }
    console.log("Ended function:", nr);
   }
   logRecursive(nr);
