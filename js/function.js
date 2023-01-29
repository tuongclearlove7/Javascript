/**
Một số điều cần biết về function
1 khi đặt function trùng tên
2 khai báo biến trong hàm
3 định nghĩa hàm trong hàm
 */
/* khi tạo ra hai function trùng tên nó sẽ in ra function
phía dưới 
*/
function show(){
    console.log("message1");
}
function show(){
    console.log("message2");
}
show();
// message2 đc in ra

// có thể khai báo biến trong function
// phạm vi sử dụng chỉ đc trong function
function show_name(){
    var fullname = "Trần Thế Tường";
    console.log(fullname);
}
show_name();

// tạo function trong function
// function jaw2 chỉ hoạt động trong phạm vi của function jaw  
function jaw(){
    function jaw2(){
        console.log("hàm (jaw)");
    }
    jaw2()
}
jaw()
// function ở trong khi gọi ra ngoài sẽ không được
//jaw2()

/*Các loại function
1 Declaration function
2 expression function
3 Arrow function
*/
//Declaration function
// hosting 
// có thể gọi Declaration function trước khi đc định nghĩa
Declaration();
function Declaration(){
    console.log("Declaration function")
}

// expression function
// toán tử gán , gán function vào biến name
//  k thể gọi expression function khi chưa định nghĩa
var first_name = function (){
    console.log("expression function")
}
Declaration();
first_name();

/**setTimeout(function first_name(){
});
var myobject = {
    myFunction: function first_name(){
    }
}
var name = function (){
}
setTimeout(function auto(){
});
var myobject = {
    myFunction: function (){
    }
}
*/

function total(a,b){
    console.log(a-b);
}
total(10,5);// tham số truyền vào

var myGlobal = 10;
function func1(){
    oopsGlobal = 5;
}
function func2(){
    var output = "";
    if (typeof myGlobal !="undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output+= "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
func1();

var name  = "tuong";
function myname(){
    var name = "clearlove7";
    return name;
}
console.log(myname());
console.log(name);

function minutes(num){
    return num - 7;
}
console.log(minutes(10));

var changed = 0;
function change(num){
    return(num + 5)/3;
}
changed = change(10);/* gán changed  cho change 
gán change(10) cho num + 5 / 3 = */
            console.log(changed)

var processed = 10;

function processArg(num){

    return (num + 5)/5;
}

processed = processArg(0);
/*gán processed cho processArg gán processArg(0) cho num + 5 / 5 = */
console.log(processed)

function wrapValue(n) {

    let local = n;

    return () => local;
  }
  
  let wrap1 = wrapValue("wrap1");
  let wrap2 = wrapValue("wrap2");
  
  console.log(wrap1());
  console.log(wrap2());

//arrow funtions

const ArrowFunctions = () => { 

    console.log("arrow functions...");
}

ArrowFunctions();

// arrow functions with argument

const arrowFunction = (arrow) => {

    console.log(arrow);
}  

arrowFunction("arrow functions with argument");


// arrow functions with arguments


const arrowFunctions = (...arrows) => {

    let string  = "";

    for (var i = 0; i < arrows.length; i++){

        string = string + arrows[i];

    }

    return string;
}

console.log(arrowFunctions("tuong",16,1,2002));//string concatenation (nối chuỗi chuyển vào)

// ife function


const privateApp = (

    function(){

        const data = [];

        console.log(data);

            return {

                set(...value){
            
                    for (var i = 0; i < value.length; i++){
                        
                        data.push(value[i]);
                    }
                },

                get(index){
                        
                    for (var i = 0; i < data.length; i++){

                        if(index === i){

                            break;

                            return data[i];
                        }
                    }

                    return data[index];
                },

                gets_Tostring(){

                    var toString = "";

                    for (var i = 0; i < data.length; i++){

                        toString = toString + data[i];
                    } 

                    return toString;
                },

                delete_toIndex(index){

                    delete data[index];
                    
                },

                gets(){

                    for (var i = 0; i < data.length; i++){

                            console.log(data[i]);
                    }
                },

                get_index(value) { 
            
                    return data.indexOf(value); 
                }
            }
        }
)();

console.log(privateApp);
privateApp.set(16,1,2002,"_tuong");
console.log(privateApp.gets_Tostring());// to string
privateApp.gets();

var obj  = [
    
    privateApp.get_index(16),
    privateApp.get_index(1),
    privateApp.get_index(2002),
    privateApp.get_index("_tuong"),
];

console.log("index : " + obj);

for (var i = 0; i < obj.length; i++){

    console.log(privateApp.get(obj[i]));
}





  
 