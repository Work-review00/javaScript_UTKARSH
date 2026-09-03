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






function greet(name){
    return "hello "+name;
};
console.log(greet("utkarsh"));
