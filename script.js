/* function getGrade(score){
    if(score>=90 && score<=100){
        return "A+";}
    else if(score>=80 && score<=89){
        return "A";
    }
    else if(score>=70 && score<=79){
        return "B";
    }
    else if(score>=60 && score<=69){
        return "C";
    }
    else if(score>=50 && score<=59){
        return "D";
    }
    else{
        return "F"
    }
}

console.log(getGrade(89));
*/

/*
function game(user,computer){
    if(user == "rock" && computer == "paper"){
        return "computer win";
    }
    else if(user == "rock" && computer == "scissor"){
        return "user wins";
    }
    else if(user == "rock" && computer == "rock"){
        return "nobody wins";
    }
    else if(user == "paper" && computer == "scissor"){
        return "computer wins";
    }
    else if(user == "paper" && computer == "rock"){
        return "user wins";
    }
    else if(user == "paper" && computer == "paper"){
        return "nobody wins";
    }
    else if(user == "scissor" && computer == "paper"){
        return "user win";
    }
    else if(user == "scissor" && computer == "rock"){
        return "computer win";
    }
    else if(user == "scissor" && computer == "scissor"){
        return "nobody win";
    }
    else{
        return "invalid input"
    }
}

console.log(game("paper","rock"));*/


/*


for(let i=1;i<=10;i++){
    
    if(i===6){
        continue;
    }
    console.log(i);
}*/



//question

/*const check = (a) => {
    if(a%2===0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
};

check(8); */



/*let greater = (a,b) =>
{
    if(a>b){
        console.log("a is greater than b");
    }
    else{
        console.log("b is greater than a");
    }
}

greater(5545,988);
*/


/*function abcd(...val){
    console.log(val);
}
 abcd();*/



/* function checkAge(age){
    if(age<18) return "Too young";
    return "Allowed";
 }
 console.log(checkAge(14));*/


/*
 function abcd(val){
    val();
 }
 abcd (function(){
    console.log("hey");
 }); 
 */


/*

 function abcd(val){
    val();
 }

 abcd(function(){
    console.log("hey");
 });*/


/*


 function outer(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    };
 }
const counter =outer();

counter();
counter();
counter();
counter();
counter();
counter();

*/








/*


greet();

function greet(){
    console.log("hi");
};

*/



/*function bmi(weight,height){
    return bmi=weight/(height*height);
}

console.log(bmi(70,1.7).toFixed(2));*/




/*

function discountCalculator(discount){
    return function(price){
        return price- price*(discount/100);

    };

}
let ten =discountCalculator(10);
let twenty= discountCalculator(20);

console.log(ten(100));
console.log(twenty(200));*/




/*

function greet(name){
    return "hello "+name;
};
console.log(greet("utkarsh"));

*/

/*
function add(a,b){
    return a+b;
}
console.log(add(10,20));


// Q3  Ek function square(n) banao jo number ka square return kare.

function square(num){
    return num*num;
}

console.log(square(20));



//Q4  Ek function isEven(n) banao jo true return kare agar number even hai, otherwise false.



function iseven(num){
    if(num%2===0){
        return "num is even";
    }
    else{
        return "num is odd";
    }
}


console.log(iseven(45));

//Q5  Ek function max(a, b) banao jo dono mein se greater number return kare.
   
function greateris(a,b){
    if(a>b){
        return "a is greater than b";
    }
    else {
        return "b is greater than a";
    }
}

console.log(greateris(25,85));

//Q6  Function banao jo kisi number ka cube return kare.



function cube(a,b){
    return a**b;

}

console.log(cube(4,3));



//Q7 Function banao jo 3 numbers ka average return kare.


function average(a,b,c){
    return (a+b+c)/3;
}

console.log(average(40,50,60));

//Q8 Function banao jo age receive kare:


function age(num){
    if(num>=18){
        console.log("allowed");
    }
    else{
        console.log("not allowed");
    }
}

age(85);


//Q9  function banao jo number check kare: positive → "Positive", negative → "Negative",  zero → "Zero"

function check(num){
    if(num>0){
        console.log("number is postive");
    }
    else if(num<0){
        console.log("num is negative");
    }
    else if(num ===0){
        console.log("num is zero")
    }
}

check(54);

//Q 10 Function banao jo kisi number ka factorial calculate kare.

function calculatefactorial(n){
    if(n<0){
        return "for negative number there is nothing define for factorial";
    }


    let result=1;
    for(let i=1;i<=n;i++){
         result= result*i;
    }
    return result;
}



 
console.log(calculatefactorial(5));



*/



// array


