// Closures => Scopes
// Global Scope => whole file
// local scope => inside function

//Question # 1
// function print (num1) {
//     return function (num2) { 
//         console.log(num1 + num2)
//     }
// }
// let innerFunction = print(7);
// innerFunction(8)

//Question 2

// function searchArray(arr, val) {
//     // Base case: if the array is empty, return false
//     if (arr.length === 0) {
//       return false;
//     }
//     // Recursive case: check if the first element of the array is the value we're looking for
//     if (arr[0] === val) {
//       return true;
//     }
//     // Otherwise, recursively search the rest of the array
//     return searchArray(arr.slice(1), val);
//   }
  
//   const myArray = [1, 2, 3, 4, 5];
//   console.log(searchArray(myArray, 3)); // Output: true
//  console.log(searchArray(myArray, 6)); // Output: false





// Question # 3
// let myPara = document.getElementById("my-para");
// myPara.innerText = "Hello"
// console.log(myPara);

//Question # 4

// function myFunction() {
//     let x = document.createElement("LI");
//     let t = document.createTextNode("Coffee");
//     x.appendChild(t);
//     document.getElementById("myList").appendChild(x);
//   }

//Question # 5

// const myPara = document.getElementById("my-para");
// myPara.innerHTML = "2nd Assignment";
// setInterval(function(){
//   myPara.style.backgroundColor = "red";
  
//  }, 500);


//Question # 6

// let person = [];
// function givenperson(){
//     let per = {
//     firstName: prompt("Enter your Firstname : "),
//     lastName: prompt("Enter your Lastname : "),
//     age: +prompt("Enter your Age : "),
//     eyeColor: prompt("Enter your eyeColor : "),
//   };
//   person.push(per);
//   console.log(person);
//   let stringify = JSON.stringify(person);
//   localStorage.setItem("person", stringify);
// }


//Question # 7

// let prevPerson = localStorage.getItem("person"); // get from LocalStorage
// let person = prevPerson ? JSON.parse(prevPerson) : [];
// function givenperson() {
//   let per = {
//     name: prompt("Enter Name"),
//     rollNo: +prompt("Enter Roll no"),
//     teacher: prompt("Enter Teachers Name"),
//     className: prompt("Enter Your Class"),
//   };
//   person.push(per);
//   console.log(person);
//   let stringify = JSON.stringify(person); // Convert it to String
//   localStorage.setItem("person", stringify); // Save it to LocalStorage
//}



// Question # 8

let person = [];
function givenperson() {
  let per = {
    name: "Ali", // prompt("Enter Name"),
    rollNo: 34, //+prompt("Enter Roll no"),
    teacher: "Amir",  // prompt("Enter Teachers Name"),
    className: "Java Script",  //prompt("Enter Your Class"),
  };
  person.push(per);
  console.log(person);
  let stringify = JSON.stringify(person); // Convert it to String
  localStorage.setItem("person", stringify); // Save it to LocalStorage
}
