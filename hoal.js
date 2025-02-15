const arr=[1,2,3,4,4]
for(const i of arr){
   // console.log(i);
}

const greeting="Hello world"
for(const greet of greeting){
    if(greet===' '){ // if space comes it skips and continues printing
        continue;
    }
    //console.log(greet)
}

//maps

const map= new Map();
map.set("js","javascript");
map.set("p","python");

for(const [key,value] of map){
   // console.log(key);
}

//iteration in objects

const yoy={
    2004:true,
    2005:false,
    20061:"loll",
    haina:23.56
}
for(const i in yoy){
    //console.log(yoy[i]);
}

//iteration in array

const arrr=[3,5,7,8,9]
for(const i in arrr){
    //console.log(arrr[i]);
}


//more array loops // higher order function

const code=["js","p","c","cpp"]
code.forEach((a,index,arr)=>{
//console.log(a,index,arr);
});

//array of objects iteration
const b=[
    {age:19,
        name:"bini"
    },
    {age:29,
        name:"hijini"
    },
    {age:11,
        name:"lisa"
    }
]
b.forEach((item)=>{
    console.log(item.age)
    console.log(item.name)
})