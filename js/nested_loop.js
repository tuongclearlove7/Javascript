/**
vòng lặp lồng nhau
 */
var  myarray = [
    ["tuong","clearlove"],
    [7],
    ["thao","roser"],
    [9]  
];
for(var i = 0; i < myarray.length; i++){
    console.log(myarray[i]);// lấy ra mảng
}

//mảng chứa number
var  myarray = [
    [1,2],
    [3,4],
    [5,6]
];
// lồng 2 vòng for vào nhau
for(var i = 0; i < myarray.length; i++){
    for (var j = 0; j< myarray[i].length; j++){
        console.log(myarray[i][j]);// lấy ra các phần tử trong mảng
    }
}

// mảng chứa string
var  myarray = [
    ["tuong","clearlove"],
    [7],
    ["thao","roser"],
    [9]  
];
// lồng 2 vòng for vào nhau
for(var i = 0; i < myarray.length; i++){
    for (var j = 0; j< myarray[i].length; j++){
        console.log(myarray[i][j]);// lấy ra các phần tử trong mảng
    }
}





























