// console.log("start")
// const data= new Promise((resolve,reject)=>{
//     const a=200000000000000;
//     if(a%2===0){
// resolve("done")
//     }
//     else{
//         reject("not done")
//     }
// })
// console.log("midd")
// data.then((message)=>console.log(message))
// .catch((error)=>console.log(error))
// console.log("end")

// console.log("start")
// setTimeout(()=>{ // this is asyncronous
//     console.log("uffsss")
// },3000)
// console.log("end")

console.log("start")
async function getdata(){
    try{
        let response =await fetch("https://catfact.ninja/fact");
    let jsonnn= await response.json()
    console.log(jsonnn.fact)
    console.log(jsonnn.length)
    }
    catch(error){
        console.log(error)
    }
}
getdata()
console.log("end")