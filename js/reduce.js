/**
làm việc với mảng trong js
phương thức reduce
 */

var my_list = [
    {
        id : 1,
        name : "javascripts",
        coin : 0,
    },
    {
        id : 2,
        name : "html, css",
        coin : 1,
    },
    {
        id : 3,
        name : "python",
        coin : 1,
    },
    {
        id : 4,
        name : "c++",
        coin : 200,
    },
    {
        id : 5,
        name : "node js",
        coin : 200,
    },
    {
        id : 6,
        name : "python",
        coin : 10,
    },
    {
        id : 7,
        name : "python",
        coin : 2002,
    }
    ];


var totalcoin = 0;
for(var cour of my_list){
    totalcoin+=cour.coin;
}
console.log(totalcoin);

var i = 0;
function coinHandle(accumulator,current_Value,current_index,originArray){
    i++;
    var total = accumulator+current_Value.coin;
    console.table({
        'lượt chạy : ': i,
        'biến tích trữ':accumulator,
        'tích trữ được ': total,
    });
    //console.log(current_Value);
   // return 200;
   return total;
}
var totalcoin = my_list.reduce(coinHandle, 0);
//accumalator là 1 biến tích trữ 
//tham số truyền vào là 0
// return về 200 thì 200 sẽ gán vào biến tích trữ +200
console.log(totalcoin);



var Infofamily = [
    {
      id: 1,
      name: "Trần Vinh Quang",
      age: 50,
      nickname:''//null
    },
    {
      id:2, 
      name:"Nguyễn Thị Cúc ",
      age:50,
      nickname:''//null
    },
    {
      id:3,
      name:"Trần Thị Mai ",
      age:23,
      nickname:"Nickname : Mimi\n"
    },
    {
      id:3, 
      name:"Trần Thế Tường ",
      age:20,
      nickname:"Nickname : Clearlove7\n"
    },
    {
      id:4,
      name:"Hồ Thị Phương Thảo ",
      age:19,
      nickname:"Nickname : Rose"
    },
];



var count = 0;
function coinHandle(accumulator,current_Value,current_index,originArray){
    count++;
    var total = accumulator+current_Value.name;
    console.table({
        'lượt chạy : ': count,
        'biến tích trữ':accumulator,
        'tích trữ được ': total,
    });
   return total;
}
var totalcoin = Infofamily.reduce(coinHandle, 0);


















