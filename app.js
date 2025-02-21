"use strict";

const account1 = {
  owner: "Mark Shmedtman",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "jessica davis",
  movements: [5000, 3400, -150, -790, -3210, 1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Park Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460, 100, -400],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "sarah smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movementContainer = document.querySelector(".left");

// console.log(movementContainer.innerHTML)

const displayMovements = function (arr) {
  //// generick function ...
  movementContainer.innerHTML = "";
  arr.forEach((mov, i) => {
    let type = mov > 0 ? "deposit" : "withdraw";

    let html = `
                    <div class="${type}-container">
            <div class="${type}-info">
              <span class="${type}"> ${i + 1} ${type}</span>
            </div>
            <p class="${type}-amount">
             ${mov}<i class="fa-solid fa-euro-sign"></i>
            </p>
          </div>

        `;

    movementContainer.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account2.movements); //// invocation, run , call ..

























///////////////////////// lectures /////////////////////////////////////////////////////////////


/// section : data transformation (ta7wil data , convertir)
/////// map (return new array : (traja3 array jdid)) :: ///////// 

// const arr = [3,1,4,3,2]
// console.log(arr)


/// with forEach //// 
// const result = [] ; 
// arr.forEach(function(ele){
//   result.push(ele*2)
// })
// console.log(result)

///// with map :: 
// const resultwithMap = arr.map((num)=>num*2)
// console.log(resultwithMap)


////////////////// second exemple :::: 

//// with map ::

// const euro = [100,50,10,5,25]
// console.log("euro:" , euro)
// const toTunisianDinar = 3.31 ; 

// const dinar = euro.map((ele)=> ele* toTunisianDinar)

// console.log("dinar :" ,dinar )

// ///// with for loop :: 
// const euro = [100,50,10,5,25]
// const toTunisianDinar = 3.31 ;
// const dinar = []
// for (let i = 0 ; i<euro.length ; i++) {
//    dinar.push(euro[i]*toTunisianDinar)
// }
// console.log(dinar)

///// third exemple ::: 

// const movements =  [5000, 3400, -150, -790, -3210, 1000, 8500, -30]

//  movements.map((mov,index)=>{
//   const message = mov > 0 ? "deposit" : "withdraw" ; 
//   console.log(`movement ${index+1} : you ${message} ${mov}`)
// })


////// .toLowerCase() ==> convertation au miniscule ; 
////// .toUpperCase() ==> convertation au majiscule ; 
////  .split() ==> trodlek string array ..
//////  .join() ===> trodlek array string
// const user = "SARAH SMITH"    /// ptw 

// const userName1 = user.toLowerCase()   //// park thomas williams
// console.log(userName1)
// const userName2 = userName1.split(" ")
// console.log(userName2)   //////////  ['park', 'thomas', 'williams']

// const userName3 = userName2.map((nom)=> nom[0])
// console.log(userName3)  //// [p,t,w] ;


// const result = userName3.join("") ;
// console.log(result)
//// chaining ::: 
// const result = user.toLowerCase().split(" ").map((ele)=>ele[0]).join("")
// console.log(result)



//////// filter /////// 
// const arr = [3,1,4,3,2,10,2]
// console.log(arr)

// const numbersGreaterThanTwo = arr.filter((num,i)=>num == 2 )

// console.log(numbersGreaterThanTwo)  // [2]

///// with for loop :: 
// const arr = [3,1,4,3,2,10,2]
// console.log(arr)
// const resultGreaterThanTwo = []
// for (let i = 0 ; i<arr.length ; i++) {
//         if (arr[i] > 2){
//             resultGreaterThanTwo.push(arr[i])
//         }
// }

// console.log(resultGreaterThanTwo)
