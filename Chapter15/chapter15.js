// Initializes the Leaflet map and centers it at a specific latitude and longitude. you may change to other value
var map = L.map('map').setView([3.120101, 101.654396], 13);
var userMarker;
var destinationMarker;
var routingControl;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 18,
    attribution: 'Open StreetMap'
}).addTo(map);

function onLoationFound(e){
    // if there is already has a userMaker exists, then the previously userMarker will be remove
    if(userMarker){
        map.removeLayer(userMarker);
    }

    // L.marker() creates a new Leaflet marker
    // e.latlng = latitude/longtitude coordinates
    // openPopup() = immediately displays it (without clicking)
    userMarker = L.marker(e.latlng).addTo(map).bindPopup("You are here").openPopup();
    // focus on user's location, centralize the marker and zoom level 13
    map.setView(e.latlng,13)
}

function onLocationError(e){
    alert(e.message);
}

// comfirm location
// setView: true = auto centralize the map when user's location found

map.locate({setView: true, maxZoom: 16, enableHighAccuracy: true});
map.on('locationfound', onLoationFound)
map.on('locationerror', onLocationError)

// allow the user to place marker by clicking on the map
map.on('click', function(e){
    var latLng = e.latlng;
    
    if(destinationMarker){
        map.removeLayer(destinationMarker);
    }

    destinationMarker = L.marker(latlng).addTo(map).bindPopup("You are here").openPopup();

    if(userMarker){
        if(routingControl){
            map.removeControl(routingControl);
        }

        routingControl = L.routingControl({
            // userMarker.getLatLng() = User's location
            // latLng = destinationMarker
            waypoints: [L.latLng(userMarker.getLatLng()), latLng],
            routeWhileDragging: true
        }).addTo(map);

        map.setView(latLng,13);
    }
});

// Uses the Geocoder API to convert addresses into latitude/longitude coordinates when the user presses "Enter" in the search box.
var geocoder = L.Control.Geocoder.nominatim({
    serviceUrl: 'https://nominatim.openstreetmap.org/',
    geocodingQuetyParams:{},
    reverseQueryParams: {},
    htmlTemplate: function(results){
        return results[0].name;
    }
});

function geocodeWithProxy(address, callback) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;
    
    fetch(proxyUrl + nominatimUrl)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error:', error));
}

// Function to format or process the address string retrieved from the geocoder before displaying it. As written, it simply returns the address unchanged. You can customize it to format the address differently if needed.
function formatAddress(address) {
    return address; // Customize this function as needed
}

document.getElementById('search-box').addEventListener('keypress', function (e){
    if(e.key === 'Enter'){
        var address = e.target.value;
        // results = array
        geocodeWithProxy(address, function(results){
            if (results.length > 0) {
                var latLng = results[0].center; // Get coordinates
                var formattedAddress = formatAddress(results[0].name); // Format display
                
                // Removes any existing destination marker from the map. Then creates a new marker at the geocoded location (latLng), adds it to the map, and binds a popup with the formatted address. The popup is opened immediately to display the destination information.
                if (destinationMarker) {
                    map.removeLayer(destinationMarker);
                }

                destinationMarker = L.marker(latLng).addTo(map)
                    .bindPopup("Destination: " + formattedAddress)
                    .openPopup();

                // Add routing control if the userMarker exists
                if (userMarker) {
                    if (routingControl) {
                        map.removeControl(routingControl);
                    }

                    routingControl = L.Routing.control({
                        waypoints: [
                            L.latLng(userMarker.getLatLng()), // User's location
                            latLng // Destination location
                        ],
                        routeWhileDragging: true
                    }).addTo(map);

                    map.setView(latLng, 13);
                }
            } else {
                alert('Address not found');
            }
        })
    }
});

// Reset button functionality
document.getElementById('reset-button').addEventListener('click', function () {
    if (userMarker) {
        map.removeLayer(userMarker);
    }
    if (destinationMarker) {
        map.removeLayer(destinationMarker);
    }
    if (routingControl) {
        map.removeControl(routingControl);
    }
});