/*
arr=["banana","apple","mango"];
arr.push("mango");
arr.unshift("pinapple");
arr.splice(2,1);
arr.push("kiwi");
arr.splice(2,1,"orange");




let item=[1,2,3,4,5,6,7,8,9];
item.splice(4,3);
let newitem=item.slice(1,6);
console.log(newitem);







let names=["utkarsh","harsh","atul","shaurya","addi bhaiya","bhaiya ji"];

names.sort();
*/

/*
let arr=[1,2,3,4];
let newarr=arr.map(function(val){
    return val*val;
});



let num=[19,25,76,6,3,74,98,92];
let newnum=num.filter(function(val){
    return val>10;
});



let hello=[10,12,34,54,65];
let newhello=hello.reduce(function(acc,val){
    return acc+val;
},0);




let arrr=[12,10,25,363,5,9,128];
let newarrr=arrr.find(function(val){
    return val<10;
});

let atul=[12,10,25,363,5,9,128];
let newatul=atul.some(function(val){
    return val<35;
});


let shaurya=[12,26,16,14,29,18,28,36];

let newshaurya=shaurya.every(function(val){
    return val%2===0;
});
  

*/




/*
//05,sep, 2026

//methods of array:


//push()->end mein value add karta hai


 let fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);


// pop()->end se value remove karta hai


let fruits = ["Apple", "Mango", "Banana"];

fruits.pop();

console.log(fruits);



//unshift()->beginning mein add karta hai

let fruits = ["Mango", "Banana"];

fruits.unshift("Apple");

console.log(fruits);


//shift() — beginning se remove karta hai

let fruits = ["Apple", "Mango", "Banana"];

fruits.shift();

console.log(fruits);


//includes() — check karta hai value present hai ya nahi

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.includes("Mango"));

//indexOf() — value ka index batata hai

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.indexOf("Mango"));

//slice() — array ka ek part copy karta hai

let numbers = [10, 20, 30, 40, 50];

let result = numbers.slice(1, 4);

console.log(result);

//splice() — add/remove/change kar sakta hai

let fruits = ["Apple", "Mango", "Banana"];

fruits.splice(1, 1);

console.log(fruits);

//join() — array ko string mein convert karta hai

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.join(", ")); 

*/


//question for arrays 


//  Q1  Loop use karke saare numbers print karo.
/*
let numbers = [10, 20, 30, 40, 50];

 for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
 }
*/

/*
 // q2 Loop use karke sirf even numbers print karo.

 let numbers = [10, 20, 30, 40, 50];
 for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        console.log(numbers[i]);
    }
    
 }
    */


//q3 Find the sum of all numbers in this array:
/*

let numbers = [10, 20, 30, 40, 50];
let sum=0;
for(let i=0;i<numbersnext .length;i++){
sum=sum+numbers[i];
}
console.log(sum);

*/
//q4 Find the largest number

/*
let numbers = [10, 25, 7, 40, 15];

let largest=numbers[0];
for(let i=0;i<numbers.length;i++){
    if(largest<numbers[i]){
        largest=numbers[i];
    }
}
console.log(largest);
*/



//objects
/*
let obj={
    name:"utkarsh",
    age:18,
    address:"India",
};

let aa="name";
 
*/

/*
let student={
    name:"utkarsh",
    age:22,

    address:{
        city:"varaansi",
        state:"uttar pradesh",
    }
};
console.log(student.address.state);

*/

 /*
let person ={
    name:"utkarsh",
    age:22
};
let {name,age}=person;
console.log(name);
console.log(age);
*/


//creat an object for a student with name, age, and isEnroleed.
/*
let obj ={
    name:"harsh",
    age:22,
    isEnrolled:true,
};*/

//can an object key be a number or boolean? try this


/*
const obj={
    true:"yes",
    42:"answer",

};
console.log(obj[true]);
*/
//Change Property
/*
let person = {
    name: "Utkarsh",
    age: 22
};

person.age = 23;

console.log(person);*/

//Add New Property
/*
let person = {
    name: "Utkarsh",
    age: 22
};

person.city = "Jamshedpur";

console.log(person); 
*/

//Delete Property

/*let person = {
    name: "Utkarsh",
    age: 22,
    city: "Jamshedpur"
};

delete person.age;

console.log(person);
*/
//Pass or Fail

/*
let student ={
    name:"utkarsh",
    marks:75
};

if(student.marks>=40){
    console.log("pass");
}
else{
    console.log("fail");
}
    */


//adult or minor
/*
let person = {
    name: "Utkarsh",
    age: 22
};

if (person.age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
    */
   //access nested property
/*let student = {
    name: "Utkarsh",
    address: {
        city: "Jamshedpur",
        state: "Jharkhand"
    }
};

console.log(student.address.state);
*/