const a={
    name:"binita",
    surename:"rijal",
    age:20,
    classs:14,
    course:{
        sub1:"dbms",
        sub2:"Os",
        sub3:"Oop",
    }
}
a.greeting=function(){
    //console.log("hi cutiee!!!");

}
a.hello=function(){
    //console.log(this.classs);
}
a.greeting();
a.hello();
 //console.log(a);
 //console.log(a["name"]);
 //console.log(a.age);

 a.age=21;
//  console.log(a["age"]);
//  console.log(a.course.sub1)
//  console.log(a.course)

const b={
    launa:"haina k bho??",
    age:45,

    func:()=>{
console.log("mata dhaley dhaley")
    }
}
for(let i in b){
console.log(b[i])
}


b.func();