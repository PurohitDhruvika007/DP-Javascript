// one
// arr1=[1,2,3];
// arr2=[4,5,6,7];
// console.log(arr1,arr2)
// console.log(...arr1,...arr2);

// two 
// const multiply=(...nums)=>{
//     return nums.reduce((privious,num)=>privious*num);
// }

// console.log(multiply(3,4,5,2))

// three 
// const array=[1,2,3,4,5,6,7,8];
// const [first,second,...rest]=array;
// console.log(first);
// console.log(second);
// console.log(...rest);

// four 
// let original=[1,2,3,4]
// let [...copy]=original;
// original.push(7)
// copy.push(5);
// console.log(original);
// console.log(copy);

// const obj1={a:1};
// const obj2={b:2};
// const main={...obj1,...obj2};
// console.log(main)

// one 
// const square=num=>num * num;
// console.log(square(5))

// two 
// console.log(`my name is john and i am 25 years old`)

// three 
// const object={
//     country:"india",
//     state:"gujarat",
//     city:"surat",
//     area:"vesu"
// }

// const {country,city}=object

// console.log(country);
// console.log(city);

// four 
// const one=[1,2];
// const two=[3,4];

// console.log(...one,...two);

// five 
// const product=(...nums)=>{
//     return nums.reduce((prev,curr)=>
//      prev*curr
//     )}
// ;
// console.log(product(1,2,3,4,5,6))
// console.log(product(1,2,3))

// seven
// const alex="Alex";
// const greet=alex=>{
//     return "hello "+ alex;
// } 
// console.log(greet(alex))

// eight 
// array=[5,50,46,25,34,65,25,62];
// const max_value=(nums)=>{
//    return Math.max(...nums)
    
// }

// console.log(max_value(array));

// nine 
// let a=[1,2,3];
// let b=[4,5,6];
// let c=[...a];
// a=[...b];
// b=[...c];

// console.log("after swapping=");
// console.log("a= ",a);
// console.log("b= ",b);


// ten 
// const fetchData=(url)=>{
//     return `fething data from ${url}`;
// }

// url='https://jsonplaceholder.typicode.com/todos';

// console.log(fetchData(url));