/*
Bài 1: Viết hàm sumInput() rằng
Yêu cầu người dùng nhập các giá trị bằng cách sử dụng prompt và lưu trữ các giá trị trong mảng.
Kết thúc yêu cầu khi người dùng nhập một giá trị không phải số, một chuỗi trống hoặc nhấn “Hủy”.
Tính toán và trả về tổng của các phần tử mảng.
*/
alert("Hãy nhập vào các giá trị để tính!")
let arr_number = [];
let reducer = (accumulator, currentValue) => accumulator + currentValue;

function sumInput(){
    let value = parseInt(prompt("Nhập vào các gia trị cần tính: ") );
    if( value > 0 && value !== '' && typeof value == 'number'){
        arr_number.push(value);
        sumInput();
    }
    else{
        alert("Tổng của các giá trị bạn nhập là: " + arr_number.reduce(reducer))
        return false;
    }
}

sumInput();
document.write('Xuất ra mảng vừa nhập và kết qủa, dùng để test lại ');
document.write('<br> - Đây là mảng số vừa nhập: ', arr_number);
document.write('<br> - Đây là tổng của mảng: ',  arr_number.reduce(reducer));