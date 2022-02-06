// câu lệnh rẽ nhánh if else
/* cho biến date = 5 nếu điều kiện if thõa mãn thì sẽ in
ra console nếu không thõa mãn thì sẽ in ra điều kiện else */
var date  = 5;
if (date === 2){
    console.log("this is two number")
}
else if (date === 3){
    console.log("this is three number")
}
else if (date === 4){
    console.log("this is four number")
}
else{
    console.log("no never")
}

// sử dụng toán tử and
var login=prompt("Please enter username!");
var password=prompt("Please, enter password!");
    if(login=="tuong" && password=="tuongyeuthaonhieulam"){
         alert("Congratulations, you have entered the correct password!")
    window.location.href="test.html";
        }
    else{
        alert("The password you entered is incorrect. Please re-enter!");
    window.location.href="password.html";
}





















