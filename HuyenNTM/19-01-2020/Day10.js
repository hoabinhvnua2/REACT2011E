console.log('tính tổng bằng cách thứ 1: dùng hàm reduce');
let arr = [1, 4, 2, 3, 5];
let sum = arr.reduce((tong, item) => tong + item);
console.log(sum);
console.log('tính tổng bằng cách thứ 2: sử dụng vòng lặp');
let sum2 = 0; 
for (let index = 0; index < arr.length; index++) {
  sum2 += arr[index];
}
console.log(sum2);
console.log('số nhỏ nhất mảng là', Math.min.apply(Math, arr));
// let min = arr[0];
// for (let index = 0; index < arr.length; index++) {
//   if (min > arr[index]) {
//     min = arr[index];
//   }
// }
//console.log(min);
console.log('số lớn nhất mảng là', Math.max.apply(Math, arr));
// let max = arr[0];
// for (let index = 0; index < arr.length; index++) {
//   if (max < arr[index]) {
//     max = arr[index];
//   }
// }
// console.log(max);
console.log('mảng sau khi được sắp xếp tăng dần:');
console.log(arr.sort());
console.log('mảng sau khi được sắp xếp giảm dần:');
console.log(arr.reverse());
console.log('mảng các số lẻ là');
let filtered = arr.filter(soLe => soLe%2 === 1);
console.log(filtered);
console.log('mảng các số chẵn là');
let filtered1 = arr.filter(soChan => soChan%2 === 0);
console.log(filtered1);
console.log('mảng mới bằng 2 lần giá trị của mảng hiện tại');
let arr2 = [];
arr.forEach((item) => {
  let a = item * 2;
  arr2.push(a);
})
console.log(arr2);