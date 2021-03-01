// <!-- Bài 3: Viết hàm validate cho form mẫu sau, với cái điều kiện
// 1.	First name và last name ko đc để trống, không nhỏ hơn 2 ký tự và ko quá 30 ký tự
// 2.	Email ko đc để trống và đúng định dạng email
// 3.	Password ko đc để trống và phải có ít nhất 6 ký tự
// 4.	Confirm pass phải khớp với password
// 5.	Thành phố ko đc để trống
// 6.	Năm sinh ko đc để trống -->
let firstName = document.getElementById('txtFirstName');
let lastName = document.getElementById('txtLastName');
let email = document.getElementById('txtEmail');
let password = document.getElementById('txtPassWord');
let cfmpass = document.getElementById('txtCfmPass');
let city = document.getElementById('slcCity');
let dob = document.getElementById('txtDob');

function register(event) {
    event.preventDefault();

    let fn_value = firstName.value;
    if (fn_value === '') {
        alert('Bạn phải nhập first name');
        firstName.focus();
        return false;
    }

    if(fn_value.length < 2 || fn_value.length > 30) {
        if(fn_value.length < 2)  alert('Bạn nhập chưa đủ số ký tự');
        if(fn_value.length > 30)  alert('Bạn nhập dư số ký tự');
        firstName.focus();
        return false;
    }

    let ln_value = lastName.value;
    if (ln_value === '') {
        alert('Bạn phải nhập last name');
        lastName.focus();
        return false;
    }

    if(ln_value.length < 2 || ln_value.length > 30) {
        if(ln_value.length < 2)  alert('Bạn nhập chưa đủ số ký tự');
        if(ln_value.length > 30)  alert('Bạn nhập dư số ký tự');
        lastName.focus();
        return false;
    }

    let e_value = email.value;
    if (e_value === '') {
        alert('Bạn phải nhập email');
        email.focus();
        return false;
    }
    
    let eSymbol = e_value.indexOf('@');
    let dotSymbol = e_value.indexOf('.');
    if (e_value.indexOf('@') < 0 || e_value.match(/com$/) === null || dotSymbol - eSymbol < 2) {
        alert('Bạn phải nhập email đúng');
        email.focus();
        return false;
    }

    let p_value = password.value;
    if (p_value === '') {
        alert('Bạn phải nhập password');
        password.focus();
        return false;
    }
    if ( p_value.length < 6) {
        alert('Bạn phải nhập password đúng');
        password.focus();
        return false;
    }

    let cp_value = cfmpass.value;
    if (cp_value === '') {
        alert('Bạn phải nhập lại confirm password');
        cfmpass.focus();
        return false;
    }
    if (cp_value.localeCompare(p_value, 'en', { sensitivity: 'base' }) != 0 ) {
        alert('Bạn phải nhập confirm password đúng');
        cfmpass.focus();
        return false;
    }

    let city_value = city.value;
    if (city_value === '-1') {
        alert('Bạn phải chọn thành phố');
        city.focus();
        return false;
    }

    let dob_value = dob.value;
    if (dob_value === '') {
        alert('Bạn phải nhập ngày sinh');
        dob.focus();
        return false;
    }

    alert('Bạn đã nhập đủ thông tin, form đã được submit, chúc mừng!');
}