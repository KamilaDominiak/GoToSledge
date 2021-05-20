//show points in map
const dataList = [
  {
    id: 0,
    name: "Górka przy nałkoskiej",
    city: "Gdynia",
    district: "Karwiny",
    position: { lat: 54.471952, lng: 18.501946 },
  },
  {
    id: 1,
    name: "Górka przy Fizylierów",
    city: "Gdynia",
    district: "Karwiny",
    position: { lat: 54.476191, lng: 18.501077 },
  },
  {
    id: 2,
    name: "Górka abstrakcyjna",
    city: "Gdynia",
    district: "Karwiny",
    position: { lat: 54.475, lng: 18.48 },
  },
];
// mapa i jej parametry
var mymap = L.map("mapid").setView([54.4239, 18.4745], 14);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(mymap);

// pętla funkcja ( ???) która dodaje do mapy markery we wszystkich punktach z dataList
for (var i = 0; i < dataList.length; i++) {
  L.marker([dataList[i].position.lat, dataList[i].position.lng])
    .addTo(mymap)
    .bindPopup(dataList[i].name);
}

// random popup
var popup = L.popup();

//funkcja  która powoduje, że po naciśnięciu na mapę pokazują się w chmurce współrzędne
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on("click", onMapClick);

// mover map function funkcja która ustawia widok mapy w rejon konkretnego punktu z dataList
function goToMap(index) {
  mymap.setView(
    [dataList[index].position.lat, dataList[index].position.lng],
    15
  );
}

//funkcja  zapobiega błędowi i wykonuje funkcję goToMap tylko gdy w evencie (działaniu) index będzie miał jakąś wartość
function preventDefaultAndGoToMap(event) {
  event.preventDefault();
  if (event.target.dataset.index != null) {
    goToMap(event.target.dataset.index);
  }
}

// zmienna ( tablica) do której zostały przypisane elementy znalezione po nazwie klasy
var links = document.getElementsByClassName("nav_dropdown_item");
// pętla  w której każdym elemencie listy wykonana jest funkcja która nasłuchuje kliknięcia i wykonuje funkcję preventDefaultAndGoToMap
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", preventDefaultAndGoToMap);
}
