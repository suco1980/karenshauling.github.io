function initMap() {
    const location = { lat: 40.7128, lng: -74.0060 }; // ejemplo
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location,
    });
    new google.maps.Marker({
      position: location,
      map: map,
    });
  }