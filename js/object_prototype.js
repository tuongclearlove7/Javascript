/* object prototype
*/
function User(first_name, lastname, username){
    this.first_name = first_name;
    this.lastname = lastname;
    this.username = username;
    this.getname = function(){
        return `${this.first_name} ${this.lastname}`;
    }
}
// gán prototype vào trc classname để in ra
User.prototype.classname = "js";
User.prototype.getclassname = function(){
    return this.classname;
}
var user1 = new User("tuong"," tran", "clearlove7");
var user2 = new User("phuong ","thao", "roser9");
console.log(user1.classname);
console.log(user2.getclassname());
console.log(user1);
console.log(user2);






















