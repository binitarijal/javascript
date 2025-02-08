for(let i=0;i<10;i++){
//console.log(i);
};

const nice={
    name:"hiii",
    age:19,
    rollnum:1,
}
const arr=[1,3,4,6,8];
for(const i of arr){
    //console.log(i);
}

const greeting="Hello world!!"
for(const greet of greeting){
    //console.log(greet)
}

//maps

const map =new Map();
map.set("bini","rijal");
map.set("ghini","jkijal");
map.set("gini","kijal");
map.set("tini","hijal");
map.set("lini","lijal");

console.log(map);

for(const [key,value] of map){
    console.log(key,"->",value)
}