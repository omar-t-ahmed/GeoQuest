import Globe from "./scripts/globe"

addEventListener("DOMContentLoaded", () => {
    const map = document.getElementById('map')
    new Globe(map)
})
