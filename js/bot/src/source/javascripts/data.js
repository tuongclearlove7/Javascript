function Getpos(position) {
var pos = position.coords;
        console.log('vĩ độ : ',pos.latitude);
        console.log('kinh độ : ',pos.longitude);}
let pos_place = navigator.geolocation.getCurrentPosition(Getpos);
        $(document).ready(function(){
        covid();
function covid(){
        var url = 'https://api.covid19api.com/summary';
        $.get(url,function(data){
        console.log(data);
        }
    )}
})
//<script src="javascripts/data.js"></script>