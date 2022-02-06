/*
Đối tương date 
hàm Date 
 */
var date = new Date();
var date1 =  Date();
console.log(typeof date1)// kiểm tra kiểu dữ liệu khi k có new
console.log(typeof date) //kiểm tra kiểu dữ liệu
console.log(date)//print time now

var year = date.getFullYear();
var month = date.getMonth()+1;
var day =  date.getDay();
console.log(`${day}/${month}/${year}`);
//console.log(year)//lấy ra năm (year)
// summation + 1 để lấy từ 1 đến 12
//console.log(month) //chỉ lấy giá trị tháng từ 0 đến 11
//console.log(day) //lấy ngày 















