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

    getname : function(){

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

/**
object 
- tham chiếu, kế thừa
*/
var courses = {

    tuong:{

        id : 1,
        name : "tuongclearlove7",
        age : 20,
    },

    thao:{

        id : 2, 
        name : "thaorose",
        age : 19,
    },

    mymom : {

        id : 3,
        name : "Cuc nguyen",
        age : 50
    }
}

console.log(courses.tuong);// lấy ra từng object
console.log(courses.thao);
console.log(courses.mymom);

console.log(courses.tuong.id);// lấy ra từng phần tử trong object
console.log(courses.thao.name);
console.log(courses.mymom.age);

var obj_courses = Object.values(courses);

console.log(obj_courses);

for(var j = 0; j < obj_courses.length; j++){

    var newobj_course = Object.values(obj_courses[j]);

    for(var k = 0; k < newobj_course.length; k++){

        console.log(newobj_course[k]);
    }
}

function randomPointOnCircle(radius) {

    let angle = Math.random() * 2 * Math.PI;
    
    return {
        
            x : radius * Math.cos(angle),

            y : radius * Math.sin(angle)
    };
}

console.log(randomPointOnCircle(2));

var obj = Object.values(randomPointOnCircle(2));

console.log(obj);

for (var i = 0; i < obj.length; i++) {

    console.log(obj[i]);
}





















