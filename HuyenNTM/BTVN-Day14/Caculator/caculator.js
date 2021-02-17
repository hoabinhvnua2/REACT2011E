let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let result = document.getElementById("result");

function caculator(param) {
    console.log(param);
    let arr = document.getElementsByClassName("change-color");
    switch (param) {
        case "cong":
            result.value = Number(firstNumber.value) + Number(secondNumber.value);
            for (let index = 0; index < arr.length; index++) {
                arr[index].style.background = 'gray';
            }
            document.getElementById("cong").style.background = 'yellow';
            break;
        case "tru":
            result.value = Number(firstNumber.value) - Number(secondNumber.value);
            for (let index = 0; index < arr.length; index++) {
                arr[index].style.background = 'gray';
            }
            document.getElementById("tru").style.background = 'yellow';
            break;
        case "nhan":
            result.value = Number(firstNumber.value) * Number(secondNumber.value);
            for (let index = 0; index < arr.length; index++) {
                arr[index].style.background = 'gray';
            }
            document.getElementById("nhan").style.background = 'yellow';
            break;
        case "chia":
            result.value = Number(firstNumber.value) / Number(secondNumber.value);
            for (let index = 0; index < arr.length; index++) {
                arr[index].style.background = 'gray';
            }
            document.getElementById('chia').style.background = 'yellow';
            break;
    }
}