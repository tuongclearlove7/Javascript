/**Toán tử 3 ngôi - Ternary - operator
 */
var course = {
    name: "javascript",
    coin: 0
}
/* nếu coin thõa mãn điều kiện if thì sẽ in ra giá 
trị của coin
nếu coin: 0 thì sẽ in ra đk else*/
if (course.coin > 0){
    console.log(`${course.coin} Coin`);
}else{
    console.log("free"); 
}

var result = course.coin > 0 ?`${course.coin} 
Coin` : "Miễn phí"
console.log(result);

var a = 1;
var b = 2;
var c = a > 0 ? a : b;
console.log(c)





























