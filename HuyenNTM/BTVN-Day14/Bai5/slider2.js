let id = 0;
let arrSlider = [];
let currentIndex = 0;

function Slider(linkImage) {
    this.id = "slider" + id;
    id++;
    this.linkImage = linkImage;
    arrSlider.push(this);
}
let slider0 = new Slider("FUNiX-10nguyentac-slide1.png");
let slider1 = new Slider("funix-bai-dang-1024x620.jpg");
let slider2 = new Slider("FUNiX-International-logo.png");
let slider3 = new Slider("xisotop-1573806274.jpg");
console.log(arrSlider);
// khi đã có ảnh rồi thì viết HTML cho hiển thị ảnh 
function genderSliderHTML(indexSlider) {
    let sliderHTML = '';
    // for (let index = 0; index < arrSlider.length; index++) {
    sliderHTML = '<img src="' + arrSlider[indexSlider].linkImage + '" id="' + arrSlider[indexSlider].id + '">' + '\n';
    // }
    console.log(sliderHTML);
    document.getElementById("slider").innerHTML = sliderHTML;
}
genderSliderHTML(0);
changeSlide(0);

function changeSlide(param) {
    //đổi màu khi chuyển trang slide
    console.log(param);
    let arr = document.getElementsByClassName("change-color");
    console.log(arr);
    for (let index = 0; index < arr.length; index++) {
        arr[index].style.background = 'white';
        arr[index].style.color = 'black';
    }
    document.getElementById(param).style.background = 'blue';
    document.getElementById(param).style.color = 'white';
    //đổi slide khi chuyển trang slide
    let newIndex = param;
    genderSliderHTML(newIndex);
    console.log(currentIndex + ',' + newIndex);
    currentIndex = newIndex;
    console.log(currentIndex + ',' + newIndex);
}
//Viết hàm để thực hiện chuyển slide 
function backSlide() {
    //nếu là slide đầu thì về cuối, khác slide đẩu thì bằng vị trí hiện tại -1
    let newIndex;
    if (currentIndex == 0) {
        newIndex = arrSlider.length - 1;
    } else {
        newIndex = parseInt(currentIndex) - 1;
    }
    console.log(currentIndex + ',' + newIndex);
    genderSliderHTML(newIndex);
    changeSlide(newIndex);
    currentIndex = newIndex;
    console.log(currentIndex + ',' + newIndex);
}

function nextSlide() {
    let newIndex;
    if (currentIndex == arrSlider.length - 1) {
        newIndex = 0;
    } else {
        newIndex = parseInt(currentIndex) + 1;
    }
    console.log(currentIndex + ',' + newIndex);
    genderSliderHTML(newIndex);
    changeSlide(newIndex);
    currentIndex = newIndex;
    console.log(currentIndex + ',' + newIndex);
}