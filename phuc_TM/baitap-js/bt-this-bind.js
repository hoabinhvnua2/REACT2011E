
console.log("--------THIS sử dụng bidn và apply---------");
let say = function (myName, cv, monHoc) {
    console.log(`helo tôi là ${myName} và tôi đang ${cv}  ${monHoc}`)
};
let sv = {
    myName: "phuc",
    cv: "hoc",
    monHoc: "react",
    sayHi: say

};
let gv = {
    myName: "binh",
    cv: "day",
    monDay: "Angular",
    sayHi: say // đây là cách gọi thẳng tới đối tượng chứ không phải sử dụng con trỏ this
};
sv.sayHi(this.myName, this.cv, this.monHoc);
gv.sayHi(gv.myName, gv.cv, gv.monDay);

let hs = {
    myName: "sang",
    sayHelo: () => {
        console.log(this);
    }
};
hs.sayHelo();// arrow fn không có con trỏ this
console.log("------Sử Dụng Bind---------");

let doiTuong_1 = {
    ten: "binh",
    monHoc: "recact"
};
//  let doiTuong_2 = {
//     ten: "trần",
//      monHoc: "angular",
//      sayHi : chao.bind(doiTuong_2,"chao","hoc")// như vầy là không được vì nó sẽ chạy từ trên xuống dưới
// };                  // mà đối tượng doiTuong_2 chưa khởi tạo xong nên sẽ là Cannot access 'doiTuong_2' before initialization

let doiTuong_2 = {
    ten: "trần",
    monHoc: "angular",
};
function chao(hi, cv) {
    console.log(hi, this.ten, cv, this.monHoc);
}
console.log(chao)
let say1 = chao.bind(doiTuong_2);
let say2 = chao.bind(doiTuong_1, "helo", "day");


console.log("----OOP------Fuction Progaming----");
console.log(doiTuong_2.__proto__);
console.log(chao.prototype);
//Trong JS object thì có prototype và property thì prototype của object nguyên thủy là .__proto__
// còn object contructor hay còn gọi là function contructor thì có prototype là .prototype
// Dưới đây là cách  tạo 1 OOP theo hướng function progaming

function SinhVien(myName, age) {
    this.myName = myName,
        this.age = age
};
//Buoc1 1: Tạo 1 object contructor (nguyên mẫu)
//Bước 2: sau đó ta muốn tạo 1 hàm nguyên mẫu bằng cách .(tên FN) = fuction(){};
SinhVien.prototype.myInfo = 20;
let user1 = new SinhVien("Minh", "phuc");
console.log(SinhVien.prototype)
console.log(user1.myInfo);

console.log("----OOP------Class-Typescript----");


class myClass {
    constructor(myName) {
        this.userName = myName
        this.dongHo = "đây là gia tộc họ tran"
        //this.showClass = this.showClass.bind(this) 
    };

    static sayHi() {
        console.log(this.myName);
    };
    showClass() {
        console.log(this)
    };
};

let sping = new myClass("sang");
console.log(sping);

class myClass2 extends myClass {
    constructor(ten,ho, myid) {
        //construor của myClass2 kế thừa myClass nên username = tên và ta muốn thêm vào 2 thuộc tính
        // là ho và myid thì ta phải khai báo super(ten,ho, myid); và truyền this.myid = myid;
        /// thì lúc này myClass2 kế thừa username và có thêm 2 thuộc tính ho, myid
        // giống như ta đang định nghĩa lại cái contructor
        super(ten,ho, myid);
        this.ho = ho;
        this.myid = myid;
    }
    
    showInfo() {
        console.log(this);
    }
};
let spring_1 = new myClass2( "phuc","tran",123);
console.log(spring_1);


console.log("test------super");
class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
    static ping(){
        return "ping";
    }
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }}

class Square extends Polygon {
    constructor(length,ah) {
        super(length,length,ah);
      // super phải được đặt trước this
      //ở đây constuctor có param là lenghth,ah và super sẽ gọi tới constructor lấy param vào xử lý
      // constructor(length,ah) <- param truyền vào
      // super(length,length,ah); <- length,lenght đồng nghĩa vs height, width của polygon mà nó extends
      // và ah là đường cao dc thêm vào class này còn 2 param còn lại nó kế thừa thôi
        this.name = 'Square';
        this.ah = ah
     //super cũng có thể gọi tới phương thức tĩnh
    }
    // static pong(){
    //     console.log(super.ping() + "pong"); //super cũng giống this.ping có thể gọi tới static của lớp nó kế thừa
    // }
    static pingpong(){
        console.log(this.ping() + "pong");
    }
    get area() {
        return this.height * this.width;
    }
    set area(value) {
        this.area = value;
    }
    //còn get và set sẽ lấy dữ liệu tù object cha nó là class Square vì object.area();
}
let nPolygon = new Polygon(20,15);
console.log(nPolygon);
let nSquare = new Square(15,25);
Square.pingpong();




