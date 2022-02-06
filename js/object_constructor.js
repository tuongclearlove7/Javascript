// object constructor
// Decoration function
function user(first_name, lastname, username){
    this.first_name = first_name;
    this.lastname = lastname;
    this.username = username;
    this.getname = function(){
        return `${this.first_name} ${this.lastname}`;
    }
}

var author = new user("tuong", "tran", "clearlove7");
var audience = new user("Phuong", "Thao", "Roser9");
// tạo title
author.title = "I love you";
//tạo comment 
audience.comment = "Love bro <3";
console.log(author.constructor === user)
console.log(author)
console.log(audience)
console.log(audience.constructor)
// in ra phần tử trong author và audience
console.log(author.getname());
console.log(audience.getname());





















































