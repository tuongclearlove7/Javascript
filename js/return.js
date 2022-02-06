/**
return trong hàm - js
return dùng để trả về giá trị của điều kiện 2 biến
 */
// hàm confirm
var isconfirm = confirm("message?");
console.log(isconfirm);

// không return thì sẽ trả về underfined
function total2(a,b){
    a+b;
    return undefined
}
var result = total2(2,5);
console.log(result)

//code trong function dưới return sẽ k hoạt động 
function total(a,b){
    return a+b;
}
var result = total(2,5)
console.log(result)

// return có thể trả về bất kỳ kiểu dữ liệu nào
// in ra object
function total3(a,b){
    return [a,b];
}
var result = total3(2,5);
console.log(result)

// nối chuỗi in ra chuỗi
function total3(a,b){
    return a.toString() + b.toString();
}
var result = total3("javascripts ","python");
console.log(result)
//tương tự
function total4(a,b){
    return "javascripts" + "python";
}
var result = total4 ();
console.log(result)











