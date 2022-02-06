/**
câu lệnh điều kiện và phép so sánh
 */
var a = 1;
var b = 2;
var result = a < b;
console.log("result", result)// điều kiện được truyền vào result
if(result){
    console.log(" a bé hơn b")
}else{
    console.log("a lớn hơn b")    
}

// toán tử logic
// toán tử and &&
var a = 1;
var b = 2;
var result = a < b && a < 0
console.error("result", result)

var a = 1;
var b = 2;
var result = a < b && a > 0
console.error("result", result)

var a = 1;
var b = 2;
var result = "a" && "b" && "c";// toán tử and lấy vế phải
console.log(result)

var a = 1;
var b = 2;
var result = null && "b" && "c"; // null đk sai
// khác kiểu dữ liệu nên lấy null
console.log(result)

var a = 1;
var b = 2;
var result ="a" &&"b" && NaN && "c";// NaN đk sai
// khác kiểu dữ liệu nên lấy NaN
console.log(result)

var a = 1;
var b = 2;
var result ="a" &&"b" && NaN && "c";// NaN đk sai
// khác kiểu dữ liệu nên lấy NaN
if (result){
    console.log("true")
}else{
    console.log("false")
}

var a = 1;
var b = 2;
var result ="a" &&"b"  && "c";// đk đúng
// cùng kiểu dữ liệu
if (result){
    console.log("true")
}else{
    console.log("false")
}
//toán tử or ||
var a = 1;
var b = 2;
var result = "a" || "b"  || "c" || "d";// lấy vế trái gán vào result
console.log(result)

var a = 1;
var b = 2;
var result = null || "b"  || "c" || "d";// lấy "b" gán vào result
console.log(result)
var a = 1;
var b = 2;
var result = "a" || "b"  || undefined || "d";// lấy vế trái gán vào result
console.log(result)

var a = 1;
var b = 2;
var result ="a" || "b"  || undefined ||"c";// đk đúng
if (result){
    console.log("true")
}else{
    console.log("false")
}

var a = 1;
var b = 2;
var result = null || false  || undefined ||0;// đk sai
if (result){
    console.log("true")
}else{
    console.log("false")
}










































