/*var a = {
    id: 1, 
    info: {
        name: "cl7",
        age: 23
    }
}
archive=a.info

console.log(archive.name)


var date = new Date();
var date1 =  Date();
console.log(typeof date1)// kiểm tra kiểu dữ liệu khi k có new
console.log(typeof date) //kiểm tra kiểu dữ liệu
console.log(date)//print time now

var year = date.getFullYear();
var month = date.getMonth()+1;
var day =  date.getDay();
console.log(`${day}/${month}/${year}`);


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
       
      console.log("check ",xhttp.responseText);
    }
};
xhttp.open("GET", "https://chatbotclearlove7.herokuapp.com/", true);
xhttp.send();


var map;
var service;
var infowindow;

function initMap() {
  var sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: sydney, zoom: 15});

  var request = {
    query: 'Museum of Contemporary Art Australia',
    fields: ['name', 'geometry'],
  };

  var service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}

function Getpos(position) 
{ var pos = position.coords;
   let obj = 'vĩ độ : '+ pos.latitude; 
   let obj2 = 'kinh độ : '+ pos.longitude; 
   console.log('vĩ độ : ', pos.latitude)
   console.log('kinh độ : ', pos.longitude)
} 
navigator.geolocation.getCurrentPosition(Getpos);
*/

async function quickstart(
  projectId = process.env.PROJECT_ID // Project Id from JSON file
) {
  try {
    // Imports the Google Cloud client library
    const { Translate } = require('@google-cloud/translate');
    // Instantiates a client
    const translate = new Translate({ projectId });

    // The text to translate
    const text = 'Hello, world!';

    // The target language
    const target = 'ru';

    // Translates some text into Russian
    const [translation] = await translate.translate(text, target);
    console.log('Text:', text);
    console.log('Translation:', translation);
  } catch (error) {
    console.error(error);
  }
}

quickstart();



