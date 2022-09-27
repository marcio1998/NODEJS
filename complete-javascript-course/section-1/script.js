let js = 'amazing';
// if (js == 'amazing') alert('JavaScript IS FUN');
console.log(40 + 8 + 23 - 10);
console.log('Marcio');
console.log(24);

let firstName = 'Lavinia';
console.log(firstName);

let PI = 3.14;

let myFirstJob = 'Programmer';
let myCurrentJob = 'BI';

console.log(myFirstJob);


// ===== DATA TYPES =====

let javaScriptIsfun = true;
console.log(javaScriptIsfun);
console.log(typeof(javaScriptIsfun));
console.log(typeof(23));
console.log(typeof('Márcio'));
javaScriptIsfun = 'YES!';
console.log(typeof(javaScriptIsfun));
let year;
console.log(typeof(year));
year = 1998;
console.log(typeof(year));
console.log(typeof null);


// ===== DECLARE VARIABLES =====
let age = 24;
age = 25;

const birthYear = 1998;
//birthYear = 2000;
//const can't change.

//const job;
//const need inicialization


// ===== OPERATORS ======

//Mathematical Operators
let now = 2030;
const ageMarcio = now - 1998;
const ageLavinia = now - 1993;
console.log(ageMarcio, ageLavinia);

console.log(ageMarcio/2, ageLavinia*2, 2 **3)

const lastName = 'Mangali';
console.log(firstName+' '+lastName);

//Assigmente Operators
let x = 10 + 5;
x += 10;
x-=5;
x++;
x--;
console.log(x);

//Comparsion Operators
console.log(ageMarcio > ageLavinia);
console.log(ageMarcio >= 10);
const isFullAge = ageMarcio >= 18;
console.log(isFullAge);

// ===== Precedence Operators =======
console.log(now - 1991 > now - 2018);
console.log(25-10-5);

let y,z;
y = z = 25-10-5;
console.log(y,z);

// ============= Coding Challenge 1 ==================
const johnHeight = 1.95;
const johnWeight = 92;
const markHeight = 1.69;
const markWeight = 78;

const johnBmi = johnWeight / (johnHeight ** 2);
const markBmi = markWeight / (markHeight ** 2);

const markHeigherBMI = markBmi > johnBmi;
console.log('Mark is Heigher BMI? ' + markHeigherBMI);


// ==================== Strings =============================
year = 2022;
const lavinia = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old' + 
myFirstJob + '!';
console.log(lavinia);

const marcio = `I'm Marcio, a ${year - birthYear} years old ${myCurrentJob} !!`; 
console.log(marcio);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
Multiple
Line`);

// ============ Decisions Statements ===================
age = 24;
const isOldEnough = age >= 18;

if(isOldEnough){
    console.log(`You Can Start The Driving License !!`)
}else{
    console.log("you can't start The Driving License")
}


// ============ Coding Challenge 2 ========================
if(markHeigherBMI){
    console.log(`Mark BMI is Higher Than John
    Mark BMI is: ${markBmi.toFixed(2)} And John BMI is: ${johnBmi.toFixed(2)}`)
}else{
    console.log(`John BMI is Higher Than Mark
    John BMI is: ${johnBmi.toFixed(2)} And Mark BMI is: ${markBmi.toFixed(2)}`)
}


// Type Conversion and Coercion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

//Coercion
console.log('I am ' + 23 + ' Years Old');
console.log('23' - '10' - 3);
console.log('23'/'2');


