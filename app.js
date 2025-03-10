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

// console.log(accounts);

////// import elements :
const movementContainer = document.querySelector(".left");
const balanceAmount = document.querySelector(".amount");
const inComes = document.querySelector(".mov-average-in");
const outMoney = document.querySelector(".mov-average-out");
const intrest = document.querySelector(".mov-average-interest");
const btnLogin = document.querySelector(".auth-btn");
const userNameInput = document.querySelector(".userName");
const pinInput = document.querySelector(".pin");
const welcomeMessage = document.querySelector(".welcome");
const app = document.querySelector("main");

///////// transfert elements ::
const transfertButton = document.querySelector(".transfert-button");
const transfertUser = document.querySelector(".transfert-user");
const amountTransfert = document.querySelector(".amount-transfert-input");

//////// close elements :
const closeUser = document.querySelector(".close-user");
const closePin = document.querySelector(".close-pin");
const closeButton = document.querySelector(".btn-close");

////// loan elements :
const loanInput = document.querySelector(".loan-input");
const btnLoan = document.querySelector(".loan-btn");

///// sort element :

const sortBtn = document.querySelector(".sort");

///// display movement ::
const displayMovements = function (acc , sort=false) {
  movementContainer.innerHTML = "";
  const movs = sort ? acc.movements.slice().sort((a,b)=> a - b) : acc.movements ; 
     movs.forEach((mov, i) => {
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

// displayMovements(account2.movements);

////////////// display balance :

const displayBalance = function (account) {
  const balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  balanceAmount.textContent = `${balance}€`;
  account.credit = balance;
};

// displayBalance(account2.movements);

///////// display summary ///// :

const calcDisplaySummary = function (account) {
  const inc = account.movements
    .filter((ele) => ele > 0)
    .reduce((acc, ele) => ele + acc, 0);
  inComes.textContent = `${inc} €`; //// display ui (user interface)

  const outc = account.movements
    .filter((ele) => ele < 0)
    .reduce((acc, ele) => acc + ele, 0);
  outMoney.textContent = `${Math.abs(outc)} €`;

  const interstc = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => {
      return (deposit * 1.5) / 100;
    })
    .filter((ele) => ele > 1)
    .reduce((acc, ele) => acc + ele, 0);
  intrest.textContent = `${interstc} € `; ///// update lel ui ;
};

// calcDisplaySummary(account2.movements) ;

//////// userName key functionnality ::: //////

const displayUserName = function (arr) {
  arr.forEach((person) => {
    person.userName = person.owner
      .toLowerCase()
      .split(" ")
      .map((ele) => ele[0]) //// ['jessica', 'davis']   //// [j,d]
      .join(""); //jd
  });
};

displayUserName(accounts);

function updateUi(current) {
  displayMovements(current);
  displayBalance(current);
  calcDisplaySummary(current);
}

////// display login :: /////////////////////
let currentAccount; //// object   //// account1
btnLogin.addEventListener("click", function () {
  currentAccount = accounts.find((ele) => {
    return ele.userName === userNameInput.value; //ss
  });
  console.log("current :", currentAccount);

  if (currentAccount?.pin === Number(pinInput.value)) {
    welcomeMessage.textContent = `welcome back ${
      currentAccount.owner.split(" ")[0]
    }`; //// sarah smith ==> [sarah,smith] ===> sarah
    app.style.opacity = 1;
    updateUi(currentAccount);
    userNameInput.value = pinInput.value = "";
  }
});

////// transfert functionnality ::::

//// conditions :
/// balance > amount && reciever should be true && reciever should be different of current user
/// amount should be different of 0
transfertButton.addEventListener("click", function (event) {
  event.preventDefault();
  const reciever = accounts.find((acc) => acc.userName === transfertUser.value);
  const amount = Number(amountTransfert.value);
  const balance = currentAccount.credit; /// solde mte3 eli connecti

  if (
    balance > amount &&
    reciever &&
    reciever.userName !== currentAccount.userName &&
    amount > 0
  ) {
    currentAccount.movements.push(-amount);
    reciever.movements.push(amount);
    updateUi(currentAccount);
    amountTransfert.value = transfertUser.value = "";
  }
});

/////// close functionnality :::

closeButton.addEventListener("click", function (event) {
  event.preventDefault(); ///// na7it el par default mte3ha (eli hiya kent taaml reload lel page)
  const accountToClose = closeUser.value; /// ms
  const accountPinToClose = Number(closePin.value);

  if (
    currentAccount.userName === accountToClose &&
    currentAccount.pin === accountPinToClose
  ) {
    const index = accounts.findIndex((acc) => acc.userName === accountToClose); //// ==> 0
    accounts.splice(index, 1);
    app.style.opacity = 0;
    welcomeMessage.textContent = "Log in to get started";
  }
});

////// loan functionnality ::

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(loanInput.value);

  if (amount > 0 && currentAccount.movements.some((ele) => ele / 10 > amount)) {
    currentAccount.movements.push(amount);
    updateUi(currentAccount);
    loanInput.value = "";
  }
});

//// sort  functionnality  :::
let sorted = false ; 

sortBtn.addEventListener("click", function () {

displayMovements(currentAccount , !sorted)  
sorted = !sorted
});

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

////////////////

/// indexOf()
// const arr = [1,23,4] ;

// const index = arr.indexOf(23) ;
// console.log(index)

///// findindex()

// const arr = [1, 23, 4, 23];

// const index = arr.findIndex((ele) => ele === 23);
// console.log(index);

//////////  includes  (boolean true or false) :::

const numbres = [10, 22, 50, 100, 150];

// console.log(numbres.includes(110))

///// some and every (bollean true or false)::::

//// some ::

// const result = numbres.some((ele)=> ele > 80)  //// fama number akber me 80 !!!
// console.log(result)

///// every :::

// const x = numbres.every(function(ele){
//   return ele > 2
// })

// console.log(x)

///// function declaration ::

// function multiplybyten (num){
//   return num*10 ;
// }

// console.log(multiplybyten(100))

//// function expression ::
// const multiplybyten = function (num){
//   return num*10 ;
// }

// console.log(multiplybyten (5))

///// arrow function :: ====================>>>>>>>>>>>>>>

// const multiplybyten = (num)=>{return  num * 10 }

// console.log(multiplybyten(20))

///// sort ::

// const names = ["khouloud", "nader", "maha", "jalila", "houssem","hamadi"];



// names.sort() ; 
// console.log("after :" , names)

// const numbers = [10,50,30,100,0]

// numbers.sort((a,b)=> b - a)

// console.log(numbers)

