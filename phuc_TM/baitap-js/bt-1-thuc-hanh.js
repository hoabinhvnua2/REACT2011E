
let kgMinh = 52,
    heightMinh = 180;
let KGtoan = 53,
    heightToan = 170;
let bmiMinh = kgMinh / (heightMinh * heightMinh);
let bmiToan = KGtoan / (heightToan * heightToan);
if (bmiMinh > bmiToan) {
    console.log('bạn minh toàn')
} else {
    console.log('bạn toàn nặng hơn minh')
}

// Bài tập về nhà: 
// Tạo biến và tính diện tích or chu vi or cả hai hình vuông, chữ nhật, hình tròn, tam giác. và hiển thị
// dienj tích ra màn hình console.
//bt1: Tính diện tích tính hình vuông
function sVuong(a) {
    let s = a * a;
    return s;
}
console.log(`Diện tích hình vuông là : ${sVuong(5)}`);
//bt2: Tính diện tích tính hình chữ nhật
function sChuNhat(a, b) {
    let s = a * b
    return s
}
console.log(`Diện tích hình chữ nhật là : ${sChuNhat(5, 2)}`);
//bt3: Tính diện tích tính hình tròn
function sTron(r) {
    let pi = Math.PI;
    let s = Math.pow(r, 2) * pi;
    return s;
}
console.log(`Diện tích hình tròn là : ${sTron(2)}`);
//bt3: Tính diện tích tính hình tam giác
function sTamGiac(a, h) {
    let s = ((1 / 2) * a) * h;
    return s
}
console.log(`Diện tích hình tam giác là : ${sTamGiac(5, 4)}`);

console.log(`----------------Bài Tập Buổi 3 ngày 19 tháng 1 năm 2021-----------------------`);

// - Bài tập:
// Cho một mảng giá trị như sau [1, 2, 3, 4, 5]:
//     a, tính tổng giá trị của mảng bằng 2 cách
//     b, in ra sô nhỏ nhất của mảng
//     c, in ra số lớn nhất của mảng
//     d, sắp xếp lại mảng
//     e, in ra các số chẵn
//     f, in ra cá số lẻ
//     g, in ra mảng mới có giá trị gấp 2 mảng hiện tại

let myArray = [3, 1, 5, 4, 8];

//Câu A: Tính tổng gái trị của mảng bằng 2 cách:
//-Cách 1:Tính tổng dùng vòng lập
let mySumFor = 0;
for (let i = 0; i < myArray.length; i++) {
    mySumFor += myArray[i];
}
console.log(`Cách dùng vòng lập tính tổng ${mySumFor}`);
//-Cách 2:tính tổng dùng reduce
let reducArray = myArray.reduce(function (innitValue, currentValue) {
    return innitValue + currentValue;
}, 0);
console.log(`Cách dùng reduce tính tổng : ${reducArray}`);
// Câu B: In ra giá trị nhỏ nhất của mảng
//Cách shortTime            
let minValue = myArray.sort(function (a, b) { return a - b })[0];
console.log(`giá trị nhỏ nhất là ${minValue}`);
// Câu C: In ra giá trị lớn nhất của mảng
let maxValue = myArray[myArray.length - 1];
console.log(`giá trị lớn nhất là ${maxValue}`);
// Câu E: In ra danh sách số chẵn
let evenNumber = [];
let oddNumber = [];
for (let i = 0; i < myArray.length; i++) {
    if ((myArray[i] % 2) == 0) {
        evenNumber.push(myArray[i]);
    } else {
        oddNumber.push(myArray[i]);
    }
}
console.log(`Danh Sách Số Chẵn là : ${evenNumber}`);
// Câu F: In ra danh sách số lẻ
console.log(`Danh Sách Số Lẽ là : ${oddNumber}`);
// Câu G:In ra mảng mới có giá trị gấp 2 mảng hiện tại    
let sumNewArray = myArray.map(function (number, index) {
    return number += number;
});
console.log(`giá trị mảng mới là ${sumNewArray}`);

//Cách nhức cái đầu
let temp;
for (let i = 1; i < myArray.length; i++) {
    temp = myArray[i];
    let j = i;
    while ((j > 0) && (myArray[j - 1] > temp)) {
        myArray[j] = myArray[j - 1];
        j = j - 1;
    }
    myArray[j] = temp;
};
console.log(`Cách dùng 2 vòng lập i-j sấp xếp lại mảng ${myArray}`);
console.log(`vậy giá trị nhỏ nhất của mảng là ${myArray[0]}`);
console.log(`vậy giá trị lớn nhất của mảng là ${myArray[myArray.length - 1]}`);
console.log(`=======End===========`)

console.log("----Bài Tập Tiếp Theo---");
console.log("hàm sort theo cách 2 vòng lập")
let testArray = [1, 5, 5, 8, 2, 6];
for (let i = 0; i < testArray.length; i++) {
    for (let j = i + 1; j < testArray.length; j++) {
        if (testArray[i] > testArray[j]) {
            let temp = testArray[j];
            testArray[j] = testArray[i];
            testArray[i] = temp;
        }
    }
};
console.log(testArray);


