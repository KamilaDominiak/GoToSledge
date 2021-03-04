//show points in map

function initMap() {
  const myLatLng = { lat: 54.471952, lng: 18.501946  };
  const myLatLng2 = { lat: 54.476191, lng: 18.501077 };
  const map = new google.maps.Map(document.getElementById("map2"), {
    zoom: 15,
    center: myLatLng,
  });

  new google.maps.Marker({
      position: myLatLng,
      map,
      title: "przy Nałkowskiej",
    });
    new google.maps.Marker({
      position: myLatLng2,
      map,
      title: "Fizylierów",
    });
}
