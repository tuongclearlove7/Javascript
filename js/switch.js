/**
câu lệnh rẽ nhánh - Switch
 */
var date = 3;// không sử dụng string (chuỗi)
switch(date){
    case 2:// case sử dụng toán tử === 
        console.log("this is two number")
        break;
/**
 nếu các case dưới không dùng break thì dưới điều kiện bên 
 dưới đều được in ra console
 nếu sử dụng break thì chỉ in ra console điều kiện đúng
 */
    case 3:
        console.log("this is three number")
        break;
    case 4:
        console.log("this is four number")
        break;
    case 5:
        console.log("this is five number")
        break;
}

/* biến date đã cho thõa mãn 1 trong 3 đk case thì 
sẽ in 1 trong 3 đk case
*/
var Date = 1;
switch(Date){
    case 2:
    case 3:
    case 4:
        console.log("this is 2, 3, 4 number")
        //
    case 5:
        console.log("this is 5")
        break;
/*nếu biến date thõa mãn case 5: nhưng không có break
 thì case 5: sẽ không in ra mà sẽ in
ra điều kiện default 
*/
    default:
        console.log("no never");
    }
/*nếu biến date không thõa mãn điều kiện nào thì sẽ in ra
đk default
*/



























