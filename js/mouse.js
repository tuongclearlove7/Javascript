var logo  = document.querySelector(".column")
window.addEventListener("scroll",function(){
    var scroll = window.pageYOffset;
    if(scroll>300){
        logo.classList.add("mouse top");
        console.log("you move position bottom > 145px");
    }
    else{
        console.log(" you move position top < 145px");
    }
})   





















