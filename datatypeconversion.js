
//---------conversion-----

let score=33;
console.log(typeof score);

score="456";
console.log(typeof score);
let nummm=Number(score);
console.log(typeof nummm);
console.log(nummm)
let isbooll=true;
let boolll=Number(isbooll);
console.log(boolll);
console.log(typeof boolll);

//------operations

let str="hello";
let str2="k cha";
let str3=str+str2;
console.log(str3);

console.log(1+2+"3");
console.log("hhh"+12+2);

console.log(+true);
console.log(-false);
console.log(+"");
console.log(+false)

//----------comparison of data types-----
 //avoid these 
console.log(2 === "2");
console.log(true==1);
console.log("003">1);

console.log(0>null);
console.log(0<=null);

console.log(0>undefined);
console.log(0<=undefined);
console.log(0>"0");
console.log(0>=undefined);

//------data types summaryy------------

//primitive
//7 types : string,number,boolean,bigint,null,undefined,symbol

//refrence (non primitive)
//array, objects, functions
 let hero=["lol","loj","los"];
 let obj={
    name:"nbibi",
    age:12,
 }

 const myfunction=function(){
    console.log(1+5);
 }
console.log(myfunction)