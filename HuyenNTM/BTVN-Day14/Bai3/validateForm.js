let firstName = document.getElementById('firstName');
let errFirstName;
function validateFirstName() {
    if (firstName.value === '') {
        errFirstName = 'Chưa nhập first name';
        firstName.focus();
        document.getElementById('errMessFirstName').innerHTML = errFirstName;
        return false;
    }
    else if ((firstName.value.length < 2 || firstName.value.length > 10)) {
        errFirstName = 'First name không nhỏ hơn 2 và không quá 30 ký tự';
        firstName.focus();
        document.getElementById('errMessFirstName').innerHTML = errFirstName;
        return false;
    }
    else {
        document.getElementById('errMessFirstName').innerHTML = '';
        return true;
    }
}

let lastName = document.getElementById('lastName');
let errLastName;
function validateLastName() {
    if (lastName.value === "") {
        errLastName = 'Chưa nhập last name';
        lastName.focus();
        document.getElementById('errMessLastName').innerHTML = errLastName;
        return false;
    }
    else if (lastName.value.length > 0 && (lastName.value.length < 2 || lastName.value.length > 10)) {
        errLastName = 'Last name không nhỏ hơn 2 và không quá 30 ký tự';
        lastName.focus();
        document.getElementById('errMessLastName').innerHTML = errLastName;
        return false;
    }
    else {
        document.getElementById('errMessLastName').innerHTML = '';
        return true;
    }
}
//     Phải có ký tự @
// Ký tự @ không nằm ở vị trí đầu
// Phải có ít nhất một dấu . trong địa chỉ mail
// Phải có ít nhất 1 ký tự giữa @ và dấu . cuối cùng
// Phải có ít nhất một ký tự sau dấu . cuối cùng
// Không có khoảng trắng trong địa chỉ mail
let email = document.getElementById('email');
let errEmail;
function validateEmail() {
    let stringEmail = email.value;
    let aPosition = stringEmail.indexOf('@');
    let dotPosition = stringEmail.lastIndexOf('.',0);
    let spacePosition = stringEmail.indexOf(' ');
    if (email.value === "") {
        errEmail = 'Chưa nhập email';
        email.focus();
        document.getElementById('errMessEmail').innerHTML = errEmail;
        return false;
    }
    else if (aPosition == 0 || aPosition == -1 || 
        dotPosition == -1 || dotPosition == aPosition + 1 || dotPosition == email.length - 1 ||
        spacePosition != -1) {
        errEmail = 'Email sai định dạng';
        email.focus();
        document.getElementById('errMessEmail').innerHTML = errEmail;
        return false;
    }
    else {
        document.getElementById('errMessEmail').innerHTML = '';
        return true;
    }
}

let pass = document.getElementById('pass');
let errPass;
function validatePass() {
    if (pass.value === "") {
        errPass = "Password không được để trống";
        pass.focus();
        document.getElementById('errMessPass').innerHTML = errPass;
        return false;
    }
    else if (pass.value.length < 6){
        errPass = "Password chứa ít nhất 6 ký tự";
        pass.focus();
        document.getElementById('errMessPass').innerHTML = errPass;
        return false;
    }
    else {
        document.getElementById('errMessPass').innerHTML = '';
        return true;
    }
}

let confirmPass = document.getElementById('confirmPass');
let errConfirmPass;
function validateConfirmPass(params) {
    if (confirmPass.value === '') {
        errConfirmPass = 'Confirm password phải giống với password';
        confirmPass.focus();
        document.getElementById('errMessConfirmPass').innerHTML = errConfirmPass;
        if (validatePass() == false) {
            document.getElementById('errMessConfirmPass').innerHTML = '';
        }
        return false;
    }
    else if (confirmPass.value != pass.value) {
        errConfirmPass = 'Confirm password phải giống với password';
        confirmPass.focus();
        document.getElementById('errMessConfirmPass').innerHTML = errConfirmPass;
        return false;
    }
    else {
        document.getElementById('errMessConfirmPass').innerHTML = '';
        return true;
    }
}

let city = document.getElementById('city');
let errCity;
function validateCity() {
    if (city.value === '') {
        errCity = "Không được bỏ trống địa chỉ thành phố";
        document.getElementById('errMessCity').innerHTML = errCity;
        city.focus();
        return false;
    } else {
        document.getElementById('errMessCity').innerHTML = '';
        return true;
    }
}

let namSinh = document.getElementById('namSinh');
let errNamSinh;
let date = new Date();
function validateNamSinh() {
    if (namSinh.value === '') {
        errNamSinh = "Không được bỏ trống năm sinh";
        namSinh.focus();
        document.getElementById('errMessNamSinh').innerHTML = errNamSinh;
        return false;
    } 
    else if (date.getFullYear().toString() === namSinh.value) {
        errNamSinh = "Năm sinh không được là năm hiện tại";
        namSinh.focus();
        document.getElementById('errMessNamSinh').innerHTML = errNamSinh;
        return false;
    }
    else {
        document.getElementById('errMessNamSinh').innerHTML = '';
        return true;
    }
}

function register(event) {
    //nếu không prevent thì err mess sẽ hiển thị trong chốc lát r biến mất
    event.preventDefault();
    //gọi ngược thứ tự validate 
    //để con chuột luôn focus lần lượt từ trên xuống dưới các trường lỗi
    validateNamSinh();
    validateCity();
    validateConfirmPass();
    validatePass();
    validateEmail();
    validateLastName();
    validateFirstName();

}