/**
tiến tố , hậu tố
a++  (++ ở đầu là hậu tố)
++a (++ ở sau là tiến tố ) 
tương tự trừ cx như vậy 
*/
var a = 6;// hậu tố
a++
console.log(a);

var a = 6;// tiến tố
--a
console.log(a);
 
var a = 6;
console.log(++a)

var a = 6;// giữ nguyên 6
console.log(a--)

console.log("_______________________________________")
var a = 6; // hậu tố nên cộng thêm 1 và output cx v
// công tương tự trừ 
var output = ++a;
console.log("output : ", output, "a =", a);

var a = 6;
var output = a--;// vẫn giữ nguyên a
// cộng tương tự trừ
console.log("output = ", output, "a =", a);
/**vì a = 6 mà a-- thì nó sẽ trừ đi 1 = 5
còn output là sao chép lại a nên in ra output chỉ = 6
còn khi in ra a thì nó sẽ hiện ra = 5
 */
var number = 6;
var output = number++ + --number;
/** ta được output sao chép của number++ là hậu tố 
nên giữ nguyên 6 + 
--number là tiến tố nên +6 là 7
--number tiến tố thì trừ đi 1 nên bằng 6
=> 6 + 6
*/
console.log("ouput : ", output);
var number = 6;
var output = ++number * 2 - number-- * 2;
/** 
ta có ++number là tiến tố nên công thêm 1 là 7
7 => number = 7
output sao chép lại number-- hậu tố nên giữ nguyên
nên trả về output nên = 7
=> 7*2 - 7*2 
*/ 
console.log(output)





