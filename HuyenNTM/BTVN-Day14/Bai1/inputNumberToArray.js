let arr = [];
let sum = 0;
let b = 0;
while (b == parseInt(b)) { //kiểm tra xem giá trị nhập vào có phải là số k,nếu k là số hoặc là ký tự kết thúc thì dừng nhập
    arr.push(b);
    sum += Number(b);
    b = prompt("nhập giá trị", "");
}
console.log(sum);
arr.shift(); //xóa bỏ số 0 là giá trị khởi tạo của biến b
console.log(arr);