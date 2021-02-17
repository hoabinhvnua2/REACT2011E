let firstName = document.getElementById('firstName');

function validateFirstName() {
    let errMess;
    if (firstName.value === "") {
        errMess = 'Chưa nhập first name';
        firstName.focus();
        //return false;
    }
    if (firstName.value.length > 0 && (firstName.value.length < 2 || firstName.value.length > 10)) {
        errMess = 'First name không nhỏ hơn 2 và không quá 30 ký tự';
        firstName.focus();
        //return false;
    }
    document.getElementById('errMessFirstName').innerHTML = errMess;
    // return true;
}

let lastName = document.getElementById('lastName');

function validateLastName() {
    let errMess;
    if (lastName.value === "") {
        errMess = 'Chưa nhập last name';
        lastName.focus();
        //return false;
    }
    if (lastName.value.length > 0 && (lastName.value.length < 2 || lastName.value.length > 10)) {
        errMess = 'Last name không nhỏ hơn 2 và không quá 30 ký tự';
        lastName.focus();
        //return false;
    }
    document.getElementById('errMessLastName').innerHTML = errMess;
    //return true;
}

function register(event) {
    //nếu không prevent thì err mess sẽ hiển thị trong chốc lát r biến mất
    event.preventDefault();
    //gọi ngược thứ tự validate 
    //để con chuột luôn focus lần lượt từ trên xuống dưới các trường lỗi
    validateLastName();
    validateFirstName();

}