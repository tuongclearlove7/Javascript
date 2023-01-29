function myCount(){

        let count = 0;

        function increase(){


            return ++count;

        }

        return increase;

}

const counter = myCount();

console.log(counter());
console.log(counter());
console.log(counter());










