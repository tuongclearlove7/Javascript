/**
vòng lặp do/while loop
 */
var a = 0;
do{
    a++
    console.log(a);
}while(a<10);// điều kiện  

var a = 0;
do{
    a++
    console.log(a);
}while(a<5);// điều kiện

// lặp chuỗi
var a = "";
var i = 0;
while (i < 10) {// điều kiện
  a +=  i + " anh yêu thảo nhiều lắm \n";
  i++;
}
console.log(a);// chạy từ 0 đến 10

// chỉ chạy 1 lần
var a = 0;
var b = false;
do{
    a++;
    console.log(a + " anh yêu thảo");
    if(true){
    b = true;
    }
}while(!b && a < 98);// điều kiện

console.log("___________________________________________________________________")

var a = 0;
var b = false;
do{
    a++;
    console.log(a + " tôi yêu sách giáo khoa lịch sử lớp 12");
    if(false){// nếu trong if là true thì nạp thành công
    b = true;// nếu trong if là false thì nạp thất bại
    }
}while(!b && a <= 9);// điều kiện





















