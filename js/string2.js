/**
làm việc với chuỗi (work string)
 */
// thuộc tính lenght
// kiểm tra độ dài chuỗi trong biến mystring
var mystring = "     tuongclear77love777777.77     ";
console.log(mystring.length)
//thuộc tính find index 
// tìm xem phần tử trong chuỗi có thứ tự là bao nhiêu
// index chạy từ 0
// chỉ lấy index từ phần tử đều tiên cần tìm nếu giống nhau
// console trả ra số -1 thì là k tìm đc
console.log(mystring.indexOf("love7"))
// chuyền vào 1 số để tìm kí tự trong chuỗi muốn tìm
console.log(mystring.indexOf("love7", 6))
// tìm phần tử cuối cùng trong chuỗi
// nếu k tìm đc thì trả về -1
// phương thức lastIndexOf
console.log(mystring.lastIndexOf(".77"))
// tìm vị trí phần tử trong chuỗi
// phương thức search không truyền số vào đc  
// phương thức search
console.log(mystring.search("clear"))
/**
cut string (cắt chuỗi)
 */
// phương thức slice
//cắt từ đầu đến cuối thì truyền vào 0
// truyền vào 1 tham số thì căt từ vị trí mà tham số truyền vào
// đến hết
// truyền vào 2 tham số 
//tham số đầu để bắt đầu cắt tham số 2 để dừng cắt
console.log(mystring.slice(5))
console.log(mystring.slice(5,10))
// cắt ngược từ phải sang trái
// thì truyền vào 2 tham số âm từ bắt đầu cắt đến kêt thúc cắt
console.log(mystring.slice(-3,-1))
/**
Phương thức replace viết đè
 */
// truyền vào chữ mà muốn tìm kiếm
// và truyền vào phần tử muốn thay thế
console.log(mystring.replace("7777","thao"))
// phương thức thay phần tử giống đằng sau
console.log(mystring.replace(/7777/g,"thao"))
// phương thức chuyển đổi chuỗi thành chữ viết hoa
console.log(mystring.toUpperCase())
// phương thức chuyển đổi chữ viết hoa thành chữ viết thường
console.log(mystring.toLocaleLowerCase()) 
// phương thức trim 
// loại bỏ khoảng trắng ở 2 đầu 
//.lenght để kiểm tra độ dài
console.log(mystring.trim().length)

// Phương thức split
// cắt chuỗi thành array mảng[]
// điểm trung để tách chuỗi là dấu phẩy và cách
var language = "javascript, python, css";
console.log(language.split(", "))
var languages = "tuong"
console.log(languages.split(""))

// get a character by index ( lấy một ký tự theo chỉ mục)
// chuyền số vị trí kí tự đó để lấy nó trong chuỗi
const myString2 = "tuong";
console.log(myString2.charAt(0))
// thêm typeOf để điểm tra kiểu dữ liệu
// cách sử dụng dấu ngoặc vuông
console.log(myString2[1])





























