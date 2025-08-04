//1
let length = prompt("Введи довжину масиву");
let arr = [];

for (let i = 0; i < length; i++) {
  arr.push(prompt("Введи елемент №" + (i + 1)));
}
console.log("Початковий масив:", arr);

arr.sort((a, b) => a - b);
console.log("Відсортований масив:", arr);

arr.splice(1, 3); 
console.log("Після видалення з 2 по 4 елемент:", arr);

//2
let arr2 = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let count = 0;
let sum = 0;
for(let i = 0; i < arr2.length; i++){
    if(arr2[i]>0){
        sum += arr2[i];
        count++;
    }
}
console.log(sum);
console.log(count);
 
let min = arr2[0], minIndex = 0;
for(i = 1; i < arr2.length; i++){
    if(arr2[i] < min){
       min = arr2[i];
       minIndex = i; 
    }
}
console.log("Мінімільний елемент:", min, "Індекс:", minIndex);
let max = arr2[0], maxIndex = 0;
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > max) {
    max = arr2[i];
    maxIndex = i;
  }
}
console.log("Максимальний елемент:", max, "Індекс:", maxIndex);


let countNeg = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] < 0){
    countNeg++;
  } 
}
console.log("Кількість від’ємних:", countNeg);


let countOddPos = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 0 && arr2[i] % 2 !== 0){
    countOddPos++;
  } 
}
console.log("Непарних додатних:", countOddPos);

 
let countEvenPos = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 0 && arr2[i] % 2 === 0){
    countEvenPos++;
  } 
}
console.log("Парних додатних:", countEvenPos);

let sumEvenPos = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 0 && arr2[i] % 2 === 0){
    sumEvenPos += arr2[i];
  } 
}
console.log("Сума парних додатних:", sumEvenPos);

let sumOddPos = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 0 && arr2[i] % 2 !== 0){
    sumOddPos += arr2[i];
  } 
}
console.log("Сума непарних додатних:", sumOddPos);

let prodPos = 1;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 0){
    prodPos *= arr2[i];
  } 
}
console.log("Добуток додатних:", prodPos);

for (let i = 0; i < arr2.length; i++) {
  if (i !== maxIndex){
    arr2[i] = 0;
  } 
}
console.log("Масив після занулення:", arr2);

//3

let users = [
  {
    index:0,
    isActive:true,
    balance:2226.60,
    name:"Eugenia Sawyer",
    gender:"female",
    phone:"+1 (840) 583-3207",
    address:"949 John Street, Rose, Puerto Rico, 1857"
  },
  {
    index:1,
    isActive:true,
    balance:2613.77,
    name:"Pauline Gallegos",
    gender:"female",
    phone:"+1 (985) 593-3328",
    address:"328 Greenpoint Avenue, Torboy, North Dakota, 6857"
  },
  {
    index:2,
    isActive:false,
    balance:3976.41,
    name:"Middleton Chaney",
    gender:"male",
    phone:"+1 (995) 591-2478",
    address:"807 Fleet Walk, Brutus, Arkansas, 9783"
  },
  {
    index:3,
    isActive:true,
    balance:1934.58,
    name:"Burns Poole",
    gender:"male",
    phone:"+1 (885) 559-3422",
    address:"730 Seba Avenue, Osage, Alabama, 6290"
  },
  {
    index:4,
    isActive:true,
    balance:3261.65,
    name:"Mcfadden Horne",
    gender:"male",
    phone:"+1 (942) 565-3988",
    address:"120 Scholes Street, Kirk, Michigan, 1018"
  },
  {
    index:5,
    isActive:false,
    balance:1790.56,
    name:"Suzette Lewis",
    gender:"female",
    phone:"+1 (837) 586-3283",
    address:"314 Dunne Place, Bawcomville, Guam, 9053"
  }
];

let phones = [];
let total = 0;

for (let i = 0; i < users.length; i++) {
  total += users[i].balance;
  if (users[i].balance > 2000) {
    phones.push(users[i].phone);
  }
}

console.log("Телефони з балансом > 2000:", phones);
console.log("Сума всіх балансів:", total.toFixed(2));
