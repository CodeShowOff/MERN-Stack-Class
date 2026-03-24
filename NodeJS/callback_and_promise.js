// function hello(name){
//     console.log("Hello " + name);
// }

// setTimeout(() => hello("John"), 2000);
// // Output after 2 seconds: Hello John


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved!");
//     }, 3000);
// });

// promise
// .then((message) => {
//     console.log(message);
// })
// .catch((error) => {
//     console.error("Error: " + error);
// });


import { promises } from 'fs';
promises.readFile('example-copy.txt', 'utf8')
.then((data) => {
    console.log("File content: \n" + data);      
})
.catch((error) => {
    console.error("Error reading file: " + error);
});
