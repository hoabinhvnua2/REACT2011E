// Tính tổng giá trị của mảng [1,2,3,4,5] cách 1:
var arr = [1, 2, 3, 4, 5];
let a = arr.length;
let tong = 0;
for (let i = 0; i <= a; i++) {
    tong += i;
}
console.log('tong cua mang arr tinh theo cach 1 la:\t', tong);

// tính tổng giá trị của mảng arr theo cách 2:

let sum = arr.reduce((tong, item) => tong + item, 0);
console.log('tong cua mang arr tinh theo cach 2 la:\t', sum);

// in ra số nhỏ nhất trong mảng.

let min = arr.reduce(function (a, b) {
    return Math.min(a, b);
});
console.log('giá trị MIN của mảng là:\t',min);

// in ra số lớn nhất trong mảng.
let max = arr.reduce(function(a, b){
    return Math.max(a, b);
});
console.log('giá trị MAX của mảng là:\t',max);

// sắp xếp lại mảng.
function compare(a, b) {
    if(a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }   
    else 
        return 0;
}

let sortArr = arr.reverse(compare);
console.log(sortArr);

// mảng chẵn.

// let mangChan = arr.map((item % 2 === 0) 

// console.log(mangChan);
   
// let arr2 = [];
//         arr.forEach((item) => {
//           if(item % 2 === 0 )
//           let add = item + "2";
//           arr2.push(add);
//         });
//     console.log(arr2);    

// var numbers = [1, 4, 9];
// var doubles = numbers.map(=>(num) {
//   return num * 2;
let arrEven = [];
for (var i = 1; i<= a; i++){
    if (i % 2 === 0)
    {
        arrEven.push(i);
    }
}
console.log(arrEven);

let arrOdd = [];
for (var i = 1; i<= a; i++){
    if (i % 2 !== 0)
    {
        arrOdd.push(i);
    }
}
console.log(arrOdd);

// in ra mảng mới có giá trị gấp 2 lần mảng hiện tại.

let double = arr.map(item => item * 2);
console.log('mảng gấp 2 lần mảng cũ: \t',double);