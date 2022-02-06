//import test2 from my
//console.log("my name is tuong")
function mykey(){
    var password = prompt("nhập đúng pass để lấy key : ");
alert("key bạn vừa nhập là : "+password);
var myinfomation = {

};
var myobject = {
   [password] :  "keyword : tuongyeuthao",
    getpass : function(){
        return this["tuongyeuthao1"]// tuong is keys
    }
};
//document.write(myobject.getpass());
console.log(myobject.getpass())
myinfomation.email = "lol00sever@gmail.com";
myinfomation["nick name"] = "clearlove";
console.log(myinfomation);
}
//mykey()

var  myarray = [
    ["tuong","clearlove"],
    [7],
    ["thao","roser"],
    [9]  
];
for(var i = 0; i < myarray.length; i++){
    for (var j = 0; j< myarray[i].length; j++){
        console.log(myarray[i][j]);// lấy ra các phần tử trong mảng
    }
}

var a = "";
for (var i = 1; i < 10; i++) {
   a+= i + " tôi yêu sách giáo khoa lịch sử lớp 12"+"\n";
}
console.log(a);

function myname(){
    var myobject = {name : "tuong", nickname : "clearlove", age : 7}; 
    var i = "";
        for (var x in myobject) {
        i += myobject[x] + " ";
    }
    console.log(i)
}myname()

var numbers = [45, 4, 9, 16, 25];
var a = "";
function myFunction(value) {
  a += value + "\n"; 
}
numbers.forEach(myFunction);//callback
console.log(a);

var a = 0;
var b = false;
do{
    a++;
    console.log(a + " Please, enter password!");
    if(false){
    b = true;
    }
}while(!b && a <= 9);

var login=prompt("Please enter username!");
var password=prompt("Please, enter password!");
    
    if(login=="tuong" && password=="tuongyeuthaonhieulam"){
         alert("Congratulations, you have entered the correct password!")
    window.location.href="test2.js";
    window.location.href="test.html";
        }
    else{
        alert("The password you entered is incorrect. Please re-enter!");
    window.location.href="password.html";
}




















