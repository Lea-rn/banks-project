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


////// import element :
const movementContainer = document.querySelector(".left");
const balanceAmount = document.querySelector(".amount");
const inComes = document.querySelector(".mov-average-in")
const outMoney = document.querySelector(".mov-average-out")
const intrest = document.querySelector(".mov-average-interest")












///// display movement ::
const displayMovements = function (arr) {
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

displayMovements(account2.movements);


////////////// display balance : 

const displayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  balanceAmount.textContent = `${balance}€`;
};

displayBalance(account2.movements);


///////// display summary ///// : 

const calcDisplaySummary = function (accountMovement){
  const inc = accountMovement.filter((ele)=> ele > 0)
   .reduce((acc,ele)=> ele+acc,0)
  inComes.textContent = `${inc} €` ;  //// display ui (user interface)

  const outc = accountMovement.filter((ele)=> ele<0)
  .reduce((acc,ele)=> acc+ele ,0) ;
  outMoney.textContent = `${Math.abs(outc)} €`

  const interstc = accountMovement.filter((mov)=> mov> 0)
  .map((deposit)=> {
 
   return (deposit*1.5)/100
  } )
 .filter((ele)=>ele > 1)
 .reduce((acc,ele)=>acc+ele ,0)
 intrest.textContent = `${interstc} € `    ///// update lel ui ; 
} 




calcDisplaySummary(account2.movements) ; 









///////////////////////// lectures /////////////////////////////////////////////////////////////


// //// function maha (){ // function declaration
// }

// const maha = function (){   //// function expression

// }

// const maha = ()=>{  arrow function

// }

/// section : data transformation (ta7wil data , convertir)
/////// map (return new array : (traja3 array jdid)) :: /////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////// filter (traja3 array) ////////////////////////////////////////
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

//////////////////////////////////// reduce //////////////////////////////////////////////

///// matraja3ch array
//// accumulator  ===> snow ball ==> start condition

// const numbers = [3,1,4,3,2] /////
//// sum :
// const sum = numbers.reduce(function(acc,ele,index){
//   return acc + ele
// },0)

///  3+0 ==> 3 ; 3+1 ==> 4 ; 4+4 ==> 8 ; 8+3 ==> 11 ; 11 + 2 = 13 ; acc =13

// console.log(sum)

///// with forEach .....
// const numbers = [3,1,4,3,2]

// let sum = 0 ;
// numbers.forEach((ele)=>{
//   sum += ele ;
//   /// sum = sum + ele

// })
// console.log(sum)

// const numbers = [3,1,4,3,2]   //// 72..

// const multiple = numbers.reduce(function(acc,ele){
//    return ele*acc
// },1)  // 1*3 ==> 3*1 ==> 3*4 ==> 12 ; 12*3 ==> 36 ; 36*2 ==>72
// console.log(multiple)

///////// get max using reduce ///

// const y = [50,300,1000,200,2000,10]
// console.log(y)

// const max = y.reduce(function(acc,num){
//   console.log(acc)
//    if (acc > num){
//     return acc
//    }
//    else return num
// },y[0])

// console.log(max)

//////// chaining -- pipline

// const account = [100, -200, 500, -80, 600];
// console.log(account);
// const euroToDinar = 3.3;
//// sum of deposit on tunisian dinar ...

// //// filter

// const deposit = account.filter((ele) => ele > 0);

// //// map

// const depositToDinar = deposit.map((ele) => ele * euroToDinar);

// //// reduce

// const sum = depositToDinar.reduce((acc, ele) => acc + ele, 0);

// console.log(sum);

// const sum = account.filter((ele)=>ele>0)
// .map((ele,i,arr)=>{
//   console.log("result of filter :" , arr)
//   ele * euroToDinar
// })
// .reduce((acc,ele,i,arr)=>{
//   acc+ele 
// },0)

// console.log(sum)


//////////////////////// find ///////////////////////////////

// const numbers = [10,20,30,40,20] ; 


// const result  = numbers.find(function(ele,i){
//   // console.log("console:" , ele)
//   return ele === 20 ;
// })



// console.log(result)



// const dataBase = [
//   {
//     userName : "nader" , 
//     image : "photo1"
//   },
//   {
//     userName : "houssem" , 
//     image : "photo2"
//   },
//   {
//     userName : "khouloud" , 
//     image : "photo3"
//   }
// ]


// const x = dataBase.find(function(person){
// return person.image === "photo3"
// })

// console.log(x) ; 