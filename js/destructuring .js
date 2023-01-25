// toán tử rest ...




function renderModel(...args){

    for(i in args){

        console.log(args[i]);
        var render = document.querySelector('#content');
        render.innerHTML = `${args[i]}`
    }
}




renderModel(2,3,4,"tuong","<h1 style='color:red;'>thao</h1>");













