/**
Toán tử logic
  && - and
  || - or
  !  - not
 */
var a = 1;
var b = 2;
var c = 3;
if(a > 0 && b > 0){
    console.log("True");
}

var a = 1;
var b = 2;
var c = 3;
if(a > 0 && b < 0){// sai
    console.log("True");
}

var a = 1;
var b = 2;
var c = 3;
if(a > 0 && b > 0 && c > 0){
    console.log("True");
}

// với toán tử or|| thì chỉ cần 1 trong 3 đk đúng 
//thì cũng True
var a = 1;
var b = 2;
var c = 3;
if(a == 0 || b < 0 || c > 0){
    console.log("True");
}

// với toán tử ! not thì sẽ phủ định ngược lại với True
// và False cũng tương tự
var a = 1;
var b = 2;
var c = 3;
if(!(a > 0)){// đk đúng bị phủ định
    console.log("True");
}

var a = 1;
var b = 2;
var c = 3;
if(!(a < 0)){//đk sai bị phủ định
    console.log("True");
}