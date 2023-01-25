
var aElements = document.links;

for (var i = 0; i < aElements.length; i++){

    aElements[i].onclick = (listener) => {

        if(!listener.target.href.startsWith("https://www.facebook.com/")){

            listener.preventDefault();
            // ngăn chặn click vào những link khác link facebook 
        }
    }
}


var div = document.querySelector('.item');
div.onclick = function() {

    console.log("div");
}

var h2 = document.querySelector('h2');
h2.onclick = function(listener) {

    listener.stopPropagation();
    console.log("h2");
}




























