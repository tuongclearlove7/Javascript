function Promise_all(promises) {

    return new Promise((resolve, reject) => {
                
         resolve("success");
          //reject("error");
    });
}
        
Promise_all([]).then(array => {

        console.log("This should be []:", array);
});

function soon(val) {

return new Promise(resolve => {

           setTimeout(() => resolve(val), Math.random() * 500);
    });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {

        console.log("This should be [1, 2, 3]:", array);
});

Promise_all([soon(1), Promise.reject("X"), soon(3)]).then(array => {

        console.log("We should not get here");
})
.catch(error => {

        if (error != "X") {

            console.log("Unexpected failure:", error);
     }
});


function myPrinter(string_var){


    return string_var;
}

let promise1 = new Promise(

        function(myPrinter){

       //callbacks hell
        myPrinter("hello world");
});
  
promise1.then((value) => {

        var getID = document.querySelector("#content");

        console.log(value);

        setTimeout(function(){

                console.log(value);
                
                return getID.innerHTML = `<h1 style="color:red;">${value}</h1>`

        }, 5000);
});


let promise2 = new Promise(

        //Executor
       function(resolve, reject){
   
       resolve("success");//thành công
 
       reject("Error");// lỗi
});

promise2.then(function(success){

        console.log(success);

}).catch(function(err){

        console.log(err);


}).finally(function() {

        console.log("done");

});


function resolveAfter2Seconds(x) {

    let my_promise = new Promise(function (resolve, reject){

    setTimeout(() => {

                resolve(x);

                reject("Error");
                
        }, 1000);
    });

     my_promise.then(function(success){

        console.log("log then : " + success);

     }).catch(function(err){

        console.log(err);
     })

     return my_promise;
}
      
async function logging() {

        let x = await resolveAfter2Seconds(10);

        console.log("log await : " + x);

}

logging();