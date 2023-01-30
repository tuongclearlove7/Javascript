let programming = ["python", "javascript"];
let new_programming = [...programming, "C","C++","C#"];

console.log(new_programming);

var array_num = [1,2,3,4,5];
var new_array_nums = [...array_num,6,7,8,9,10];

console.log(new_array_nums);

function approve_Array(...args) {

    for (var i = 0; i < args.length; i++) {

        console.log(args[i]);

    }
}

console.log(approve_Array.prototype);

approve_Array(...new_programming,...new_array_nums);

function max(...args) {

    let result = 0;

        for (let number of args) {

            if (number > result){

                result = number;
            } 
        }
        
    return result;
}

console.log("max : " + max(...new_array_nums));


















