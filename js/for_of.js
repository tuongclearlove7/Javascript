/**vòng lặp for -  of (for/of loop)
 */
// áp dụng vòng for of với mảng
// lấy ra từng phần tử trong mảng
var language = [
    "javascript",
    "python",
    "css"
];
for(var value of language){
    console.log(value);
}
// lấy ra ký tự trong chuỗi
var language = "javascript";

for(var value of language){
    console.log(value);
}

// áp dụng vòng for of với object
var  myobject = {
    name : "tuong",
    age : 19,
}
console.log(Object.keys(myobject));
for (var value of Object.keys(myobject)){
    console.log(myobject[value]);// lấy ra key trong name và age
}
console.log(Object.values(myobject));// lấy ra 1 mảng key trong name và age
for (var value of Object.values(myobject)){
    /*sử dụng for of lấy ra key trong name và age*/
    console.log(value);
}
























