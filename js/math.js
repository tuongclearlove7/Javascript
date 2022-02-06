//var fullname = "TTTuong";
/** toán tử */
//khái báo biến a
//var a = 10 + 6;
//console.log(a)
/** toán tử so sánh
khi ta cho a = 1 , b = 2 thì 
if nếu a < b thì sẽ mãn điều kiện 
và in ra yes trong hàm alert
còn a == b hoặc a > b thì sẽ k in ra
dấu && toán tử logic
khi a và b > 0 thì sẽ in ra phần tử trong hàm alert
lưu ý : a và b phải cùng dấu thì ms chạy
*/
var a = 1;
var b = 2;
if (a < b){
    alert("yes a < b");
    console.log("yes a < b")
    console.warn("yes a < b")
    console.error("yes a < b")
    }

var k = 5;
var h = 6;
if (a > 0 && b > 0){
    alert("a và b lớn hơn 0")
    console.log("a và b lớn hơn 0")
    console.warn("a và b lớn hơn 0")
    console.error("a và b lớn hơn 0")
}

/** Toán tử số học
 * công , trừ , nhân , lũy thừa , chia , 
chia lấy số dư , tăng 1 giá trị số , giảm 1 giá trị số
  */

var t =  10;
var u = 6;
var o = t + u;
alert(o);
document.write(o);
console.log(o);

var t =  10;
var u = 6;
var o = t - u;
alert(o);
document.write(o);
console.log(o);

var t =  10;
var u = 6;
var o = t * u;
alert(o);
document.write(o);
console.log(o);

var t =  10;
var u = 6;
var o = t ** u;
alert(o);
document.write(o);
console.log(o);

var t =  10;
var u = 5;
var o = t / u;
alert(o);
document.write(o);
console.log(o);

var t =  10; // chia hết nên dư 0
var u = 5;
var o = t % u;
alert(o);
document.write(o);
console.log(o);

var t =  4; // chia không hết nên dư 4/3 dư 1
var u = 3;
var o = t % u;
alert(o);
document.write(o);
console.log(o);

// toán tử ++
// cứ thêm 1 dòng t++ thì cộng thêm 1 số
// toán tử --
// tương tự cứ thêm 1 dòng t-- thì trừ đi 1 số
var t = 10;
t++;
alert(t);
document.write(t);
console.log(t);

var t = 10; 
t--;
t--;
alert(t);
document.write(t);
console.log(t)

























