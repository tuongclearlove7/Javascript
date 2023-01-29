const app = (function () {

    const cars = [];
    //private

        return {

            get(index){

                return cars[index];

            },

            car : [],

            add(...car){

                for(let i = 0; i < car.length; i++) {

                    cars.push(car[i]);
                }
                
            },

            edit(index,car){

                cars[index] = car;
            },

            delete(index){

                cars.splice(index,1);

            }
        }
})();




app.add([{sister : (...name) => {

    for(var i = 0; i < name.length; i++){

        console.log(name[i]);
    }

}}]);

for(let i = 0; i < app.get(0).length; i++) {    

    //console.log(app.get(0)[i].sister(["tuong","thao"]));

   
}



const static_App = (

    function(){

        var obj = [
                      {
                         me : {

                                firstname : "Tran",
                                lastname : "Tuong",  
                                age : 21,
                                address : "31 Nguyen Khuyen Da Nang"

                          },

                          crush : {

                                firstname : "Ho",
                                lastname : "Thao",  
                                age : 21,
                                address : "Go Da Nang"
                                
                          }
                      }
                  ];

        const data = [obj];

            return {

                set(...value){
            
                    for (var i = 0; i < value.length; i++){
                        
                        data.push(value[i]);
                    }
                },

                get(index){
                        
                    for (var i = 0; i < data.length; i++){

                        if(index === i){

                            break;

                            return data[i];
                        }
                    }

                    return data[index];
                },

                gets_Tostring(){

                    var toString = "";

                    for (var i = 0; i < data.length; i++){

                        toString = toString + data[i];
                    } 

                    return toString;
                },

                delete_toIndex(index){

                    delete data[index];
                    
                },

                gets(){

                    for (var i = 0; i < data.length; i++){

                            console.log(data[i]);
                    }
                },

                get_index(value) { 
            
                    return data.indexOf(value); 
                }
            }
        }
)();

function start(run){

    switch(run){

        case false : 

            console.log("Application is shutting down");

        break;

        case true:

            while(run){

                console.log(static_App.get(0)[0].me.address);
        
                var model = document.querySelector("#content");
                
                return model.innerHTML = `<div style = "color : red;">
                        <li>firstname : ${static_App.get(0)[0].me.firstname}</li>
                        <li>lastname : ${static_App.get(0)[0].me.lastname}</li>
                        <li>age : ${static_App.get(0)[0].me.age}</li>
                        <li>address : ${static_App.get(0)[0].me.address}</li>
                        <li>firstname : ${static_App.get(0)[0].crush.firstname}</li>
                        <li>lastname : ${static_App.get(0)[0].crush.lastname}</li>
                        <li>age : ${static_App.get(0)[0].crush.age}</li>
                        <li>address : ${static_App.get(0)[0].crush.address}</li>
                        </div>
                        `;
        
        }

        break;

        default:

            console.log("true or false");

        break;
    }
}




