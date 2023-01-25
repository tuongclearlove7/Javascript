const app = (function () {

    const cars = [];
    //private

        return {

            get(index){

                return cars[index];

            },
            car : [],
            add(car){

                cars.push(car);
            },
            edit(index,car){

                cars[index] = car;
            },
            delete(index){

                cars.splice(index,1);

            }
        }
})();