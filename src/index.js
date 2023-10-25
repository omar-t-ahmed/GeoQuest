import Globe from "./scripts/globe"

addEventListener("DOMContentLoaded", () => {
    const map = document.getElementById('map')
    new Globe(map)

    navigator.geolocation.getCurrentPosition(success, error);
})


function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

function success(pos) {
    const crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}