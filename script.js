const apiKey = 'COLOQUE AQUI SUA CHAVE API';

const inputSearch = document.querySelector('.search-input');
const searchform = document.querySelector('.search-container')
const ipDisplay = document.getElementById('ip-display');
const locationDisplay = document.getElementById('location-display');
const timezoneDisplay = document.getElementById('timezone-display');
const ispDisplay = document.getElementById('isp-display');

async function searchIP(iporDomain) {

    try {

        const isIp = /^(\d{1,3}\.){3}\d{1,3}$/.test(iporDomain);

        const apiParameter = isIp ? 'ipAddress' : 'domain';

        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${apiParameter}=${iporDomain}`;

        const response = await fetch(url);

        if (!response.ok){
            throw new Error('status: '+response.status)
        }

        const data = await response.json();

        ipDisplay.innerText = data.ip;
        locationDisplay.innerText = `${data.location.city}, ${data.location.postalCode}`;
        timezoneDisplay.innerText = `UTC ${data.location.timezone}`;
        ispDisplay.innerText = data.isp;

        const lat = data.location.lat;
        const lng = data.location.lng;

        map.setView([lat,lng], 13);
        marker.setLatLng([lat,lng]);

    } catch (error) {
        console.error('erro: ', error);
        alert('não funfou');
    }


}

searchform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const ipDigitado = inputSearch.value;

    searchIP(ipDigitado);
});

var map = L.map('map').setView([51.505, -0.09], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([51.505, -0.09]).addTo(map);