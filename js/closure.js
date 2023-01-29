function createStore(key){

    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () => {

        localStorage.setItem(key, JSON.stringify(store));

    }

    const myStore = {

        get(key){
 
            return store[key];


        },
 
        set(key, value){

            store[key] = value;
            
            save();
        },

        remove(key){

            delete store[key];
            save();
        }
    }

    return myStore;

}


const app_settings = createStore("app1");

app_settings.set("fullname","tuong tran");
app_settings.set("age",21);
app_settings.set("address","dak lak");

console.log(app_settings.get("fullname"));
console.log(app_settings.get("age"));
console.log(app_settings.get("address"));


var model = document.querySelector("#content");

model.innerHTML = ` <h1 style="color:red;">${app_settings.get("fullname")}</h1>
                    <h2 style="color:green;">${app_settings.get("age")}</h2>
                    <h3 style="color:orange;">${app_settings.get("address")}</h3>`

app_settings.get();














