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

var j=0;
totalcoin = my_list.reduce(function(count,course){
    j++;
    console.log(i,count,course);
    return count+course.coin;
},0);
console.log(totalcoin);


var num = [100,200,300,400,500];
var cointotal = num.reduce(function(total, num){
    return total+num;
}); 
console.log(cointotal);


var depthArray = [1,2,[3,4],5,6,[7,8,9]];

var flatArray = depthArray.reduce(function(flatoutput, depthitem){
    return flatoutput.concat(depthitem);
},[]);
console.log(flatArray);


var  topics=[
    {
        topic:"front-end",
        cour:[
            {
                ID:1,
                title:"html ,css",
            },
            {
                ID:2,
                title:"javascripts"
            }
        ]
    },
        {
            topic:"back-end",
            cour:[{
                ID : 1,
                title:"php"
            },
            {
                ID: 2,
                title:"nodejs"
            }
        ]
    },
];

var  newcour = topics.reduce(function(cour, topic){
    return cour.concat(topic.cour)
},[]);
console.log(newcour);   

var html = newcour.map(function(cour){
    return`<div>
    <h2>${cour.title}<h2>
    <h2>${cour.ID}<h2>
    </div>`;
});
console.log(html.join(""));

function ob(){
    function Getpos(position) {
        var pos = position.coords;
        let  pos1 = 'vĩ độ : '+pos.latitude;
        let pos2 = 'kinh độ : '+pos.longitude;
        console.log(pos1);
        console.log(pos2);
        return pos1+pos2;
}
let pos_place = navigator.geolocation.getCurrentPosition(Getpos);
    return pos_place;
}
ob();















