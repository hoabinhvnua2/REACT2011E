let firstName = document.getElementById('firstName');

function register(event) {
    event.preventDefault();

    if (firstName.value === '') {
        alert('Bạn phải nhập first name');
        firstName.focus();
        return false;
    }

    if(firstName.value.length < 2 || firstName.value.length > 30) {
        alert('Bạn nhập chưa đủ sô ký tự');
        firstName.focus();
        return false;
    }

}