/**
             Toán tử gán
Toán tử     ví dụ          Tương đương
   =        x = y           x = y 
   +=       x += y          x = x + y
   -=       x -= y          x = x - y
   *=       x *= y          x = x * y
   /=       x /= y          x = x / y
   **=      x **= y         x = x ** y
thay vì thực hiện phép toán a = a + 2
ta có thể đổi thành theo công thức trên là a += số bất kì
(trừ và các công thức còn lại cũng tương tự như vậy)
*/
var a = 1;
a += 2;
console.log(a);

var a = 1;
a -= 2;
console.log(a);

var a = 1;
a *= 2;
console.log(a);

var a = 1;
a /= 2;
console.log(a);

var a = 2;
a **= 3;
console.log(a);