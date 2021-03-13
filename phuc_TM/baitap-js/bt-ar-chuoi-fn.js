
// let a = ["xin chao","helo","cac ban","react"];

// let b = a.find(function(item,index){
//     return item == "cac ban";
// });
// let c = a.filter(function(value,index){
//     return value == "xin chao" || value == "helo";
// });
// console.log(c);
// console.log(b);
// myFn();
// function myFn(){
//    console.log("fn1 dang goi");
// }


// function compare(a,b){

//    if(a<b){
//       return -1;
//    }else{
//       return 1;
//    }
//    return 0;
// }


Array.prototype.Map2 = function (calbacks) {
   let ar = [];
   for (let i = 0; i < this.length; i++) {
      let item = calbacks(this[i]);
      ar.push(item);
   }
   return ar;
}
let a = [1, 2, 36];
let strArr = ["helo", "tran", "Minh", "phuc"];
let newStr = strArr.reduce(function (preStr, currentStr) {
   return preStr + " " + currentStr;
}, "");
console.log(newStr);
let b = a.reduce(function (preN, currentN) {
   return preN + currentN;
}, 5);

let coures = [{
   id: 1,
   myName: "JS",
   price: 20
},
{
   id: 2,
   myName: "C#",
   price: 10
},
{
   id: 3,
   myName: "C++",
   price: 25
},
{
   id: 4,
   myName: "React",
   price: 15
},
];

Array.prototype.reduce2 = function(callbacks,innitValue){
   let value = innitValue;
   for(let i =0; i < this.length;i++){
      if(Array.isArray(value)){
         value = callbacks(innitValue,this[i]);
      }else{
         value += callbacks(innitValue,this[i]);
      }      
   };
   return value;
};
let nOjb = coures.reduce(function(previousValue,currentValue,index){
   previousValue.push(currentValue.myName)
   return  previousValue;
},[]);
console.log("------");
console.log(nOjb);

let nojb2= coures.reduce2(function(previousValue,currentValue){ //callbacks là fn không tên
   previousValue.push(currentValue.myName)
   return  previousValue;
},[]);
console.log("------");
console.log(nojb2);


let cb = function (pr,cr){    //calbacks là fn có tên được gán vào biến
   let total = pr + cr.price;
   return total;
};

let nojb3= coures.reduce2(cb,0);
console.log("------");
console.log(nojb3);
console.log("------");



let nbAr = [2,36,52,1,6,3];
let newbAr = nbAr.sort(comPare); 
console.log(newbAr);
function comPare(a,b){  //calbacks là fn có tên không gán vào biến
   if(a < b){
      return  -1;
   }else{
      return 1;
   }
   return 0;
};

