/**
kiểu dữ liệu trong js
dữ liệu nguyên thủy - Premitive - data
        -number
        -string
        -boolean
        -underfined
        -null
        -symbol
 dữ liệu phức tạp
        -function
        -object
*/
// kiểu dữ liệu số (number types)
var a = 1;
var b = 2;
var c = 3;
console.log(typeof a)// thêm typeof để kiểm tra kiểu dữ liệu
document.write(typeof a)

//kiểu dữ liệu string("chuỗi")
var fullname = "TTTuong";
console.log(typeof fullname);// thêm typeof để kiểm tra kiểu dữ liệu
document.write(typeof fullname);


// kiểu dữ liệu boolean (true, false)
var is = true;
console.log(typeof is)// thêm typeof để kiểm tra kiểu dữ liệu
document.write(typeof is);


// kiểu dữ liệu  underfined type
var age; // là 1 biến không có giá trị nào
console.log(typeof age)// thêm typeof để kiểm tra kiểu dữ liệu
document.write(typeof age)

//kiểu dữ liệu null
var isnull = null;// là k có gì
console.log(typeof isnull)// thêm typeof để kiểm tra kiểu dữ liệu
document.write(typeof isnull)

// kiểu dữ liệu symbol
var tuong = Symbol("tuong"); 
var tuong2 = Symbol("tuong"); 
console.log(tuong === tuong2)
console.log(typeof tuong);// thêm typeof để kiểm tra kiểu dữ liệu
document.write(typeof tuong)

// kiểu dữ liệu phức tạp function
var my = function(){
    console.log(typeof "hi Iam Tuong")// thêm typeof để kiểm tra kiểu dữ liệu
    document.write(typeof "hi Iam tuong")
}
my();// ta phải gọi function được tạo ra ms chạy đc

// kiểu dữ liệu object 
var myobject = {
    name : "tuong", age : 19, adress : "dak lak", 
    // có 2 vế 1 bên là key và sau : là value
    // cách nhau bằng 1 dấu phẩy
    my : function(){
    
    }
};// có thẻ cho myFunction vào trong object
console.log(typeof myobject);// thêm typeof để kiểm tra kiểu dữ liệu
document.write(typeof myobject)

// mảng list
var myArray = ["javascript", "python", "css"];
console.log(typeof myArray)// thêm typeof để kiểm tra kiểu dữ liệu
document.write(typeof myArray)































