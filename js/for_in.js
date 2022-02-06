// ứng dụng vòng for vào object
// for / in loop
var my_profile = {
    name : 'tuong',
    age : 19,
    address : 'dak lak', 
};
for (var key in my_profile){
    console.log(key); 
    console.log(my_profile[key]);// lấy ra vlue trong key
}

var myobject = {name:"John", nickname:"Doe", age:25}; 
var i = "";
for (var x in myobject) {
  i += myobject[x] + " ";
}
console.log(i)

// ứng dụng vòng for vào mảng
var language = ['javascript','python','css','c++'];
for (var key in language){
    console.log(language[key]);// lấy ra key
}

var myname = 'tuongclearlove7';
for(var key in myname){
    console.log(key);//kiểm tra số ký tự trong chuỗi(string)    
    console.log(myname[key]); // lấy ra từng chữ cái trong chuỗi
}
























