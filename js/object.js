// Object trong javascript
// tạo key value là name và age , address
// function --> (method) phương thức 
// Others --> (property) thuộc tính 
var passkey = "tuong"
var myobject= {
    name : "tuong tran", 
    age : 18, 
    address : "dak lak, VN",
   [passkey] : "tuongclearlove7",
    phone : "012345678",
    getname: function(){
        return /*myobject or this*/this.address;
    },
    getpasskey: function(){
        return this["tuong"];
    }
};
//document.write(myobject.getname)
//document.write(typeof myobject.getname)
console.log(myobject.getname)
//kiểm tra kiểu dữ liệu
console.log(typeof myobject.getname)
// callback address (gọi hàm)
console.log(myobject.getname());
console.log(myobject.getpasskey());
console.log(myobject);
myobject.email = "lol00sever@gmail.com"
myobject["nick name"] = "clearlove"
// với key value là age khi truyền vào mykey 
// log ra là phần tử trong key
var mykey = "age";
console.log(myobject[mykey])
console.log(myobject["name"]);
console.log(myobject.name)
console.log(myobject.age);
console.log(myobject.address);
// xóa key value
// truyền key muốn xóa vào
delete myobject.age;
// truyền key string muốn xóa vào
delete myobject["nick name"]
delete myobject["tuong"]


























