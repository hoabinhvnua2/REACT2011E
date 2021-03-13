// console.log(1);

// function getNumberTimeOut(){
//     setTimeout(function(){
//        return  console.log(2);
//     },0);
//     console.log(3);
// }

// getNumberTimeOut();
// console.log(4);

// let callbacks = function(res){

//     res(1);

// }
// let getApi = new Promise(callbacks);
// getApi.then(function(value){

// })

let arrObj = [{
    myName : "phuc",
    id : 1,
    score : "react"
},{
    myName : "samg",
    id : 2,
    score : "angular"
},{
    myName : "minh",
    id : 3,
    score : "nodejs"
}]
async function getApi(){   
    // let getUser =  fetch("https://603c5ee4f4333a0017b67791.mockapi.io/task-api")//.then(v => v.json());
    // let getId =  fetch("https://603c5ee4f4333a0017b67791.mockapi.io/call-api")//.then(v => v.json());
    // let arr = await Promise.all([getUser,getId]).then(function(v1,v2){
        
    
    
    // console.log(arr)
    
};
getApi();
function test(arobj){
    let newArr = arrObj.map(function(value,index){
        return {
            ten : value.myName,
            id : value.id,
            monHoc : value.score
        }
    });
    return newArr
}
console.log(test(arrObj)) 
