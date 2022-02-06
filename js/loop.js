/**
vòng lặp loop
1. for - lặp với điều kiện đúng
2. for/ in -  lặp qua key của đối tượng
3. for/of - lặp qua value của đối tượng
4. while - lặp khi điều kiện đúng
5. do / while - lặp ít nhất 1 lần, sau đó 
lặp khi điều kiện đúng 
 */
// vòng lặp for
// chạy khi điều kiện đúng
for (var i = 1; i <= 1000; i++){
    console.log(i);
}// index chạy từ 1 đến 1000

var a = 1;
for(;a <= 100/**true or i > 0*/; a++){
    console.log(a);
}/*khi không cho điều kiện vào trong vòng lặp thì sẽ chạy
vô hạn và trình duyệt sẽ bị treo
hoặc cho vào điều kiện là true
hoặc cho điều kiện i > 0 
khi trong điều k có  i++, a++ thì trình duyệt cx sẽ bị treo*/

var c = 0;
for(;c < 200;){
    c++;
    console.log(c);
}
// c++ để trên console.log thì sẽ chạy từ 1 đến 201
// cho i = 0 và điều kiện là c < 200 thì sẽ chạy từ 1 đến 200

//lấy ra các phần tử trong mảng
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i, len, a;
for (i = 0, len = cars.length, a = ""; i < len; i++) {
  a += cars[i] + "\n";
}
console.log(a);

// ứng dụng vòng lặp for và dùng mảng
// dùng vòng lặp để lấy các phần tử trong mảng
var my_array = [
    'javascript',
    'python',
    'css',
    'c++'
];
var array = my_array.length;
for (var i = 0; i < array; i++){
    console.log(my_array[i]);
}
//console.log(my_array[1]);

//lặp string 
var a = "";
for (var i = 1; i < 10; i++) {
   a+= i + " tôi yêu sách giáo khoa lịch sử lớp 12\n";
}
console.log(a);
























