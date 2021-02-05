
let a = "lastname";
let student = {
    fistname : "minh",
    [a] : "phuc"
}
let newStudent = {};
for(var key in student){
     newStudent[student.fistname] = key
}
console.log(newStudent);

let c = {myName : "phuc"};
let b = c;
b.myName = "minh";
console.log(c, b);
console.log("----------");


function binaryTree(numberInput){
    let arrBnary = [];
    const bNary = 2;
    let value = numberInput;  
    let binaryValue = numberInput % bNary;
    arrBnary.push(binaryValue);
    while((value !== 1) && (value !== 0)){
        value = numberInput / bNary;
        value =  parseInt(value);       
        binaryValue = value  % bNary;
        arrBnary.push(binaryValue);
        numberInput = value;
    };
    arrBnary.reverse();
    return arrBnary;
};
console.log(binaryTree(45));


let aArr = ["Tran","Minh","Phuc",true];

// let bArr = aArr;
// let tamp = "string ne";
// bArr.pop();
// let str_1 = "tran minh phuc";
// let str_2 = str_1;
// str_2 = "tran minh sang";
// console.log(str_1);
function myFn (){
    let a = "myname";
    let b= 20;
    alert("SSss"); 
   
   /// fuction có tên được gán vào 1 biến hay truyền vào thành param thì không cần dùng toán tử call();
};

let p = function (){
    let a = "myname";
    let b= 20;
    alert("SSss"); 
};
console.log(p === myFn);
p = myFn;
console.log(p === myFn);
p = function(){
   let a = "lastname"; // ta đã gán p = myFn và sau đó thay đổi p thì myFn vẫn không đổi 
                        //vậy sau khi gán p = fuction mới thì p và myFn đã dùng khác địa chỉ ô nhớ
};
console.log(myFn,p);

function ctor(lastname,fistname){
    this.lastname = lastname;
    this.fistname = fistname;
    this.sayHi = function(){
        return this.lastname;
    }
};

let tor = new ctor("minh","phuc");
console.log(typeof ctor)
console.log(typeof tor);
console.log( tor);
ctor.sayHelo = function(){
    console.log("helo_1")
};
console.log(ctor)
let tor_1 = new ctor("a","b");
console.log(tor_1);

// let obj1 = {
//     ho: "minh"
// };
// let ojb2 = obj1;
// ojb2.ten = "phuc";
// console.log(obj1 === ojb2) // ví dụ cho thấy obj sử dụng tham chiếu...
// có thay đổi cở nào cũng = nếu lúc đầu ta gán obj đó = 1 ojb trước đó rồi thay đổi giá trị obj sau

let user1 ={
    lastname :"alo"
};
if(user1.age == null){
    console.log(true)// check null hay undifile của 1 thuộc tính của obj ta phải check null 
                    // rỗ ràng chứ ko thể (user1.age) dc vì compiler sẽ không hiểu
};
