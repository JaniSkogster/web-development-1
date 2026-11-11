const apiKey = "a7283a0a74dbe03c16d2ec19ab5c9007";

let currentCity = "Helsinki";

function getWeather() {

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&lang=fi&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            document.getElementById("weather").innerHTML = `
                <h3>${data.name}</h3>
                <p><strong>Lämpötila:</strong> ${data.main.temp} °C</p>
                <p><strong>Pilvisyys:</strong> ${data.clouds.all} %</p>
                <p><strong>Ilmankosteus:</strong> ${data.main.humidity} %</p>
            `;
        })
        .catch(error => {
            document.getElementById("weather").innerHTML =
                "Virhe haettaessa säätietoja.";
            console.log(error);
        });
}

function changeCity() {
    currentCity = document.getElementById("citySelect").value;
    getWeather();
}

function searchCity() {

    const city = document.getElementById("searchInput").value;

    if (city.trim() === "") {
        return;
    }

    currentCity = city;
    getWeather();
}