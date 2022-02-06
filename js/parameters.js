/*
tham số - js
truyền tham số

arguments
đối tượng arguments
vòng for js
*/
// tạo hàm 
// chỉ sử dụng được arguments trong ngoặc nhọn{}
// dùng if nếu message2 không được truyền vào tham số
// thì sẽ k in ra
function writelog(message, message2) {
    console.log(message)
    if(message2){
        console.log(message2)
    }
    console.log(typeof message)
    console.log(message2)
}
// không giới hạn kiểu dữ liệu
writelog("one message","two message");
//truyền two message vào tham số message2 
writelog(["Javascripts", "Python", "Css"]);
writelog(1234);
writelog(true);

// dùng if nếu message2 không được truyền vào tham số
// thì sẽ k in ra
function writelog1(message, message2) {
    if(message){
        console.log(message)
    }
    if(message2){
        console.log(message2)
    }
}
writelog1("hello world");
writelog1()

// truyền vô arguments thì sẽ in ra object (mảng)
function writelog2(){
    console.log(arguments)
}
writelog2()
writelog2("js", "py", 'css');


// vòng for of
function writelog3(){
    for (var parameter of arguments) {
        console.log(parameter)

    }

}
writelog3("js","py","css")

// in ra string trên 1 dòng
function string_concatenation(){
    var mystring = "";
    for (var parameter of arguments) {
        mystring += `${parameter}  ` 
    }
    console.log(mystring)
}
string_concatenation("js", "py", "css");




















