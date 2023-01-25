


var getclassElement = document.querySelector(".item");


console.log(getclassElement);


console.log(getclassElement.classList);


getclassElement.classList.add("mycolor");


console.log(getclassElement.style);


console.log(getclassElement.classList.contains("mycolor"));


setTimeout(function() {

    getclassElement.classList.remove("mycolor");

}, 1000);

console.log(getclassElement.classList.length);

function light(color, time) {

    setInterval(function() {

        getclassElement.classList.toggle(color);
    
    }, time);
}   

console.log(getclassElement.classList.value);

light("mycolor", 300);



















